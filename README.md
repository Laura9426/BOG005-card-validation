4137894711755904

# Tarjeta de crédito válida

Forma de pago o recarga de billetera de una pagina de trade (inversiones financieras)

* Los usuarios y los objetivos en relación con el producto.

  El programa esta enfacado para quienes practican trading por medio de la plataforma y desean depositar
  dinero para empezar a invertir. 

* Cómo el producto soluciona los problemas/necesidades de dichos usuarios.

  El programa da un espacio seguro de transpaso de dinero, verificando si su tarjeta de credito es valida o no.

Luego colocarás la foto de tu primer prototipo en papel.
Agregar un resumen del feedback recibido indicando las mejoras a realizar.
Imagen del prototipo final.



    isValid(creditCardNumber){

       var tarjetaNum2;

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
            return tarjetaNum2;
        }




      //onclick="alert(validator.validar('4137894711755904'));"



      const boton = document.querySelectorAll ('button');

boton[0].addEventListener('click',  function () { 

    alert("hola");
  
  //Capturamos el nombre del usuario y creamos una variable
  let numeroCard = document.getElementById("numero").value;


  //Enviamos mensaje de saludo con la informacion que se capturo 
  //con la variable de arriba
  document.getElementById('captura').innerHTML= "Numero de tarjeta " + 
  numeroCard.toUpperCase() ;


}
   