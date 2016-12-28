/*function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}*/

var aCurve;
aCurve = new Curve();

var count = 0;
  function setup() {
  //size( 500, 500 );  // good for an iPad horizontal
  fullScreen();
  strokeWeight(2);
  aCurve = new Curve(mouseX,mouseY,mouseX-20,mouseY,mouseX+20,mouseY);
}
  function draw() {
  background(255);
  aCurve.draw();
    
}

  function mousePressed() {
    if(count != 0){
    aCurve.removePoint();
    }
    aCurve.addPoint(mouseX,mouseY,mouseX-20,mouseY,mouseX+20,mouseY);
    count++;
    return;
    		
  }
  function mouseDragged() {
  aCurve.dragPoint();
  }

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

function Curve(PointX,PointY,Anchor1x,Anchor1y,Anchor2x,Anchor2y){

  //ArrayList<Point> points = new ArrayList<Point>();
  var points = [];
  points[] = new Point();
  this.color c;
     this.PointX = stillPointX;
     this.PointY = stillPointY;
     this.Anchor1x = stillAnchor1x;
     this.Anchor1y = stillAnchor1y;
     this.Anchor2x = stillAnchor2x;
     this.Anchor2y = stillAnchor2y;
     this.pX1 = 20;
     this.pY1 = 890;
     this.pX2 = 1420;
     this.pY2 = 890;
     this.drag = false;
     
   
                         
  this.addPoint = function (PointX,PointY,Anchor1x,Anchor1y,Anchor2x,Anchor2y) {
  c = get(mouseX, mouseY);
   print(c);
   
    if (c != 255){
       this.stillPointX = PointX;
       this.stillPointY = PointY;
       this.stillAnchor1x = Anchor1x;
       this.stillAnchor1y = Anchor1y;
       this.stillAnchor2x = Anchor2x;
       this.stillAnchor2y = Anchor2y;
    
    points.add(0,new Point(this.stillPointX,
                           this.stillPointY,
                           this.stillAnchor1x,
                           this.stillAnchor1y,
                           this.stillAnchor2x,
                           this.stillAnchor2y));
                         }
  
  }
  
  this.dragPoint = function(){
   //if (mouseX == stillAnchor1x+random(0,20)||   
   //    mouseX == stillAnchor2x-random(0,20)&& 
   //   mouseY == stillAnchor2y+random(0,20)|| 
   //   mouseY == stillAnchor2y-random(0,20)){
       //drag = true;
       //print("centro");
       //fill(0,255,0,70);
       //ellipse(mouseX,mouseY,40,40);
       stillAnchor1x = mouseX-20;
       stillAnchor1y = mouseY;
       stillAnchor2x = mouseX+20;
       stillAnchor2y = mouseY;
       //}
  }
  this.removePoint = function(){
  //points.remove(0);
  slice(0,1);
  }
  
  void draw() {
    beginShape();
    fill(0,0,255,60);
    noStroke();
    rect(20,20,1400,870);
    endShape();
    
    beginShape();
    stroke(0, 0, 0);
    fill(255);
     vertex(this.pX1, this.pY1);
     //vertex(stillPointX-40, 300);//first anchor point
    for ( int i =0; i< points.size(); i++) {
      //Point p = points.get(i);
      bezierVertex(this.stillAnchor1x,
                   this.stillAnchor1y,
                   this.stillAnchor2x,
                   this.stillAnchor2y,
                   this.pX2,//1200,
                   this.pY2);//300);
     
    }
    //vertex(stillPointX-40, 300);
    //vertex(1200, 300);
    vertex(1420, 20);
    vertex(20, 20);
    endShape(CLOSE);  
   
     stroke(255,0,0);
     line(20,890,this.stillAnchor1x,this.stillAnchor1y);
     line(1420,890,this.stillAnchor2x,this.stillAnchor2y);
    // points.draw();
    print(points.size());
    if (mouseX == this.stillAnchor1x+random(0,20)||   
        mouseX == this.stillAnchor2x-random(0,20)&& 
        mouseY == this.stillAnchor2y+random(0,20)|| 
        mouseY == this.stillAnchor2y-random(0,20)){
       print("centro");
       fill(0,255,0,70);
       ellipse(mouseX,mouseY,40,40);
    }
  }

 }

 ///////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////

function Point (tempPointX,tempPointY,tempAnchor1x,tempAnchor1y,tempAnchor2x,tempAnchor2y){
  
    this.pointX = tempPointX;
    this.pointY = tempPointY;
    this.anchor1x = tempAnchor1x;
    this.anchor1y = tempAnchor1y;
    this.anchor2x = tempAnchor2x;
    this.anchor2y = tempAnchor2y;
    
    noStroke();
    fill(255,0,0);
    ellipse(this.pointX, this.pointY, 30, 30);
  

  void draw() {

  }

}

