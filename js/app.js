// VALIDACION DEL MENSAJE DE ENTRADA

var input;
do{
   do{
      input=prompt("INGRESA EL MENSAJE QUE DESEES DECIFRAR:---> ");
      if(input=== ""){
        alert("RECUERDA DEBES DE INGRESAR UN MENSAJE :)---> VUELVE A INTENTARLO");
        break;
      }//cierra la llave del if input
      for(var i=0; i<input.length;i++){
        var converInputAscii=input.charCodeAt(i);
        if(converInputAscii<65 || converInputAscii>90 && converInputAscii<97 || converInputAscii>122){
          alert("RECUERDA DEBES DE INGRESAR SOLO LETRAS MAYUSCULAS O MINUSCULAS--TE DARE OTRA OPORTUNIDAD :) ");
        break;
       }// Cierra el if de la condicion para validar el input
      }// cierrra el for en i
   }while(converInputAscii<65 || converInputAscii>90 && converInputAscii<97 || converInputAscii>122); // te regresa a solicitar nuevamente el mensaje cuando ingresas caracteres especiales y numeros;

}while(input=== "");// te regresa a solicitar nuevamente el mensaje cuando dejas el espacio en blanco;
