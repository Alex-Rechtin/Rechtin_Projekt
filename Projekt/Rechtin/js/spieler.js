// In der async Funktion kann ich await benutzen
/**
 * Die Funktion "spielerWaehltTuer" startet die laufanimation des Spieler 
 * zu der Tür auf  die geklickt wurde
 * @param {*} e e ist das Klick Event 
 */
async function spielerWaehltTuer(e){
    spieler.style.backgroundImage = "url('pics/laufanimation.gif')";
    if(e.target.id === "linke-tuer"){
        // await wartet bis die Animation fertig ist
        await spieler.animate([
            {
                // Wo der Spieler am Anfang steht
                top: "400px",
                left: "500px",
                // größe wird verändert
                height: "200px",
                width: "200px"
            },
            {
                // Mitte vom Ziel und Anfang
                top: "200px",
                left: "370px",
                height: "150px",
                width: "150px"
            },
            {   
                // Ziel des Spielers (Tür)
                top: "10px",
                left: "370px",
                height: "100px",
                width: "100px"
            }
        ], {
          // duration ist die länge der Animation
            duration: 1000
          
          //.finished gibt ein Objekt zurück, das anzeigt ob die Animation fertig ist  
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
    spieler.style.backgroundImage = "url('pics/1nachvornegehen1.png')";
    tuerPruefung(e);
}

/**
 * Die Funktion spielerStylen setzt die css Werte neu 
 */
function spielerStylen() {
    
    spieler.style.backgroundImage = "url('pics/1nachvornegehen1.png')";
    spieler.style.top = "400px";
    spieler.style.left = "500px";
    spieler.style.height = "200px";
    spieler.style.width = "200px";
    
}