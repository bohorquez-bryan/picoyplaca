/**Verificar campos */
$("#buttonsave").click(function() {  
  if($("#placa").val().length < 1 ) {  
      alert("Verifique que los campos sean correctos"); 
      return false;  
  }else if($('#fecha').val().length <8){
    alert("Escoja una fecha");
    return false;
  }else if($('#hora').val().length <4){
    alert("Establezca una hora");
    return false;
  } 
  document.getElementById('button').disabled = false;
  //return false; 

});
$("#buttonsave").click(function() {
  var p = document.getElementById("placa").value;
  var patron = /^[A-Z]{3}[0-9]{4}$/;
  if(patron.test(p)){
    alert("Los datos son correctos, presione Consultar");
    return true;
  }else{
    alert("Verificar placa");
  }
});

/**Obtener dia de la semana */
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function diaSemana() {
  var x = document.getElementById("fecha");
  let date = new Date(x.value.replace(/-+/g, '/'));
  dia = dias[date.getDay()-1];
  var fechaNum = date.getDate();
  var mes_name = date.getMonth();
}

/**Ejecuta consulta */
function verificar(){
  
/**Objeto consulta */  
function Consulta(numplaca, nomdia, hour){
  this.numplaca = numplaca;
  this.nomdia = nomdia;
  this.hour = hour;
}


/**Obtener datos de campos */
  var placa = document.getElementById("placa").value;
  placaf = placa.substring(6);
  hora = document.getElementById("hora").value;

  c1 = new Consulta(placaf,dia,hora);
  console.log(c1);
  resultado();

  /**Envia respuesta */
  if(res == true){
    alert("El vehículo puede circular con normalidad");
    limpiar();
  }else{
    alert("El vehículo no puede circular en ese horario");
    limpiar();
  }

}
/* Funcion para verificar si el vehiculo puede circular*/
function resultado(){
  if(c1.hour >= "07:00" && c1.hour <"09:31" && c1.nomdia == "Lunes" && c1.numplaca <=2 && c1.numplaca>0){
    res = false;
  }else if(c1.hour >= "16:00" && c1.hour <"19:31" && c1.nomdia == "Lunes" && c1.numplaca<=2 && c1.numplaca>0){
    res = false;
  }else if(c1.hour >= "07:00" && c1.hour <"09:31" && c1.nomdia == "Martes" && c1.numplaca <=4 && c1.numplaca>2){
    res = false;
  }else if(c1.hour >= "16:00" && c1.hour <"19:31" && c1.nomdia == "Martes" && c1.numplaca <=4 && c1.numplaca>2){   
    res = false;
  }else if(c1.hour >= "07:00" && c1.hour <"09:31" && c1.nomdia == "Miércoles" && c1.numplaca <=6 && c1.numplaca>4){
    res = false;
  }else if(c1.hour >= "16:00" && c1.hour <"19:31" && c1.nomdia == "Miércoles" && c1.numplaca <=6 && c1.numplaca>4){
    res = false;
  }else if(c1.hour >= "07:00" && c1.hour <"09:31" && c1.nomdia == "Jueves" && c1.numplaca <=8 && c1.numplaca>6){
    res = false;
  }else if(c1.hour >= "16:00" && c1.hour <"19:31" && c1.nomdia == "Jueves" && c1.numplaca <=8 && c1.numplaca>6){
    res = false;
  }else if(c1.hour >= "07:00" && c1.hour <"09:31" && c1.nomdia == "Viernes" && c1.numplaca ==9){
    res = false;
  }else if(c1.hour >= "16:00" && c1.hour <"19:31" && c1.nomdia == "Viernes" && c1.numplaca ==9){
    res = false;
  }else if(c1.hour >= "07:00" && c1.hour <"09:31" && c1.nomdia == "Viernes" && c1.numplaca ==0){
    res = false;
  }else if(c1.hour >= "16:00" && c1.hour <"19:31" && c1.nomdia == "Viernes" && c1.numplaca ==0){
    res = false;
  }else{
    res = true;
  }
}

/*function verbtn() {
  if(document.getElementById("placa").value==="" && document.getElementById("fecha").value==="" && document.getElementById("hora").value==="") { 
           document.getElementById('button').disabled = true;
       } else { 
           document.getElementById('button').disabled = false;
       }
}*/
/*Funcion para limpiar campos*/
function limpiar(){
  document.getElementById("placa").value="";
  document.getElementById("fecha").value="";
  document.getElementById("hora").value="";
  document.getElementById('button').disabled = true; 
}

function active(){
  //document.getElementById('button').disabled = false; 
}