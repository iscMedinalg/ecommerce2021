const url = 'https://api.rawg.io/api/games?key=09740bd3088f4f9e8ccaf35af302c2d6&platforms=7&page=3'

const url2 = 'https://api.rawg.io/api/platforms?page=2'

//Peticion api
fetch(url2)
.then(response => response.json())
.then (data => {
    console.log(data)
})
.catch(err=>console.log(err))


const $imagenes = document.querySelector('#ImgGame')
const $GameName = document.querySelector('#GameName')
const $GameRating = document.querySelector('#GameRating')
function renderImage(image) {
    $imagenes.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
console.log(data)
renderImage(data.results[0].background_image)
console.log(data.results[0])
    $GameName.innerHTML = `<h5>${data.results[0].name}</h5>
                           <p>Genero: ${data.results[0].genres[0].name}<br>
                           Critica: ${data.results[0].metacritic} puntos<br>
                           </p>`
    $GameRating.innerHTML= `<p>${data.results[0].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


const $imagenes1 = document.querySelector('#ImgGame1')
const $GameName1 = document.querySelector('#GameName1')
const $GameRating1 = document.querySelector('#GameRating1')
function renderImage1(image) {
    $imagenes1.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
renderImage1(data.results[16].background_image)
console.log(data.results[16])
    $GameName1.innerHTML = `<h5>${data.results[16].name}</h5>
                           <p>Genero: ${data.results[16].genres[0].name}<br>
                           Critica: ${data.results[16].metacritic} puntos<br>
                           </p>`
    $GameRating1.innerHTML= `<p>${data.results[16].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


const $imagenes2 = document.querySelector('#ImgGame2')
const $GameName2 = document.querySelector('#GameName2')
const $GameRating2 = document.querySelector('#GameRating2')
function renderImage2(image) {
    $imagenes2.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
renderImage2(data.results[15].background_image)
console.log(data.results[15])
    $GameName2.innerHTML = `<h5>${data.results[15].name}</h5>
                           <p>Genero: ${data.results[15].genres[0].name}<br>
                           Critica: ${data.results[15].metacritic} puntos<br>
                           </p>`
    $GameRating2.innerHTML= `<p>${data.results[15].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


const $imagenes3 = document.querySelector('#ImgGame3')
const $GameName3 = document.querySelector('#GameName3')
const $GameRating3 = document.querySelector('#GameRating3')
function renderImage3(image) {
    $imagenes3.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
renderImage3(data.results[3].background_image)
console.log(data.results[3])
    $GameName3.innerHTML = `<h5>${data.results[3].name}</h5>
                           <p>Genero: ${data.results[3].genres[0].name}<br>
                           Critica: ${data.results[3].metacritic} puntos<br>
                           </p>`
    $GameRating3.innerHTML= `<p>${data.results[3].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


const $imagenes4 = document.querySelector('#ImgGame4')
const $GameName4 = document.querySelector('#GameName4')
const $GameRating4 = document.querySelector('#GameRating4')
function renderImage4(image) {
    $imagenes4.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
renderImage4(data.results[4].background_image)
console.log(data.results[4])
    $GameName4.innerHTML = `<h5>${data.results[4].name}</h5>
                           <p>Genero: ${data.results[4].genres[0].name}<br>
                           Critica: ${data.results[4].metacritic} puntos<br>
                           </p>`
    $GameRating4.innerHTML= `<p>${data.results[4].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


const $imagenes5 = document.querySelector('#ImgGame5')
const $GameName5 = document.querySelector('#GameName5')
const $GameRating5 = document.querySelector('#GameRating5')
function renderImage5(image) {
    $imagenes5.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
renderImage5(data.results[5].background_image)
console.log(data.results[5])
    $GameName5.innerHTML = `<h5>${data.results[5].name}</h5>
                           <p>Genero: ${data.results[5].genres[0].name}<br>
                           Critica: ${data.results[5].metacritic} puntos<br>
                           </p>`
    $GameRating5.innerHTML= `<p>${data.results[5].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


const $imagenes6 = document.querySelector('#ImgGame6')
const $GameName6 = document.querySelector('#GameName6')
const $GameRating6 = document.querySelector('#GameRating6')
function renderImage6(image) {
    $imagenes6.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
renderImage6(data.results[6].background_image)
console.log(data.results[6])
    $GameName6.innerHTML = `<h5>${data.results[6].name}</h5>
                           <p>Genero: ${data.results[6].genres[0].name}<br>
                           Critica: ${data.results[6].metacritic} puntos<br>
                           </p>`
    $GameRating6.innerHTML= `<p>${data.results[6].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


const $imagenes7 = document.querySelector('#ImgGame7')
const $GameName7 = document.querySelector('#GameName7')
const $GameRating7 = document.querySelector('#GameRating7')
function renderImage7(image) {
    $imagenes7.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
renderImage7(data.results[7].background_image)
console.log(data.results[7])
    $GameName7.innerHTML = `<h5>${data.results[7].name}</h5>
                           <p>Genero: ${data.results[7].genres[0].name}<br>
                           Critica: ${data.results[7].metacritic} puntos<br>
                           </p>`
    $GameRating7.innerHTML= `<p>${data.results[7].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


const $imagenes8 = document.querySelector('#ImgGame8')
const $GameName8 = document.querySelector('#GameName8')
const $GameRating8 = document.querySelector('#GameRating8')
function renderImage8(image) {
    $imagenes8.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
renderImage8(data.results[8].background_image)
console.log(data.results[8])
    $GameName8.innerHTML = `<h5>${data.results[8].name}</h5>
                           <p>Genero: ${data.results[8].genres[0].name}<br>
                           Critica: ${data.results[8].metacritic} puntos<br>
                           </p>`
    $GameRating8.innerHTML= `<p>${data.results[8].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


const $imagenes9 = document.querySelector('#ImgGame9')
const $GameName9 = document.querySelector('#GameName9')
const $GameRating9 = document.querySelector('#GameRating9')
function renderImage9(image) {
    $imagenes9.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
renderImage9(data.results[9].background_image)
console.log(data.results[9])
    $GameName9.innerHTML = `<h5>${data.results[9].name}</h5>
                           <p>Genero: ${data.results[9].genres[0].name}<br>
                           Critica: ${data.results[9].metacritic} puntos<br>
                           </p>`
    $GameRating9.innerHTML= `<p>${data.results[9].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


const $imagenes10 = document.querySelector('#ImgGame10')
const $GameName10 = document.querySelector('#GameName10')
const $GameRating10 = document.querySelector('#GameRating10')
function renderImage10(image) {
    $imagenes10.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
renderImage10(data.results[10].background_image)
console.log(data.results[10])
    $GameName10.innerHTML = `<h5>${data.results[10].name}</h5>
                           <p>Genero: ${data.results[10].genres[0].name}<br>
                           Critica: ${data.results[10].metacritic} puntos<br>
                           </p>`
    $GameRating10.innerHTML= `<p>${data.results[10].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


const $imagenes11 = document.querySelector('#ImgGame11')
const $GameName11 = document.querySelector('#GameName11')
const $GameRating11 = document.querySelector('#GameRating11')
function renderImage11(image) {
    $imagenes11.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
renderImage11(data.results[11].background_image)
console.log(data.results[11])
    $GameName11.innerHTML = `<h5>${data.results[11].name}</h5>
                           <p>Genero: ${data.results[11].genres[0].name}<br>
                           Critica: ${data.results[11].metacritic} puntos<br>
                           </p>`
    $GameRating11.innerHTML= `<p>${data.results[11].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


const $imagenes12 = document.querySelector('#ImgGame12')
const $GameName12 = document.querySelector('#GameName12')
const $GameRating12 = document.querySelector('#GameRating12')
function renderImage12(image) {
    $imagenes12.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
renderImage12(data.results[12].background_image)
console.log(data.results[12])
    $GameName12.innerHTML = `<h5>${data.results[12].name}</h5>
                           <p>Genero: ${data.results[12].genres[0].name}<br>
                           Critica: ${data.results[12].metacritic} puntos<br>
                           </p>`
    $GameRating12.innerHTML= `<p>${data.results[12].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


const $imagenes13 = document.querySelector('#ImgGame13')
const $GameName13 = document.querySelector('#GameName13')
const $GameRating13 = document.querySelector('#GameRating13')
function renderImage13(image) {
    $imagenes13.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
renderImage13(data.results[13].background_image)
console.log(data.results[13])
    $GameName13.innerHTML = `<h5>${data.results[13].name}</h5>
                           <p>Genero: ${data.results[13].genres[0].name}<br>
                           Critica: ${data.results[13].metacritic} puntos<br>
                           </p>`
    $GameRating13.innerHTML= `<p>${data.results[13].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


const $imagenes14 = document.querySelector('#ImgGame14')
const $GameName14 = document.querySelector('#GameName14')
const $GameRating14 = document.querySelector('#GameRating14')
function renderImage14(image) {
    $imagenes14.setAttribute('src', image)
}

//Peticion api
fetch(url)
.then(response => response.json())
.then (data => {
renderImage14(data.results[14].background_image)
console.log(data.results[14])
    $GameName14.innerHTML = `<h5>${data.results[14].name}</h5>
                           <p>Genero: ${data.results[14].genres[0].name}<br>
                           Critica: ${data.results[14].metacritic} puntos<br>
                           </p>`
    $GameRating14.innerHTML= `<p>${data.results[14].rating}
                           <i class="fas fa-star" id="GameStar">
                           <i class="fas fa-gift " id="ShopCar"></i>
                           <i class="fas fa-money-bill-wave "></i></p>`
                          })
.catch(err=>console.log(err))

/*****************************************************/


