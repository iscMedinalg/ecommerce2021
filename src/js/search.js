d.addEventListener("keypress", async e=>{
        
        if(e.target.matches("#search")){
            if(e.key === "Enter"){
                
                try{

                    $shows.innerHTML = `<div class="spinner-border text-light text-center" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>`;   
                    let query = e.target.value.toLowerCase(),
                        
                    api = `https://api.rawg.io/api/games?key=09740bd3088f4f9e8ccaf35af302c2d6&search=${query}`,
                    res = await fetch(api),
                    json = await res.json();

                    console.log(api, res, json)
                    const precios = [1199, 1199, 999, 899, 1199,  999, 1199, 899, 999, 1199, 899, 1199, 999, 1199, 1399, 499, 799, 299, 999, 599]

                    if(!res.ok) throw { status: res.status, statusText: res.statusText }

                    if(json.results.length === 0){
                        $shows.innerHTML = `<h2>No existen resultados para </h2>${query}`;
                    } else {
                        json.results.forEach(element => {

                            //precio del juego
                            $template.querySelector("#precio").textContent = precios.shift();    
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
                            //Genero del Juego
                            $template.querySelector("#Genres").innerHTML = element.genres[0].name;
                                
                                
                            let $clone = d.importNode($template, true);
                            $fragment.appendChild($clone);
                        });

                             $shows.innerHTML = "";
                             $shows.appendChild($fragment)
                        }

                } catch(err){
                    console.log(err)
                    let message = err.statusText || "Ocurrio un error";
                    $shows.innerHTML = `<p>Error ${err.status}:${message}</p>`
                }
            }
        }   
})