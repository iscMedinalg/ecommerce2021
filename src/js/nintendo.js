const d = document,
$shows = d.getElementById("shows"),
$template =d.getElementById("show-template").content,
$items = d.getElementById("items"),
$footer = d.getElementById("footer"),
$templateFooter = d.getElementById("template-footer").content,
$templateCarrito = d.getElementById("template-Carrito").content,
$fragment =d.createDocumentFragment()
let carrito = {}

//nintendo
const url = 'https://api.rawg.io/api/games?key=09740bd3088f4f9e8ccaf35af302c2d6&platforms=7&page=3';
//xbox
//const url = 'https://api.rawg.io/api/games?key=09740bd3088f4f9e8ccaf35af302c2d6&platforms=1&page=1';
//play
//const url = 'https://api.rawg.io/api/games?key=09740bd3088f4f9e8ccaf35af302c2d6&platforms=187&page=1'
//steam
//const url = 'https://api.rawg.io/api/games?key=09740bd3088f4f9e8ccaf35af302c2d6&platforms=4'
//random
//const url = 'https://api.rawg.io/api/games?key=09740bd3088f4f9e8ccaf35af302c2d6&dates=2019-09-01,2019-09-30&platforms=18,1,7'


d.addEventListener('DOMContentLoaded', () => {
    fetch(url)
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})

fetch(url)
.then(response => response.json())
.then(data => {   
    console.log(data)
    
    data.results.forEach(element => {       
        console.log(element)
        //Nombre del Juego
        $template.querySelector("#GameName").textContent = element.name
        
        let precios = [999, 1199, 999, 1199, 899, 999, 1199, 899, 999, 1199, 899, 999, 999, 1199, 1199, 499, 799, 299, 999, 599]
        precios.map(element =>{
            console.log(element)
            $template.querySelector("#precio").innerHTML = element
        })
        //Rating del Juego
        $template.querySelector("#Rating").innerHTML = "Rating: " + element.rating + ` <i class="fas fa-star" style="color: yellow;"></i>` 
        ? "Rating: " + element.rating + ` <i class="fas fa-star" style="color: yellow;"></i>` : "Sin Puntuación";
        //Clasificación del Juego
        // $template.querySelector("#esrb_rating").innerHTML = "Clasificación: " + element.esrb_rating.name ? "Clasificación: " + element.esrb_rating.name : "Sin Clasificación" ;
        //Imagen del Juego                      
        $template.querySelector("img").src = element.background_image ? element.background_image : element.short_screenshots[0].image
        $template.querySelector("img").alt = element.name
        $template.querySelector(".Carrito").id = element.id

        element.genres.forEach(ele => {
            $template.querySelector("#Genres").textContent = ele.name ? ele.name : "Action"
        })

        $clone = d.importNode($template, true)
        $fragment.appendChild($clone)
        $shows.appendChild($fragment)

    }) //forEach      
}) //then Data
.catch(err=>console.log(err));

$shows.addEventListener("click", e => {
    addCarrito(e)
})

$items.addEventListener('click', e => {
    btnAccion(e)
})

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
    })
    $items.appendChild($fragment)
    pintarFooter()
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = () =>{
    $footer.innerHTML = " "
    if(Object.keys(carrito).length === 0){
        $footer.innerHTML = `<th scope="row" colspan="5">Carrito Vacío. ¡Comience a comprar!</th>`
        return
    }

    const nCantidad = Object.values(carrito).reduce( (acc, {cantidad}) => acc + cantidad, 0 )
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc +cantidad * precio, 0)

    $templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    $templateFooter.querySelector('span').textContent = nPrecio

    const clone = $templateFooter.cloneNode(true)
    $fragment.appendChild(clone)
    $footer.appendChild($fragment)

    const Vaciar = d.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })
}

const btnAccion = e => {
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
}



