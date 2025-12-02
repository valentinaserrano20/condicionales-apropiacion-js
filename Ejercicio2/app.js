//Un programa debe clasificar la velocidad de un vehículo:
// • Si la velocidad es menor a 30 → “Muy lento”
// • Entre 30 y 60 → “Velocidad moderada”
// • Entre 61 y 100 → “Rápido”
// • Mayor a 100 → “Muy rápido”

import libreria from 'prompt-sync';
const prompt = libreria();

let velocidad = parseInt(prompt("ingrese la velocidad de su vehiculo:"))

if (velocidad > 100) {
  console.log("Va muy rapido");
}
else if (velocidad >= 61 && velocidad < 100) {
  console.log("Va rapido");
}
else if (velocidad >= 30 && velocidad < 60) {
  console.log("Va con una velocidad moderada");
} 
else {
  console.log("Va lento");
}
