//poner URL de la api del tiempo
var urlWeather =
  "https://api.openweathermap.org/data/2.5/forecast/daily?q=Madrid&units=metric&appid=479092b77bcf850403cb2aeb1a302425";

var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};


var diaSemana = new Array ("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");

getJSON(urlWeather).then(function(data) {
  document.write("<table border='2'>");    
  document.write("<th colspan='3'>"+data.city.name);
  document.write("(lat:"+data.city.coord.lat+", lon:"+data.city.coord.lon+")<br></th>");  
  document.write("<tr><th>DIA SEMANA</th><th>FECHA</th><th>TEMP</th></tr>");
 
 for(let i=0; i< data.list.length;i++)   {
    date = new Date(data.list[i].dt*1000); /*sale en milisegundos, lo queremos en segundos por eso multiplicamos por 1000 */
    document.write("<tr><td><b>"+diaSemana[date.getDay()] + "</b></td><td> " +date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear()+"</td><td>"+data.list[i].temp.day+"º<br></td></tr>");
 }
  document.write("</table>"); 
}, function(status) {
  alert('Error...');
}); 

/*
getJSON(urlWeather).then(function(data) {
  document.write("<h1>"+data['squadName']+"</h1>");
  var heroes = data['members'];
 for(let i=0; i< heroes.length;i++)   {
    var superPowers = heroes[i].powers;
    
   
    document.write("<h2>"+heroes[i].name+"</h2>");
    document.write("<p>Identidad secreta:"+heroes[i].secretIdentity+"</p>");
    document.write("<p>Edad:"+heroes[i].age+"</p>");
    document.write("<p>Poderes:</p>");
   for (var j = 0; j < superPowers.length; j++) {
       document.write("<ul>")
       document.write("<li>"+superPowers[j]+"</li>");
       document.write("</ul>")
    }
   
   
 }
}, function(status) {
  alert('Algo fue mal.');
});
*/