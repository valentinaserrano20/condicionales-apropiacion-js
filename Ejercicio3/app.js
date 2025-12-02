//Un programa debe mostrar el mes del año según el número ingresado (1 al 12)  
//Ejemplo: 1 → Enero, 2 → Febrero, …, 12 → Diciembre.

import libreria from 'prompt-sync';
const prompt = libreria();

let mes = parseInt(prompt("ingrese le numero del mes que desea conocer:"))

switch (mes) {
  case 1:
    console.log("El mes elegido es enero");
  break;
  case 2:
    console.log("El mes elegido es febrero");
  break;
  case 3:
    console.log("El mes elegido es marzo");
  break;
  case 4:
    console.log("El mes elegido es abril");
  break;
  case 5:
    console.log("El mes elegido es mayo");
  break;
  case 6:
    console.log("El mes elegido es junio");
  break;
  case 7:
    console.log("El mes elegido es julio");
  break;
  case 8:
    console.log("El mes elegido es agosto");
    break;
  case 9:
    console.log("El mes elegido es septiembre");
    break;
  case 10:
    console.log("El mes elegido es octubre");
  break;
  case 11:
    console.log("El mes elegido es octubre");
  break;
}