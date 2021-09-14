#define GPIO_LedRot 2
#define GPIO_LedGruen 3
#define GPIO_LedBlau 4
#define GPIO_Taster1 30
#define GPIO_Taster2 31
#define GPIO_Taster3 32
#define GPIO_Taster4 33


#include <ButtonDebouncedCalloc.h>
bool leuchtet = false;
int rot = 255;
int gruen = 255;
int blau = 255;
int helligkeit = 70;
int farbe = 0;
// 5 verschiedenen Farben
// 10 hexa sind 16 Beispiel 0xFF1030 == {255,16,48} 
int farben[5][3] = {{255,255,255},
                    {255,255,48},
                    {255,255,16},
                    {255,128,0},
                    {255,48,0}
};

                 
void setup() {
  // put your setup code here, to run once:
  pinMode(GPIO_Taster1, INPUT_PULLUP);
  pinMode(GPIO_Taster2, INPUT_PULLUP);
  pinMode(GPIO_Taster3, INPUT_PULLUP);
  pinMode(GPIO_Taster4, INPUT_PULLUP);
  pinMode(GPIO_LedRot, OUTPUT);
  pinMode(GPIO_LedGruen, OUTPUT);
  pinMode(GPIO_LedBlau, OUTPUT);
  // gibt an wie viele Taster es sind
  bd_init(4);
  
  //bd_setButton(nummerderTaste(index), namedestasters, prellzeit);
  bd_setButton(0, GPIO_Taster1, 10);
  bd_setButton(1, GPIO_Taster2, 10);
  bd_setButton(2, GPIO_Taster3, 10);
  bd_setButton(3, GPIO_Taster4, 10);
  Serial.begin(115200);
}


void loop() {
  // put your main code here, to run repeatedly:
  
  // wenn (bd_getChange(nummerderTaste(index), zu low (gedrückt))
  if(bd_getChange(0, LOW)){
      //schaltet alles aus wenn leuchtet auf true
      if(leuchtet){
        
        //schaltet alle LEDS auf 0 (aus)
        analogWrite(GPIO_LedRot, 0);
        analogWrite(GPIO_LedGruen, 0);
        analogWrite(GPIO_LedBlau, 0);  
        leuchtet = false;
      }
      else{
        leuchtet = true;
      }
      //methode von unten
      leuchte();
  }

  // soll die Helligkeit um 10% verringern
  if(bd_getChange(1, LOW)){
    if(helligkeit>=10){
      helligkeit -= 10;
      leuchte();   
    }
  }

 // soll die Helligkeit um 10% errhöhen
  if(bd_getChange(2, LOW)){
    if(helligkeit<=90){
      helligkeit += 10; 
      leuchte();  
    }
  }

// diese Taste schaltet "im Kreis" 5 verschieddene Farben
  if(bd_getChange(3, LOW)){
    if(farbe<sizeof(farben) / sizeof(farben[0])){
      farbe++;
      //Serial.println(sizeof(farben) / sizeof(farben[0]));
    }
    else{
      farbe=0;
    }
    rot = farben[farbe][0];
    gruen = farben[farbe][1];
    blau = farben[farbe][2];
    leuchte();
  }
}


void leuchte(){
  if(leuchtet){
    // macht die led heller oder dunkler
    analogWrite(GPIO_LedRot, (rot*helligkeit/100));
    analogWrite(GPIO_LedGruen, (gruen*helligkeit/100));
    analogWrite(GPIO_LedBlau, (blau*helligkeit/100));
    //Serial.println(rot);
    //Serial.println(gruen);
    //Serial.println(blau);
    //Serial.println((rot*helligkeit/100));
    //Serial.println((blau*helligkeit/100));
    //Serial.println((gruen*helligkeit/100));
  }
}