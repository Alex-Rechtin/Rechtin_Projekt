#define Taster 30
#define GPIO_R 2
#define GPIO_G 3
#define GPIO_B 4
#define Analog_GPIO A0

#include <ButtonDebouncedCalloc.h>

int farbe = 0;
int rot = 255;
int gruen = 255;
int blau = 255;
void setup() {
  // put your setup code here, to run once:
  pinMode(Analog_GPIO, INPUT_PULLUP);
  pinMode(Taster,INPUT_PULLUP);
  pinMode(GPIO_R,OUTPUT);
  pinMode(GPIO_G,OUTPUT);
  pinMode(GPIO_B,OUTPUT);
  Serial.print(115200);
  bd_init(1);
  bd_setButton(0,Taster,20);
}

void loop() {
  // put your main code here, to run repeatedly:
  if (bd_getChange(0,LOW)){
    farbe++;
    if (farbe == 3){
      farbe = 0;
    }
  }
  
  if(farbe == 0){
    int a0 = analogRead(Analog_GPIO);
    rot = map(a0,0,1023,0,255);
  }
  if(farbe == 1){
    int a0 = analogRead(Analog_GPIO);
    gruen = map(a0,0,1023,0,255);
  }
  if(farbe == 2){
    int a0 = analogRead(Analog_GPIO);
    blau = map(a0,0,1023,0,255);
  }

  analogWrite(GPIO_R,rot);
  analogWrite(GPIO_G,gruen);
  analogWrite(GPIO_B,blau);
}