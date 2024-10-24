let aeropuertos=[{
    "id": 1,
    "nombre": "Doany Airport",
    "puntaje": 9
  }, {
    "id": 2,
    "nombre": "Dehradun Airport",
    "puntaje": 3
  }, {
    "id": 3,
    "nombre": "Moyale Airport",
    "puntaje": 6
  }, {
    "id": 4,
    "nombre": "Roanne-Renaison Airport",
    "puntaje": 7
  }, {
    "id": 5,
    "nombre": "Cayana Airstrip",
    "puntaje": 8
  }, {
    "id": 6,
    "nombre": "Sancti Spiritus Airport",
    "puntaje": 6
  }, {
    "id": 7,
    "nombre": "Sher-Wood Airport",
    "puntaje": 10
  }, {
    "id": 8,
    "nombre": "Bizant Airport",
    "puntaje": 7
  }, {
    "id": 9,
    "nombre": "Grand Forks Airport",
    "puntaje": 8
  }, {
    "id": 10,
    "nombre": "Kwailabesi Airport",
    "puntaje": 6
  }]


  function mostrar(aeropuertos){
    let data="";

    
    for(let aeropuerto of aeropuertos){
        let puntos="";
        for(let i=0;i<10;i++){
            if ((i+1)<aeropuerto.puntaje){
                puntos+="<img src='./img/llena.png' width=15>";
            }else{
                puntos+="<img src='./img/vacia.png' width=15>";
            }
        }
        data+=`<tr><td> ${aeropuerto.nombre}</td><td style="background-color:grey;">${puntos}</td></tr>`;
    }
    document.getElementById('filas').innerHTML=data;
}

document.addEventListener('DOMContentLoaded',()=>{
  mostrar(aeropuertos);
  
})
