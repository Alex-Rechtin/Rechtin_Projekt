//Buttons
const wiederholen = document.querySelector("#wiederholen");
const drucken = document.querySelector("#drucken");

//Daten aus der main.js
const fehlversuche = localStorage.getItem("Versuche");
const etage = localStorage.getItem("Etage");
const namedesSoielrs = localStorage.getItem("Name");    
    
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

