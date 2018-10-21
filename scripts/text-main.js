var canv, opacity, colR, colG, colB, strokeSlider, inputText, v;
var font, r, g, b, spd, w, userText;
var checkwindow = true;
var defaultTxt = 'I\'m Batman! ^^(;,,;)^^';

function preload(){
  font = loadFont('../Titillium_Web/TitilliumWeb-Light.ttf');
}

function setup(){
  canv = createCanvas(windowWidth,windowHeight);
  canv.position(0,0);
  strokeSlider = createSlider(1,7,1.9,0.1);
  strokeSlider.position(10,30);
  inputText = createInput('');
  inputText.position(10,360);
  colR = createSlider(0,255,0,1);
  colR.position(10,80);
  colG = createSlider(0,255,0,1);
  colG.position(10,130);
  colB = createSlider(0,255,67,1);
  colB.position(10,180);
  opacity = createSlider(0,1,0.8,0.01);
  opacity.position(10,230);
  v = createSlider(0.5,50,11,0.5);
  v.position(10,280);
  background(240);
  dots.setText(defaultTxt);
}

function draw(){
  if(windowWidth < 800 && checkwindow){
    dots.setFontSize(32, defaultTxt);
    checkwindow = false;
    alert('Your window is  narrow, try landscape and refresh :)');
  }
  inputText.input(()=>dots.setText(inputText.value()));
  background('rgba(240,240,240,'+ opacity.value() + ')');
  textSize(16);
  fill(0, 0, 0);
  noStroke();
  text('Weight: ' + dots.getWeight(), 10, 10, 100, 100);
  text('Red: ' + dots.getColor().r, 10, 60, 100, 100);
  text('Green: ' + dots.getColor().g, 10, 110, 100, 100);
  text('Blue: ' + dots.getColor().b, 10, 160, 100, 100);
  text('Opacity of background: ' + opacity.value(), 10, 210, 250, 100);
  text('Limit velocity: ' + dots.getSpeed(), 10, 260, 200, 100);
  text('Your text: \n' + dots.getTextToDisplay(), 10, 310, 200, 200);
  text('Number of dots: ' + dots.getDots(), 10, 400, 220, 100);
  stroke(0);
  strokeWeight(1);
  noFill();
  rect(0,0,220,500);

  w = strokeSlider.value();
  r = colR.value();
  g = colG.value();
  b = colB.value();
  spd = v.value();

  dots.draw( w, r, g, b, spd);
}

function windowResized(){
  checkwindow = true;
  resizeCanvas(windowWidth,windowHeight);
}
