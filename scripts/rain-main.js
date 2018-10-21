let canv,colR,colG,colB,strokeSlider, rainSlider;
let r,g,b,strokeDrop, amount;


function setup(){

  // ------ Canvas and sliders -----------
  canv = createCanvas(windowWidth,windowHeight);
  canv.position(0,0);
  background(240);
  rainSlider = createSlider(1,3000,1200,10);
  rainSlider.position(10,30);
  strokeSlider = createSlider(1,7,rain.getWeight(),0.1);
  strokeSlider.position(10,80);
  colR = createSlider(0,255,rain.getColor().r,1);
  colR.position(10,130);
  colG = createSlider(0,255,rain.getColor().g,1);
  colG.position(10,180);
  colB = createSlider(0,255,rain.getColor().b,1);
  colB.position(10,230);
// -------------------
}



function draw(){
  background(240);
  strokeDrop = strokeSlider.value();
  amount = rainSlider.value();
  r = colR.value();
  g = colG.value();
  b = colB.value();
  rain.draw(strokeDrop,r,g,b,amount);
  textSize(16);
  fill(0, 0, 0);
  noStroke();
  text('Drops: ' + rain.getDrops(), 10, 10, 100, 100);
  text('Weight: ' + rain.getWeight(), 10, 60, 100, 100);
  text('Red: ' + rain.getColor().r, 10, 110, 100, 100);
  text('Green: ' + rain.getColor().g, 10, 160, 100, 100);
  text('Blue: ' + rain.getColor().b, 10, 210, 100, 100);

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
