var k = 5/8;
var value =0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  setMoveThreshold(10);
 
}

function draw() {
    background(255, 255, 180);
    translate(width/2,height/2);
    scale(0.7);
    noStroke();
    fill('green');
    ellipse(width/100,height/2.5,30,350);
    
    arc(width/90, height/2, 80, 80, 0, PI+QUARTER_PI, PIE);
    
    
    
    fill('red');
    beginShape();
    var z = k*value;
    for (var a=0; a < TWO_PI*10; a += 0.01) {
        var r = 200 * cos(z*a);
        var x = r *cos(a);
        var y = r* sin(a);
        stroke(0);
        strokeWeight(4);
        
        vertex (x,y);
        
    }
    endShape();
}
function deviceMoved() {
  value++;
}