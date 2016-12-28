Curve aCurve;

int count = 0;
void setup() {
  //size( 500, 500 );  // good for an iPad horizontal
  fullScreen();
  //rectMode(CENTER);
  strokeWeight(2);
  aCurve = new Curve(mouseX,mouseY,mouseX-20,mouseY,mouseX+20,mouseY);
}
  void draw() {
  background(255);
  aCurve.draw();
    
}

  void mousePressed() {
    if(count != 0){
    aCurve.removePoint();
    }
    aCurve.addPoint(mouseX,mouseY,mouseX-20,mouseY,mouseX+20,mouseY);
    count++;
    return;
    
  }
  void mouseDragged() {
  aCurve.dragPoint();
  }