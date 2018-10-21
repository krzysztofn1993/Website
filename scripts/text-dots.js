var dots = (function() {
  // body...

  //variables
  let arrDots = [];
  let weight = 4;
  let textToDisplay = '';
  let textDot = 0;
  let speed = 11;
  let fontSize = 64;
  const particleColor ={
    r: 0,
    g: 0,
    b: 5
  };


  const getColor = function(){
    return particleColor;
  };

  const setColor = function(r,g,b){
    if(particleColor.r !== r && typeof(r) === 'number') particleColor.r = r;
    if(particleColor.g !== g && typeof(r) === 'number') particleColor.g = g;
    if(particleColor.b !== b && typeof(r) === 'number') particleColor.b = b;
  };


  const setFontSize = function(x, text){
    fontSize = x;
    setArrDots(text);
  };

  const getTextToDisplay = function(){
    return textToDisplay;
  };

  const getWeight = function(){
    return weight;
  };

  const setWeight = function(w){
    if(weight !== w && typeof(w) === 'number')
    {
      weight = w;
    }
  };



  const getSpeed = function(){
    return speed;
  };

  const setSpeed = function(s){
    if(speed !== s && typeof(s) === 'number')
    {
      speed = s;
    }
  };



  const getArrDots = function(){
    return arrDots.length;
  };

  const setArrDots = function(text){
    textToDisplay = text;
    textDot = font.textToPoints(textToDisplay, 250, height/2, fontSize,
    {sampleFactor : 0.23,
    simplifyThreshold: 0});
    while(arrDots.length !== 0){
      arrDots.pop();
    }
    for( let i = 0; i < textDot.length; i++){
      arrDots.push(new Particle(textDot[i].x,textDot[i].y));
    }
  };


  const behave = function(){
    for( let particle of arrDots){
      particle.behave(weight,particleColor.r,particleColor.g,particleColor.b,speed);
    }
  };




  const draw = function(w,r,g,b,s){
    setSpeed(s);
    setWeight(w);
    setColor(r,g,b);
    behave();
  };




  return {
    font: fontSize,
    setFontSize: setFontSize,
    getSpeed: getSpeed,
    getColor:getColor,
    getDots:getArrDots,
    setText: setArrDots,
    getWeight:getWeight,
    getTextToDisplay: getTextToDisplay,
    behave: behave,
    draw: draw,
  };

})();
