d.addEventListener('DOMContentLoaded', () => {
    fetch(url)
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})

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