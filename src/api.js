const url = 'https://api.rawg.io/api/games?key=09740bd3088f4f9e8ccaf35af302c2d6&dates=2019-09-01,2019-09-30&platforms=18,1,7'

/*const url2 = 'https://api.rawg.io/api/stores?key=09740bd3088f4f9e8ccaf35af302c2d6&dates=2019-09-01,2019-09-30&platforms=18,1,7'

fetch(url2)
.then(response => response.json())
.then (data => {
console.log(data)
console.log(data.results[0].background_image)
}); */

//Numero Aleatorio



/*for(var i=0; i<20; i++){
    var num = Math.floor((Math.random() * (21-1))+1);
    console.log(i);
}*/

let num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
num = num.sort(function() {return Math.random() - 0.5})
console.log(num)



const $imagenes = document.querySelector('#ImgGame')
function renderImage(image) {
    $imagenes.setAttribute('src', image)
}

//Peticion Imagen Background
fetch(url)
.then(response => response.json())
.then (data => {
renderImage(data.results[num[0]].background_image)
})
.catch(err=>console.log(err))

const $GameName = document.querySelector('#GameName')

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data.results[num[0]])
    $GameName.innerHTML = `<h5>${data.results[num[0]].name}</h5>
                           <p>Genero: ${data.results[num[0]].genres[0].name}<br>
                           Critica: ${data.results[num[0]].metacritic} puntos<br>
                           </p>`
})
.catch(err=>console.log(err))

const $GameRating = document.querySelector('#GameRating')
fetch(url)
.then(response => response.json())
.then (data => {
$GameRating.innerHTML= `<p>${data.results[num[0]].rating}
 <i class="fas fa-star" id="GameStar">
 <i class="fas fa-gift fa-2x" id="ShopCar"></i>
 <i class="fas fa-money-bill-wave fa-2x"></i></p>`
})
.catch(err=>console.log(err))

