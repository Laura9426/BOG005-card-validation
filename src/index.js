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

    document.getElementById('mascara').innerHTML= "El número de tarjeta termina en " + validator.maskify(numeroCard) ;

  }

  else {

    document.getElementById("inValido").style.display = "block"

  }
  

});

boton[1].addEventListener('click',  function ()
{

  document.getElementById("valido").style.display = "none";
  document.getElementById("pagInicial").style.display = "block";
  document.getElementById("numero").value = "";
  document.getElementById("name").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("mes").value = "";
  document.getElementById("year").value = "";
  document.getElementById("codigo").value = "";

});

boton[2].addEventListener('click',  function ()
{

  document.getElementById("inValido").style.display = "none";
  document.getElementById("pagInicial").style.display = "block";

});



