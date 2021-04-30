const url = 'https://api.rawg.io/api/games?key=09740bd3088f4f9e8ccaf35af302c2d6&platforms=4'

const d = document,
$shows = d.getElementById("shows"),
$template =d.getElementById("show-template").content,
$fragment =d.createDocumentFragment();


fetch(url)
.then(response => response.json())
.then(data => {   
    console.log(data)
    
    data.results.forEach(element => {       
        console.log(element)
        $template.querySelector("#GameName").textContent = element.name
        $template.querySelector("#Rating").innerHTML = "Rating: " + element.rating + ` <i class="fas fa-star" style="color: yellow;"></i>` 
        ? "Rating: " + element.rating + ` <i class="fas fa-star" style="color: yellow;"></i>` : "Sin Puntuación"                      
        $template.querySelector("img").src = element.background_image ? element.background_image : element.short_screenshots[0].image
    
        $template.querySelector("img").alt = element.name
        
        data.results.forEach(element => {
    
        })

        $clone = d.importNode($template, true)
        $fragment.appendChild($clone)
        $shows.appendChild($fragment)

    }) //forEach      
}) //then Data
.catch(err=>console.log(err));
