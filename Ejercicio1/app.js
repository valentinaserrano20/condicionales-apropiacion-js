//Crea un programa que pregunte la temperatura de una ciudad y muestre:“Hace calor” si la temperatura es mayor o igual a 30.“Clima agradable” en caso contrario.

import libreria from 'prompt-sync';
const prompt = libreria();

let temperatura = parseFloat(prompt("ingrese la temperatura:"));

if (temperatura >= 30) {
  console.log("hace calor");
}
else {
  console.log("clima agradable");
  
}

