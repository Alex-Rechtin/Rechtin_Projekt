//Der Body
const body1 = document.querySelector("body")

//Name des Spielers
const namedesSpielers = document.querySelector("#namedesSpielers");
// Die Aufgabe
const summenFeld = document.querySelector("#summe");
const zahl1 = document.querySelector("#sum1");
const zahl2 = document.querySelector("#sum2");

// Die div container
const aufgabe = document.querySelector("#aufgabe");
const spiel = document.querySelector("#spiel");
//Der Text ob richtige Tür oder falsche Tür
const divtext = document.querySelector("#text");

// Die ID's von den Etagen
const stage = document.querySelectorAll("#stage");
const stagezahl = document.querySelector("#etagennummer");

// Die Zahlen auf den Türen
const linkeTuer = document.querySelector("#linkeTuer");
const rechteTuer = document.querySelector("#rechteTuer");
const alleTueren = document.querySelectorAll(".tuer");

//Die Buttons 
const startbutton = document.querySelector("#startbutton");
const weiterbutton= document.querySelector("#weiter");
const neustartbutton = document.querySelector("#neustart");
const hauptmenuebutton = document.querySelector("#hauptmenue");

// Der Spieler
const spieler = document.querySelector("#spieler");


console.log(divtext);

setzeAufgabe();

// Welche etage man erreihen muss für die Urkunde
let turmhöhe = 3;

// Diese Variable ist da um die Etage anzugeben
let etage = 1;

// Diese Variable ist da um Die versuche hoch zu zählen 
let fehlversuche = 0;

// Diese Variablen sind da um den Background ändern zu lassen 
let minbackground = 1;
let maxbackground = 4;

// Die Variable startgedruekt ist da um zu sagen ob man auf den startbutton gedrückt hat oder nicht 
// Die Variable pausegedruekt ist da um zu sagen ob man auf die ESC Taste gedrückt hat oder nicht 
let startgedruekt = false;
let pausegedruekt = false;
gehtWeg();

// lässt beim drücken vom startbutton die methode kommtwieder anwenden und denn startbutton verschwinden
startbutton.addEventListener("click", (e) =>{
    if(namedesSpielers.value !== ""){

        // input feld namedesSpielers wird beim drücken von weiter verschwinden
        namedesSpielers.style.display ="none";
        console.log(namedesSpielers.value);
        body1.style.backgroundImage = ("url('pics/background1.png");
        kommtwieder();
        startbutton.style.display = "none";
        // startgedruekt wird true weil das der startbutton gedrückt wurde
        startgedruekt = true;   
        stagezahl.textContent = etage;

        /**
         * Übergibt die Daten Weiter, so das man sie auch woanders mit getItem benutzen kann 
         */
         localStorage.setItem("Name", namedesSpielers.value);
    }
    else{
        namedesSpielers.style.border = "5px solid red";
    }
});

// macht das man die esc taste benutzen kann um auf die buttons zu drücken
// und wieder um die button wieder verschwinden zu lassen
body1.addEventListener ("keydown", (evt) => {
	if (evt.key === "Escape" && startgedruekt) {
        if (!pausegedruekt){
            console.log ("Bingo!");
            buttonstrue();
            pausegedruekt = true;
        }
        else{
            buttonsfalse();
            pausegedruekt = false;
        }
	}
});

weiterbutton.addEventListener("click", (e) =>{
    buttonsfalse();
    pausegedruekt = false;
});


// Beim Drücken des hauptmenuebutton wird die Seite neu reloaded
hauptmenuebutton.addEventListener("click", (e) =>{
    //reload der Seite
    location.reload();
});

/**
 * Beim Drücken des hauptmenuebutton wird die Seite neu reloaded
 * Die etage wird zurück auf 1 gesetzt und die fehlversuche auf 0;
 * der divtext wird entfernt
 */
neustartbutton.addEventListener("click", (e) =>{
    pausegedruekt = false;
    buttonsfalse();
    setzeAufgabe();
    etage = 1;
    fehlversuche = 0;
    stagezahl.textContent = etage;
    console.log(fehlversuche + " Fehlersuche");
    divtext.textContent = "";
    body1.style.backgroundImage = ("url('pics/background1.png");
});




/**
 * Wird ausgeführt beim Klicken der Türen im Game
 */
for (let index = 0; index < alleTueren.length; index++) {
    alleTueren[index].addEventListener("click", (e) =>{
        console.log(e.target);
        // wenn es pausiert return es und hört auf 
        if (pausegedruekt) {
            return;
        }

        waehleTuer(e);
    });
}

async function waehleTuer(e){
    if(e.target.id === "linkeTuer"){
        await spieler.animate([
            {
                top: "400px",
                left: "500px",
                height: "200px",
                width: "200px"
            },
            {
                top: "200px",
                left: "370px",
                height: "150px",
                width: "150px"
            },
            {
                top: "10px",
                left: "370px",
                height: "100px",
                width: "100px"
            }
        ], {
            duration: 1000
        }).finished;
    }else{
        await spieler.animate([
            {
                top: "400px",
                left: "500px",
                height: "200px",
                width: "200px"
            },
            {
                top: "200px",
                left: "770px",
                height: "150px",
                width: "150px"
            },
            {
                top: "10px",
                left: "770px",
                height: "100px",
                width: "100px"
            }
        ], {
            duration: 1000
        }).finished;
    }


    // e.target darin wird der button gespeichert auf den gedrückt wurde (<button id="linke/rechte-Tuer" class="tuer">)
    if (e.target.istRichtig === true) {
        //Bei Stufe 30 ist das Ziel des Spiels erreicht und
        // die Zahlen auf den Türen verschwinden
        if (etage == turmhöhe) {
            gehtWeg();
            body1.style.backgroundImage ="url('pics/turmraum.png')";

            /**
            * Übergibt die Daten Weiter, so das man sie auch woanders mit getItem benutzen kann 
            */
            localStorage.setItem("Versuche", fehlversuche);
            localStorage.setItem("Etage", etage);

            //darauf wird dann am ende auf die Urkunde.html zugegriffen
            location.href = "urkunde.html"

        }
        else{
        console.log("richtig");
        // farbe 
        divtext.style.color = "greenyellow";
        divtext.textContent = "Richtig";
        // etage wird erhöht
        etage++;
        //zufälliger Background wird genommen aus dem Ordner pics
        body1.style.backgroundImage = "url('pics/background"+ zufall(minbackground,maxbackground) + ".png')";
        }
    }
    else{
        //Bei Etage 10 und Höher fällt der Spieler um 5 Etagen runter 
        if (etage >= 10 ) {
            etage-=5;
            //Fehlversuch erhöhen
            fehlversuche++;
        }
        //Bei Etage höher als 1 fällt der Spieler ein Etage
        else if (etage > 1) {
            etage--;
            //Fehlversuch erhöhen
            fehlversuche++;
        }
        divtext.textContent = "Du bist gefallen!";
        divtext.style.color = "orange";
    }

    setzeAufgabe();
    stagezahl.textContent = etage;
    console.log(fehlversuche + " Versuche");
}

//Ab 30 kriegt der spieler die möglichkeit von 2 türen: weiter zugehen oder das spiel ab der Stufe zu beenden!!!
//parameter,funktion,variablen