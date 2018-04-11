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

//INICIANDO FUNCION CIPHER

function cipher(message){
  var messageAscii;
  var arrayMessageAscii=[];
  var messageString;
  var strMessageCipher;
  var finalMessageCipher='';
  var cipherMessage;

    for(j=0;j<message.length;j++){
      messageAscii=message.charCodeAt(j); // se convierte en mensaje introducido a codigo Ascii
       arrayMessageAscii.push(messageAscii); // se intrega cada valor convertido en Ascii a un Arreglo
       console.log(arrayMessageAscii);
    }//cierra el fot en j

    for(k=0; k<arrayMessageAscii.length;k++){
      cipherMessage=(arrayMessageAscii[k]-65+33)%26+65; //se utiliza el cada uno de los valores convertidos a Ascii y se encriptan con la formula del cifrado cesar.
      strMessageCipher=String.fromCharCode(cipherMessage); // Se convierte el valor de la formula obtenida a una Striig
      finalMessageCipher += strMessageCipher;
    }// cierra el For en k

   alert("TU MENSAJE ENCRIPTADO ES------>: " +" "+finalMessageCipher); //se manda el resultado del mensaje encriptado al usuario

   return (finalMessageCipher);

}//cierra funcion cipher
 cipher(input);

 // FUNCION DECIPHER

 function decipher(messageArrayCipher){
var arrayDecipher=[];
var decipherMessage;
var strMessageDecipher;
var  messageAsciidecipher;
var arrayMessageAsciiDecipher=[];
var finalMessageDecipher;

   for(var m=0; m<messageArrayCipher.length;m++){
       messageAsciidecipher=messageArrayCipher.charCodeAt(m);
      arrayMessageAsciiDecipher.push(messageAsciidecipher);
   }//cierre del for en m
     for(var t=0; t<arrayMessageAsciiDecipher.length;t++ ){
      decipherMessage=(arrayMessageAsciiDecipher[m]-65-33)%26+65;
      strMessageDecipher=String.fromCharCode(decipherMessage);
      finalMessageDecipher += decipherMessag;
   }
    alert("TU MENSAJE ORIGINAL ES"+  finalMessageDecipher);

}
decipher(cipher(input));
