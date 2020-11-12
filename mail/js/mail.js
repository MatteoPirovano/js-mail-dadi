var mailList= ['mai1@mail.it', 'mai2@mail.it', 'mai3@mail.it'];
var userMail = prompt("Inserisci email");
var result = false;
for (var i = 0; i < mailList.length; i = i + 1) {
  if (userMail == mailList[i]) {
    result = true;
  }
}

if (result == true) {
  document.getElementById("access").innerHTML = "Accesso consentito";
} else {
  document.getElementById("access").innerHTML = "Accesso non consentito";
}
