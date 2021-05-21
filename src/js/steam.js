const d = document,
$shows = d.getElementById("shows"),
$template =d.getElementById("show-template").content,
$items = d.getElementById("items"),
$footer = d.getElementById("footer"),
$templateFooter = d.getElementById("template-footer").content,
$templateCarrito = d.getElementById("template-Carrito").content,
$links = d.getElementById("links"),
$fragment =d.createDocumentFragment();
let carrito = {};

function updateGames(url) {
    if (url) {
        $shows.innerHTML = "";
        
    fetch(url)
    .then(response => response.json())
    .then(data => {   
        console.log(data);
    
        const precios = [1199, 1199, 999, 899, 1199,  999, 1199, 899, 999, 1199, 899, 1199, 999, 1199, 1399, 499, 799, 299, 999, 599]
        //console.log(precios)
        // $template.querySelector(".Next").textContent = data.next;
    
        data.results.forEach(element => {       
        //console.log(element);
        //precio del juego
        $template.querySelector("#precio").textContent = precios.shift();    
        //Nombre del Juego
        $template.querySelector("#GameName").textContent = element.name;
        //Rating del Juego
        $template.querySelector("#Rating").innerHTML = "Rating: " + element.rating + ` <i class="fas fa-star" style="color: yellow;"></i>` 
        ? "Rating: " + element.rating + ` <i class="fas fa-star" style="color: yellow;"></i>` : "Sin Puntuación";
        //Clasificación del Juego
        $template.querySelector("#esrb_rating").textContent =  element.esrb_rating == {} ? "Clasificación: "  :  element.esrb_rating == null ? "Sin Clasificación" : "Clasificación: " + element.esrb_rating.name;
        //Imagen del Juego                      
        $template.querySelector("img").src = element.background_image ? element.background_image : element.short_screenshots[0].image;
        $template.querySelector("img").alt = element.name;
        $template.querySelector(".Carrito").id = element.id;
        // $template.querySelector("#Genres").innerHTML = 
        $template.querySelector("#Genres").innerHTML = element.genres[0].name;
        
        $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
        $shows.appendChild($fragment);
        }) //forEach
        // Pintamos los enlaces de siguiente o anterior de la paginacion de los pokemones 
        
        //Boton hacia atrás
        $links.innerHTML = (data.previous) ? `<button class="btn btn-light" onclick="updateGames('${data.previous}')">Atrás</button>` : "";
        //Botón hacia adelante
        $links.innerHTML += (data.next) ? `<button class="btn btn-light" onclick="updateGames('${data.next}')">Siguiente</button>` : "";      
    }) //then Data
    .catch(err=>console.log(err));

    
    d.addEventListener('DOMContentLoaded', () => {
        fetch(url)
        if(localStorage.getItem("carrito")){
            carrito = JSON.parse(localStorage.getItem('carrito'))
            pintarCarrito()
        }//if
    });// addEventListener

}//if

}//updateGames(url)

    $shows.addEventListener("click", e => {
        addCarrito(e)
    }); //$shows.addEventListener

    $items.addEventListener('click', e => {
        btnAccion(e)
    }); //$items.addEventListener

    const addCarrito = e => {
        if (e.target.classList.contains("btn-primary")){
            console.log(e.target.parentElement)
            setCarrito(e.target.parentElement)
        }
        e.stopPropagation()
    }

    const setCarrito = objeto => {
        const producto = {
            id: objeto.querySelector('.Carrito').id,
            name: objeto.querySelector("#GameName").textContent,
            cantidad: 1,
            precio: objeto.querySelector('#precio').textContent
        }
        if(carrito.hasOwnProperty(producto.id)){
            producto.cantidad = carrito[producto.id].cantidad + 1
        }
        carrito[producto.id] = {...producto}
        pintarCarrito()
    }

    const pintarCarrito = () =>{
        //console.log(carrito)
        $items.innerHTML= ""
        Object.values(carrito).forEach(producto => {
            $templateCarrito.querySelector("th").textContent = producto.id
            $templateCarrito.querySelectorAll('td')[0].textContent = producto.name
            $templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
            $templateCarrito.querySelector('.btn-info').id = producto.id
            $templateCarrito.querySelector('.btn-danger').id = producto.id
            $templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio
            const clone = $templateCarrito.cloneNode(true)
            $fragment.appendChild(clone)
        });
        $items.appendChild($fragment);
        pintarFooter();
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    const pintarFooter = () =>{
        $footer.innerHTML = " "
        if(Object.keys(carrito).length === 0){
            $footer.innerHTML = `<th scope="row" colspan="5">Carrito Vacío. ¡Comience a comprar!</th>`
            return
        }//if

        const nCantidad = Object.values(carrito).reduce( (acc, {cantidad}) => acc + cantidad, 0 );
        const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0);
        $templateFooter.querySelectorAll('td')[0].textContent = nCantidad;
        $templateFooter.querySelector('span').textContent = nPrecio;

        const clone = $templateFooter.cloneNode(true)
        $fragment.appendChild(clone)
        $footer.appendChild($fragment)

        const Vaciar = d.addEventListener('click', () => {
            carrito = {}
            pintarCarrito()
        });//Vaciar
    }//pintarFooter

    // Render the PayPal button into #paypal-button-container
    paypal.Buttons({

        // Set up the transaction
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: nPrecio
                    } //amount
                }] //purchase_units
            }); //actions.order
        }, //createOrder
    
        // Finalize the transaction
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                // Show a success message to the buyer
                alert('Transaction completed by ' + details.payer.name.given_name + '!');
            });
        }//onApprove
        }).render('#paypal-button-container');

const btnAccion = (e) => {
        if( e.target.classList.contains('btn-info')){
            carrito[e.target.id]
            const producto = carrito[e.target.id]
            producto.cantidad ++
            carrito[e.target.id] = {...producto}
            pintarCarrito()
        } 

        if( e.target.classList.contains('btn-danger')){
            carrito[e.target.id]
            const producto = carrito[e.target.id]
            producto.cantidad --
            if(producto.cantidad === 0) {
                delete carrito[e.target.id]
            }
            pintarCarrito()
        } 
        e.stopPropagation()
};//btnAccion
updateGames('https://api.rawg.io/api/games?key=09740bd3088f4f9e8ccaf35af302c2d6&platforms=4');