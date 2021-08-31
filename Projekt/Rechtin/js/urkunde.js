//Buttons
const wiederholen = document.querySelector("#wiederholen");
const drucken = document.querySelector("#drucken");

//Daten aus der main.js
const fehlversuche = localStorage.getItem("Versuche");
const etage = localStorage.getItem("Etage");
const namedesSoielrs = localStorage.getItem("Name");    
    
wiederholen.addEventListener("click", (e) =>{
    location.href = "./index.html";
});

drucken.addEventListener("click", (e) =>{
    wiederholen.style.display= "none";
    drucken.style.display="none";
    window.print();
    wiederholen.style.display= "block";
});

