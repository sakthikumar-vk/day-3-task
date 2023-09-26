var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all");
 request.send();
 request.onload=function(){
    var result = JSON.parse(request.response);
    for( i=0;i<result.length;i++){
        console.log("Name:"+result[i].name.common);
        console.log("Region:"+result[i].region);
        console.log("Sub-region:"+result[i].subregion);
        console.log("Population:"+ result[i].population);
        console.log("----------------------");
    }
    
 }
