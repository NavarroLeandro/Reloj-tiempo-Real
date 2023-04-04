function obtenerHora(){
  let fechaActual = new Date();
  const diaSemana = ['Domingo', 'Lunes','Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];
  
  let parrafoFecha = document.getElementById('fecha');
  
  parrafoFecha.innerHTML = `${diaSemana[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
  
  let parrafoHora = document.getElementById('hora');
  let hora = fechaActual.getHours();
  let minutos = fechaActual.getMinutes();
  let segundos = fechaActual.getSeconds();
  let amPm = hora < 12 ? "AM" : "PM";
  segundos = segundos < 10 ? "0" + segundos : segundos < 60 ? segundos : "00";
  
  parrafoHora.innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${segundos} ${amPm}`;
}

setInterval(obtenerHora,1000)



