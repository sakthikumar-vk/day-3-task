var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.onload=function(){
    var result = JSON.parse(request.response);
    
    
    result.forEach(function(country) {
        console.log("Country: " + country.name.common);
        console.log("Population: " + country.population);
        console.log("Region: " + country.region);
        console.log("Subregion: " + country.subregion);
        console.log("----------------------");
      });
    }