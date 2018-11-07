var gradient = ( function() {
  // body...

  //cacheDOM
  const $bodyWrapper = $('.body-wrapper');
  const $arrows = $bodyWrapper.find('.picker__arr');
  const $ranges = $bodyWrapper.find('.picker__range');
  const $colors = $bodyWrapper.find('.picker__color');
  const $textArea = $bodyWrapper.find('.picker__code');


  //variables
  let lastRangesValues = [30,70];
  let angle = 0;
  let lastColorsValues = ['', ''];



  //functions

  function checkRangesValues(){
    for(let i = 0; i < lastRangesValues.length; i++ ){
      if(lastRangesValues[i] !== $ranges[i].value && $ranges[i].value !== ""){
        //check if > 100
        if($ranges[i].value >= 100) $ranges[i].value = 100;
        //check if < 0
        if($ranges[i].value <= 0) $ranges[i].value = 0;
        //set new value
        lastRangesValues[i] = Number($ranges[i].value);
      }
    }
    render();
  }

  function checkColorsValues(){
    for(let i = 0; i < lastColorsValues.length; i++ ){
      if(lastColorsValues[i] !== $colors[i].value){
        lastColorsValues[i] = $colors[i].value;
      }
    }
    checkRangesValues();
  }

  function checkAngle(e){
    if(e && angle !== e.target.dataset.angle ){
      angle = Number(e.target.dataset.angle);
    }
    console.log(angle);
    checkColorsValues();
  }


  function render(e){
    let code = 'linear-gradient(' + angle + 'deg, ' + lastColorsValues[0] + ' ' + lastRangesValues[0] + '%, ' + lastColorsValues[1] + ' ' + lastRangesValues[1] + '%)';
    $bodyWrapper.css('background', code );
    $textArea.text('background: ' + code + ';');

  }

  function rotate(){
    $arrows.each((index,item)=>{
      item.dataset.angle = 45*(index);
    });
  }

  function init(){
    rotate();
    checkAngle();
    $colors.on('input', checkColorsValues);
    $arrows.on('click', checkAngle);
    $ranges.on('input', checkRangesValues);
  }

  return {
    init: init
  };
})();
