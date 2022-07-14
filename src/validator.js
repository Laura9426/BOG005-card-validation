/*const validator = {

    isValid(creditCardNumber){

       var tarjetaNum2="";
       var totalSuma=0; 
       var ultimoDigito="";

        var numero1 = 0;

        for(var i=0;i<16;i++){

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
            
            alert(tarjetaNum2);
            alert(totalSuma);
            alert(ultimoDigito);


            if(ultimoDigito=="0"){

              return true;
            }
            else{
              return false;
            }
            
      }


  };

export default validator;



