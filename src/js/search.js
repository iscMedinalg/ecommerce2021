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

                    if(!res.ok) throw { status: res.status, statusText: res.statusText }

                    if(json.results.length === 0){
                        $shows.innerHTML = `<h2>No existen resultados para </h2>${query}`;
                    } else {
                        json.results.forEach(el => {
                                
                            $template.querySelector("#GameName").textContent = el.name;
                            el.genres.forEach(element =>{
                                $template.querySelector("#Genres").textContent = element.name;
                            });

                              /*  el.parent_platforms.forEach(element =>{
                                    $template.querySelector("#Parent_platforms").textContent = element.name;
                                });*/

                                //$template.querySelector("#Rating").textContent = el.rating;
                                
                                /*el.stores.forEach(element =>{
                                    $template.querySelector("#Stores").textContent = element.stores;
                                });*/

                                //$template.querySelector("#esrb_rating").textContent = el.esrb_rating.name ? el.esrb_rating.name : "Sin clasificación";
                                
                            $template.querySelector("#Rating").textContent = "Rating: " + el.rating ? "Rating: " + el.rating : "Sin Puntuación" ;
                                
                            $template.querySelector("img").src = el.background_image ? el.background_image : el.short_screenshots[0].image;
                            $template.querySelector("img").alt = el.name;
                                 //$template.querySelector("img").style.maxWidth = "100%";
                                //  $template.querySelector("a").href = el.show.url ? el.show.url : "#";
                                //  $template.querySelector("a").target = el.show.url ? "_blank" : "_self";
                                //  $template.querySelector("a").textContent = el.show.url ? "Ver más..." : "";
                                
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