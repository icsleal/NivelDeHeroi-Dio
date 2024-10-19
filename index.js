//Herói Yennefe da série The Witcher
let nomeHeroi = "Yennefer";
// Quantos Xp o herói tem
let xP = 10001;
// Nível do herói
let nivel;

if (xP <= 1000) {
  console.log("O Herói " + nomeHeroi + " está no nível de Ferro");
} else if (xP >= 1001 && xP <= 2000) {
  console.log("O Herói " + nomeHeroi + " está no nível de Bronze");
} else if (xP >= 20001 && xP <= 5000) {
  console.log("O Herói " + nomeHeroi + " está no nível de Prata");
} else if (xP >= 5001 && xP <= 7000) {
  console.log("O Herói " + nomeHeroi + " está no nível de Ouro");
} else if (xP >= 7001 && xP <= 8000) {
  console.log("O Herói " + nomeHeroi + " está no nível de Platina");
} else if (xP >= 8001 && xP <= 9000) {
  console.log("O Herói " + nomeHeroi + " está no nível de Ascendente");
} else if (xP >= 9001 && xP <= 10000) {
  console.log("O Herói " + nomeHeroi + " está no nível de Imortal");
} else {
  console.log("O Herói " + nomeHeroi + " está no nível de Radiante");
}
