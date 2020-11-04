async function requestNow(){
    try{
        let countriesUrl = await fetch('https://restcountries.eu/rest/v2/all')
        let countryData = await countriesUrl.json()
        var display = document.getElementById('display')
        countryData.filter(async (x)=>{
            var weatherUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${x.name}&appid=65803ead8f1fa7a51f1a404137052b41`)
            var weatherData = await weatherUrl.json()
            $(function () {
                $('[data-toggle="popover"]').popover()
              })
            display.innerHTML+=`
            <div class="card row col-lg-4 col-sm-12" style="width: 20rem;">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">${x.name}</h6>
                    <img class="card-text" src="${x.flag}"></img>
                    <p class="card-text"><br>Capital: <b id="capital">${x.capital}</b></p>
                    <p class="card-text">Country Code: <b>${x.alpha2Code},${x.alpha3Code}</b></p>
                    <p class="card-text">Region: <b>${x.region}</b></p>
                    <p class="card-text">LatLong: <b>${x.latlng}</b></p>
                    <button type="button" class="btn btn-primary" data-container="body" data-trigger="focus" data-toggle="popover" data-placement="top" data-content="Temperature: ${weatherData.main.temp} | pressure: ${weatherData.main.pressure} | Humidity:${weatherData.main.humidity}">
                        Click for weather
                    </button>
                </div>
            </div>`
        })
    }
    catch(err){console.log(err)}
}
requestNow()

