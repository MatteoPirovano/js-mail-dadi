// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Math.floor(Math.random() * 100) + 1;
var numeroUtente = Math.floor(Math.random() * 6) + 1  ;
console.log('user' , numeroUtente)
var numeroComputer = Math.floor(Math.random() * 6) + 1  ;
console.log('computer' , numeroComputer)
var winner
if (numeroUtente > numeroComputer) {
  document.getElementById('winner').innerHTML = "utente"
} else if  (numeroUtente < numeroComputer) {
  document.getElementById('winner').innerHTML = "computer"
} else {
    document.getElementById('winner').innerHTML = "nessuno avete pareggiato"
}
