function makeRequest(method, url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (xhr.status == 200) {
        resolve(xhr.response);
      } else {
        reject({
          message: xhr.statusText,
        });
      }
      xhr.onerror = function () {
        reject({
          message: xhr.statusText,
        });
      };
    };
    xhr.send();
  });
}

makeRequest("GET", "https://restcountries.eu/rest/v2/all")
  .then((resp) => {
    return JSON.parse(resp);
  })
  .then((result)=>{
      result.filter((x)=>{
        var div=document.getElementById('display');
        div.innerHTML+=`
        <div class="card-deck">
            <div class="card" style="width: 20rem;">
                <div class="card-body">
                    <h6 class="card-subtitle mb-2 text-muted">${x.name}</h6>
                    <img class="card-text" src="${x.flag}"></img>
                    <p class="card-text"><br>Capital: <b id="capital">${x.capital}</b></p>
                    <p class="card-text">Country Code: <b>${x.alpha2Code},${x.alpha3Code}</b></p>
                    <p class="card-text">Region: <b>${x.region}</b></p>
                    <p class="card-text">LatLong: <b>${x.latlng}</b></p>
                </div>
            </div>
        </div>`;
      })
  })

  .catch((error) => {
    console.log(error);
  });