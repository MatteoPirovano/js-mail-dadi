var numeroUtente = Math.floor(Math.random() * 6) + 1  ;
var numeroComputer = Math.floor(Math.random() * 6) + 1  ;
var winner
if (numeroUtente > numeroComputer) {
  document.getElementById('winner').innerHTML = "utente"
} else if  (numeroUtente < numeroComputer) {
  document.getElementById('winner').innerHTML = "computer"
} else {
    document.getElementById('winner').innerHTML = "nessuno avete pareggiato"
}
