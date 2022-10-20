
new SlimSelect({
  select: '#select-ubucaciones'
});

document.querySelectorAll('input[type=search]')[0].placeholder = 'Buscar nombre de persona';
document.querySelectorAll('input[type=search]')[0].style = 'text-align: center;';
var seleccion_finca = document.getElementById("select-ubucaciones");
//Muestrame como principal en el mapa 
var map = L.map('map').setView([9.2962087, -75.3994974], 13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);
// // Añademe un marcador en el mapa principal
L.marker([9.2962087, -75.3994974]).addTo(map).bindPopup('Sincelejo sucre').openPopup();

//Datos de las personas de cada una de las fincas
var personas = [
  //Coloso
  { nombre: "Jorge Luis Salas Romero", vereda: "Arenita", celular: "3184289846", tipo_cacao: "Criollo Híbrido", precio: "$8.000 kg", lat: 9.563917, lng: -75.389083 },
  { nombre: "Julio Salas Vitola", vereda: "Arenita", celular: "3117915972", tipo_cacao: "Criollo Híbrido", precio: "$8.000 kg", lat: 9.565233, lng: -75.391400 },
  { nombre: "Fraicer Salas Vitola", vereda: "Arenita", celular: "3212223674", tipo_cacao: " Híbrido", precio: "$7.400 kg", lat: 9.566417, lng: -75.390389 },
  { nombre: "Ramiro Romero Benitez", vereda: "Arenita", celular: "3122625487", tipo_cacao: "Criollo Híbrido", precio: "$7.500 kg", lat: 9.574733, lng: -75.393500 },
  { nombre: "Nancy del Socorro Tovar Vitola", vereda: "Arenita", celular: "3162853327", tipo_cacao: "Criollo Híbrido", precio: "$7.500 kg", lat: 9.570850, lng: -75.394017 },
  { nombre: "Somelia Vitola Hernandez", vereda: "Arenita", celular: "3183174252", tipo_cacao: "Criollo Híbrido", precio: "$7.500 kg", lat: 9.563417, lng: -75.389250 },
  { nombre: "Santander Salas Vitola", vereda: "Arenita", celular: "3128704265", tipo_cacao: "Híbrido", precio: "$7.400 kg", lat: 9.565028, lng: -75.389417 },
  { nombre: "Arides Antonio Romero", vereda: "Arenita", celular: "3162796707", tipo_cacao: "Criollo Híbrido", precio: "$7.500 kg", lat: 9.619600, lng: -75.334067 },
  //Chalan
  { nombre: "Bladimir Zermeño Rodriguez", vereda: "Sillete Medio", celular: "3205788840", tipo_cacao: "Criollo Híbrido", precio: "$8.000 kg", lat: 9.597722, lng: -75.329917 },
  { nombre: "Rafael Navarro", vereda: "Sillete Medio", celular: "3127633611", tipo_cacao: "Criollo Híbrido", precio: "$7.000 kg", lat: 9.611528, lng: -75.3378897 },
  { nombre: "Dagoberto Navarro", vereda: "Sillete Medio", tipo_cacao: "Híbrido", precio: "$7.400 kg", lat: 9.613389, lng: -75.336833 },
  { nombre: "Jesús Leones Sequeda", vereda: "El Limon", celular: "3017854206", tipo_cacao: " Híbrido", precio: "$7.400 kg", lat: 9.597722, lng: -75.329917 },
  { nombre: "Yeison Leones Sequeda", vereda: "El Limon", celular: "3216999009", tipo_cacao: " Híbrido", precio: "$7.400 kg", lat: 9.597889, lng: -75.329750 },
  { nombre: "Alberto Leones Serrano", vereda: "El Limon", celular: "3145947860", tipo_cacao: "Criollo Híbrido", precio: "$7.400 kg", lat: 9.598500, lng: -75.329694 },
  { nombre: "Luis Leones", vereda: "El Limon", celular: "3152258654", tipo_cacao: " Híbrido", precio: "$7.500 kg", lat: 9.600750, lng: -75.329694 },
  { nombre: "Ivan Navarro Leon", vereda: "El Limon", tipo_cacao: " Híbrido", precio: "$7.400 kg", lat: 9.600750, lng: -75.329694 },
  { nombre: "Jaime Sequeda", vereda: "El Limon", tipo_cacao: " Híbrido", precio: "$7.400 kg", lat: 9.619600, lng: -75.334067 },
  { nombre: "José Rodríguez Ramírez", vereda: "El Limon", tipo_cacao: " Híbrido", precio: "$7.400 kg", lat: 9.617833, lng: -75.336111 },
  //Ovejas
  { nombre: "Filiberto Mendoza", vereda: "Chengue", celular: "3105729063", tipo_cacao: " Híbrido", precio: "$7.400 kg", lat: 9.650150, lng: -75.302250 },
  { nombre: "Edinson Meriño Villegas", vereda: "Chengue", celular: "3133880425", tipo_cacao: " Híbrido", precio: "$7.400 kg", lat: 9.659389, lng: -75.306028 },
  { nombre: "José Ortiz", vereda: "Chengue", celular: "3106817520", tipo_cacao: " Híbrido", precio: "$7.400 kg", lat: 9.658306, lng: -75.307500 },
  { nombre: "Piedad Pérez Pelufo", vereda: "Don Gabriel", celular: "3114245127", tipo_cacao: "Criollo Híbrido", precio: "$8.000 kg", lat: 9.613183, lng: -75.296983 },
  { nombre: "Jorge Herrera Mendoza", vereda: "Don Gabriel", celular: "3148848546", tipo_cacao: "Criollo Híbrido", precio: "$7.400 kg", lat: 9.627750, lng: -75.296033 },
  { nombre: "Elvia Martinez", vereda: "Don Gabriel", celular: "3126391911", tipo_cacao: "Criollo  Híbrido", precio: "$7.400 kg", lat: 9.638139, lng: -75.291417 },
  { nombre: "Fernando Fernández Sequeda", vereda: "El Tesoro", celular: "3113909015", tipo_cacao: "Criollo Híbrido", precio: "$7.500 kg", lat: 9.627817, lng: -75.332767 },
  { nombre: "Ramiro Fernandez", vereda: "El Tesoro", celular: "3217203305", tipo_cacao: "Criollo  Híbrido", precio: "$7.500 kg", lat: 9.627861, lng: -75.330083 },
  { nombre: "Armando Fernandez", vereda: "El Tesoro", celular: "3147254788", tipo_cacao: "Criollo Híbrido", precio: "$7.500 kg", lat: 9.628528, lng: -75.329944 },
  { nombre: "Arcelio Fernandez Sequeda", vereda: "El Tesoro", celular: "3147190248", tipo_cacao: "Criollo  Híbrido", precio: "$7.400 kg", lat: 9.631222, lng: -75.330222 },
  { nombre: "Aroldo Fernandez Cardenas", vereda: "El Tesoro", celular: "3114266493", tipo_cacao: "Criollo Híbrido", precio: "$7.500 kg", lat: 9.632917, lng: -75.329556 },
  { nombre: "Ramiro Cardenas Velilla", vereda: "Salitral", celular: "3127980142", tipo_cacao: "Criollo Híbrido", precio: "$7.400 kg", lat: 9.644944, lng: -75.290361 },
];

seleccion_finca.addEventListener('change', function (e) { //Cuando cambie el select
  let indice = e.target.selectedIndex; // //Indice para identificar el marcador de la persona seleccionada
  indice = indice - 1; //Resto 1 para que el indice empiece en 0
  let imagen = ""; //Imagen para cada cada ubucacion 
  imagen = personas[indice].nombre; // //Asigno el nombre de la persona a la imagen
  //separame las coordenadas de la ubicacion seleccionada
  var lat = personas[indice].lat; //Latitud
  var lng = personas[indice].lng; //Longitud
  var coordenadas = [lat, lng]; //Coordenadas
  map.flyTo(coordenadas, 13);
  L.marker(coordenadas).addTo(map)
  .bindPopup('<div class="imagenes_mapa"><img src="img/'
      + imagen + '.png" ><img src="img/' + imagen
      + '2.png"></div><br><h3><div style="text-align: center;">Nombre: ' 
      + personas[indice].nombre + "<br>" + "Vereda: "
      + personas[indice].vereda + "<br>" + "Celular: "
      + personas[indice].celular + "<br>" + "Tipo de cacao: "
      + personas[indice].tipo_cacao + "<br>" + "Precio: "
      + personas[indice].precio + '<div>').openPopup();
});

