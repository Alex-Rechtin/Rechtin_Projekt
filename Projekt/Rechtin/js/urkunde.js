//Buttons
const wiederholen = document.querySelector("#wiederholen");
const drucken = document.querySelector("#drucken");

//Div Container aus urkunde.js
const namen = document.querySelector("#name");
const fehlversuche = document.querySelector("#fehlversuche");
const etage = document.querySelector("#etagennummer");
//Daten aus der main.js
const fehlversuchzahl = localStorage.getItem("Versuche");
const etagenzahl = localStorage.getItem("Etage");
const namedesSpielers = localStorage.getItem("Name");    


namen.textContent = namedesSpielers;
namen.style.color = "blue";
etage.textContent = "Erreichte Stage " + etagenzahl;

if (fehlversuchzahl === 1) {
    fehlversuche.textContent = "mit " + fehlversuchzahl + " Fehlversuch";
}
else{
    fehlversuche.textContent = "mit " + fehlversuchzahl + " Fehlversuchen";
}


/**
 * Der widerholen.addEventListener macht das es beim Klicken der Taste die Seite
 *  wieder zurück zur Spiel Seite geht 
 */
wiederholen.addEventListener("click", (e) =>{
    location.href = "./index.html";
});

/**
 * drucken macht das die Seite ausgedrückt wird ohne die Buttons
 * nachdem gedruckt wurde wird der drucken Button weiterhin verschwunden sein
 * und der wiederholen button wiedergeholt werden
 */
drucken.addEventListener("click", (e) =>{
    wiederholen.style.display= "none";
    drucken.style.display="none";
    window.print();
    wiederholen.style.display= "block";
});
