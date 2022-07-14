import validator from './validator.js';

document.getElementById("valido").style.display = "none";
document.getElementById("inValido").style.display = "none";

const boton = document.querySelectorAll ('button');

boton[0].addEventListener('click',  function ()
{
  
  document.getElementById("pagInicial").style.display = "none";

  //Capturamos el nombre del usuario y creamos una variable
  let numeroCard = document.getElementById("numero").value;
    

  if(validator.isValid(numeroCard))
  {

    document.getElementById("valido").style.display = "block";

    document.getElementById('mascara').innerHTML= "Su numero de tarjeta termina en " + validator.maskify(numeroCard) ;

  }

  else {

    document.getElementById("inValido").style.display = "block"

  }
  

});

boton[0].addEventListener('click',  function ()
{



});

console.log(validator);
