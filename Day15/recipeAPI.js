var searchItem;
var onSubmit=document.getElementById('submit');
onSubmit.addEventListener('click',function(){
    searchItem=document.getElementById('search').value;
    var finalResults=document.getElementById('display');
    finalResults.innerHTML="";
    var recipeUrl=`https://api.edamam.com/search?q=${searchItem}&app_id=8ff6b44e&app_key=3b7ecdeb521086832b40022a9995234c&from=0&to=3&calories=591-722&health=alcohol-free`;
    fetch(recipeUrl)
    .then(resp=>{
        return resp.json();
    })
    .then((result)=>{
        console.log(result);
        result.hits.filter((item)=>{
            $(document).ready(function(){
                $('[data-toggle="popover"]').popover();
              });
           finalResults.innerHTML+=`
           <div class="card">
                <div class="card-body">
                    <h4 class="card-subtitle mb-2 text-muted" id="label">${item.recipe.label}</h4>
                    <img class="card-text" id="image" src="${item.recipe.image}" alt="no image"></img>
                    <p class="card-subtitle mb-2 text-muted danger" id="calories">Calories: ${item.recipe.calories}</p>
                    <b><a href="${item.recipe.url}" target="blank" id="url">${item.recipe.url}</a></b><br>
                    <input type="button" id="popover" data-toggle="popover" data-trigger="focus" title="Health Labels:" data-content="${item.recipe.healthLabels}" value="Health Labels"><br>
                    <input type="button" id="popover" data-toggle="popover" data-trigger="focus" title="Ingredients:" data-content="${item.recipe.ingredientLines}" value="Ingredients">                    
                </div>
            </div>`;
            
       })
    })

    .catch((error) => {
    console.log(error);
    });

})





