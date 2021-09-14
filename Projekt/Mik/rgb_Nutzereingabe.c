#define LED_R 2
#define LED_G 3
#define LED_B 4

void setup() {
  // put your setup code here, to run once:
  pinMode(LED_R, OUTPUT);
  pinMode(LED_G, OUTPUT);
  pinMode(LED_B, OUTPUT);
  Serial.begin( 115200 );
  Serial.println("Bitte RGB-Werte eingeben: [r, g, b]");
  
}

void loop() {
  // put your main code here, to run repeatedly:
  if( Serial.available() ){
      char buffer[20];
      int r, g, b;
      int n = Serial.readBytesUntil('\n', buffer, sizeof(buffer)-1);
      buffer[n] = '\0';
      
      sscanf(buffer, "%d, %d, %d", &r, &g, &b);
   
      Serial.print("rot: ");
      Serial.print(r);
      Serial.print(", grün: ");
      Serial.print(g);
      Serial.print(", blau: ");
      Serial.print(b);
      Serial.println();
      if ((r >= 0 && r <= 255) && (g >= 0 && g <= 255) && (b >= 0 && b <= 255))
      {
      analogWrite(LED_R, r);
      analogWrite(LED_G, g);
      analogWrite(LED_B, b);
      }
    }
}