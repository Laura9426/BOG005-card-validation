/*import validator from './validator.js';*/

const boton = document.querySelectorAll ('button');

boton[0].addEventListener('click',  function ()
{
  
  //Capturamos el nombre del usuario y creamos una variable
  let numeroCard = document.getElementById("numero").value;
    

  if(validator.isValid(numeroCard))
  {
    document.getElementById('captura').innerHTML= "Numero de tarjeta valido";

    document.getElementById('mascara').innerHTML= validator.maskify(numeroCard) ;

  }

  else {

    document.getElementById('captura').innerHTML= "Numero de tarjeta Invalido";

    document.getElementById('mascara').innerHTML= validator.maskify(numeroCard) ;
  }
  

});

  const validator = {

    isValid(creditCardNumber){

       var tarjetaNum2="";
       var totalSuma=0; 
       var ultimoDigito="";

        var numero1 = 0;

        for(var i=0;i<creditCardNumber.length;i++){

                if (i==0||i==2||i==4||i==6||i==8||i==10||i==12||i==14){

                    numero1 = parseInt(creditCardNumber[i])*2;
                } 
                else {
                    numero1 = parseInt(creditCardNumber[i]);
                }
                tarjetaNum2 = tarjetaNum2 + numero1.toString();
            }

            for(var j=0;j<tarjetaNum2.length;j++){  //lenght mide la longitud de la cadena

              totalSuma += parseInt(tarjetaNum2[j]); //es igual q en la suma de arriba
            }

            ultimoDigito = totalSuma.toString()[totalSuma.toString().length-1];
        
            if(ultimoDigito=="0"){

              return true;
            }
            else{
              return false;
            }
            
      },

      maskify(creditCardNumber){

          var tarjetaNum = "";
          var size = creditCardNumber.length;

          if(size > 4){

            for(var l=0;j<creditCardNumber.length;l++){

              tarjetaNum = creditCardNumber[l]
        
            }

          }

          else{

            tarjetaNum = creditCardNumber

          }

          

          return size;
      }

  }


  





console.log(validator);
