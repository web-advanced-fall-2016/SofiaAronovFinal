class Curve{

  ArrayList<Point> points = new ArrayList<Point>();
  color c;
     float stillPointX;
     float stillPointY;
     float stillAnchor1x;
     float stillAnchor1y;
     float stillAnchor2x;
     float stillAnchor2y;
     float pX1 = 20;
     float pY1 = 890;
     float pX2 = 1420;
     float pY2 = 890;
     boolean drag = false;
     
   Curve(float PointX,float PointY,float Anchor1x,float Anchor1y,float Anchor2x,float Anchor2y){


   }
                         
  void addPoint(float PointX,float PointY,float Anchor1x,float Anchor1y,float Anchor2x,float Anchor2y) {
  c = get(mouseX, mouseY);
   print(c);
   
    if (c != 255){
       stillPointX = PointX;
       stillPointY = PointY;
       stillAnchor1x = Anchor1x;
       stillAnchor1y = Anchor1y;
       stillAnchor2x = Anchor2x;
       stillAnchor2y = Anchor2y;
    
    points.add(0,new Point(stillPointX,
                           stillPointY,
                           stillAnchor1x,
                           stillAnchor1y,
                           stillAnchor2x,
                           stillAnchor2y));
                         }
  
  }
  
  void dragPoint(){
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
  void removePoint(){
  points.remove(0);
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
     vertex(pX1, pY1);
     //vertex(stillPointX-40, 300);//first anchor point
    for ( int i =0; i< points.size(); i++) {
      //Point p = points.get(i);
      bezierVertex(stillAnchor1x,
                   stillAnchor1y,
                   stillAnchor2x,
                   stillAnchor2y,
                   pX2,//1200,
                   pY2);//300);
     
    }
    //vertex(stillPointX-40, 300);
    //vertex(1200, 300);
    vertex(1420, 20);
    vertex(20, 20);
    endShape(CLOSE);  
   
     stroke(255,0,0);
     line(20,890,stillAnchor1x,stillAnchor1y);
     line(1420,890,stillAnchor2x,stillAnchor2y);
    // points.draw();
    print(points.size());
    if (mouseX == stillAnchor1x+random(0,20)||   
        mouseX == stillAnchor2x-random(0,20)&& 
        mouseY == stillAnchor2y+random(0,20)|| 
        mouseY == stillAnchor2y-random(0,20)){
       print("centro");
       fill(0,255,0,70);
       ellipse(mouseX,mouseY,40,40);
    }
  }

 }