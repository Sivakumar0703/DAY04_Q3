var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    for(let i=0;i<result.length;i++){
    console.log("COUNTRY NAME :",result[i].name.official," ","REGION :",result[i].region," ","SUB-REGION :",result[i].subregion," ","POPULATION :",result[i].population);
    } 
}



//name.region subregion