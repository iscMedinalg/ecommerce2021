const url = 'https://api.rawg.io/api/games?key=09740bd3088f4f9e8ccaf35af302c2d6&dates=2019-09-01,2019-09-30&platforms=18,1,7'

fetch(url)
.then(response => response.json() )
.then(data => {
    let element = document.getElementById('elem')
    //element.innerHTML = `<p>${data.results[0].name}</p>`;
    element.innerHTML = `<p>${data.results[0].short_screenshots[0].image}</p>`;
    //element.innerHTML = `<img src="${data.results[0].short_screenshots[0].image}"`;
    console.log(data)
})
.catch(err=>console.log(err))