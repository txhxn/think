function setup(){
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('for_landing');
    background(255);
  }

function draw(){
    fill(255);
    ellipse(mouseX, mouseY, 50,50);
  }
