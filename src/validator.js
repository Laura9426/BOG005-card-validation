const validator = {

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
          
            if(ultimoDigito=="0"){

              return true;
            }
            else{
              return false;
            }
            
      },

      maskify(creditCardNumber){

        var size = creditCardNumber.length;  
        var part1 = "";
        var part2 = "";
          
          if(size > 4){

            part1 = creditCardNumber.substring(0,size-4);

            part2 = creditCardNumber.substring(size-4,size);

            let part1_1 = "";
                        
            for(var l=0;l<part1.length;l++){

              part1_1 = part1_1 + "#"; //o se hace asi tambien part1_1 += "#";
        
            }
           return part1_1 + part2;
          }

          else{
            return creditCardNumber;
          }
      }


  };

export default validator;



