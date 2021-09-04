// maximal 100 und minimal 10 sind für die Summe 
let max = 100; 
let min = 10; 

//Hier wird erst die summe brechnet und dann der summand1 danach den summand2! 
// minussummand ist der minimal wert für summand1 
let minsummand = 1; 

// erstellt eine Zufallszahl zwischen 10-100
function zufall(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Diese Funktion erstellt eine Aufgabe und return sie
function neueAufgabe(){
    let summe = zufall(min,max); 

    //bei summand1 wird eine zufalls zahl zwischen 1 und der summe -1 
    //--> damit summand1 nicht gleich summe sein kann! 
    let summand1 = zufall(minsummand,summe - 1); 

    // summand 2 = damit hier das richtige rauskommt wird summe -summand1 gerechnet 
    let summand2 = summe - summand1; 

    //array der Aufgabe die gestellt wird
    let aufgabe = [summand1,summand2,summe]; 

    return aufgabe;
}



// minimale wert  und maximale Wert für die Funktion zahl Anpassung
let min1 = 1;
let max1 = 99;
/**
 * Diese Funktion macht das wenn die Zahl kleiner als der minimale Wert ist, dass die zahl angepasst wird als min1 
 * und größer als der maximale Wert ist wird die Zahl angepasst als max1
 * am ende wird die angepasste Zahl zurückgegeben
 * 
 * @param {number} richtigeZahl die  Richtige Zahl der Aufgabe die übergeben wird 
 * @param {number} erhoehungsZahl die Zahl die übergeben wird zur veränderung der Richtigenzahl für die andere Tür
 * @returns die Angepasste Zahl
 */
function zahlAnpassung(richtigeZahl,erhoehungsZahl) {
    if (richtigeZahl < min1){
        richtigeZahl = min1;
    }
    else if (richtigeZahl > max1){
        richtigeZahl = max1;
    }
    while (richtigeZahl === erhoehungsZahl) {
        richtigeZahl = zufall(min1,max1);
        return richtigeZahl;
    }
    return richtigeZahl;
    
}

//Diese Funktion erstellt die Zahlen auf den Türen
//entweder die linke oder rechte Tür ist dann richtig
function setzeTueren(richtigeTuer) {
    let zufallsTuer = zufall(0,1);
    let zufallsZahl = zufall(-10,10);
    if (zufallsZahl === 0) {
        zufallsZahl++;  
    }
    if (zufallsTuer === 0) {
        linkeTuer.textContent = richtigeTuer;
        rechteTuer.textContent = zahlAnpassung(richtigeTuer + zufallsZahl);
        linkeTuer.istRichtig = true;
        rechteTuer.istRichtig = false;
    } else {
        rechteTuer.textContent = richtigeTuer;
        linkeTuer.textContent = zahlAnpassung(richtigeTuer + zufallsZahl);
        rechteTuer.istRichtig = true;
        linkeTuer.istRichtig = false;
    }
}

//Erstellt eine Zufallsaufgabe wo summand1,summand2 oder summe gesucht wird
/**
 * In der Funktion setzteAufgabe wird die aufgabe von der Funktion neueAufgabe genommen,
 * aufgeteilt und dann in die richtigen value Felder gesetzt.
 * Im Game ist es dann summand1 + summand2 = summe!!!
 */
function setzeAufgabe(){
    let raus = zufall(0,2);
    [summand1,summand2,summe] = neueAufgabe();
    zahl1.value = summand1;
    zahl2.value = summand2;
    summenFeld.value = summe;
    console.log(raus);
    switch (raus) {
        case 0:
            zahl1.value = "?";
            setzeTueren(summand1);
            break;
        case 1:
            zahl2.value = "?";
            setzeTueren(summand2);
            break;
        case 2:
            summenFeld.value = "?";
            setzeTueren(summe);
            break;
    }
}

/**
 * Farbeetage ist ein Array mit mehreren Farben
 * In der Funktion farbwechsel wird per Zufall eine Farbe des Arrays genommen und
 * für die Stagezahl benutzt, pro Sekunde eine neue Farbe für die Stagezahl
 * Am ende führt sich die Funktion selber aus --> ()
 *  
 */
(function farbwechsel(){
    let farbeetage = ['white','cyan','deepskyblue','yellow','magenta','lime','gold','orange'];
    setInterval(function () {
        let zufall = Math.floor (farbeetage.length * Math.random());
        stagezahl.style.color = farbeetage[zufall];
        
    },1000);
})();


/**
 *  funktion zum drucken der seite mit der Urkunde die man am ende bekommen soll
 */ 
function druck() { 
        window.print(); 
} 

/**
 *  Diese Funktion macht das im Hauptmenü oder am ende alles verschwinden,
 *  was dort nicht gebraucht wird
 */
//lässt alles weg von der index html was man beim hauptmenü oder am ende nicht braucht
function gehtWeg(){
    body.style.backgroundImage = "url('pics/endhintergrund.png')";
    spiel.style.display = "none";
    aufgabe.style.display = "none";
    divtext.style.display = "none";
    linkeTuer.style.display= "none";
    rechteTuer.style.display= "none";
    hauptmenuebutton.style.display = "none";
    neustartbutton.style.display = "none";
    weiterbutton.style.display = "none"
}

/**
 * Diese Funktion lässt die blockierten div-Container wieder auftauchen
 */
function kommtwieder(){
    spiel.style.display = "block";
    aufgabe.style.display = "block";
    divtext.style.display = "block";
    linkeTuer.style.display= "block";
    rechteTuer.style.display= "block";
}

/**
 * Diese Funktion lässt die Button wieder auftauchen 
 */
function buttonstrue(){
    weiterbutton.style.display = "block";
    neustartbutton.style.display = "block";
    hauptmenuebutton.style.display = "block";
      
}

/**
 * Diese Funktion lässt die Butoons wieder verschwinden
 */
function buttonsfalse(){
    weiterbutton.style.display = "none";
    neustartbutton.style.display = "none";
    hauptmenuebutton.style.display = "none";
}
