const game = (()=> {

  // body...

  // variables
  let lastPlayer = 'cross';
  let crosses = '';
  let circles = '';
  let end = false;
  let moves = 0;
  //cacheDOM

  const $project = $('.project');
  const $playground = $project.find('.playground');
  const $player = $project.find('.project__player');
  const $restartButton = $project.find('.restart');
  const $squares = $playground.find('.playground__square');

  function start(){
    $player.text('Now turn: circle');
    $squares.click(canClick);
    $restartButton.click(restart);
  }

  //functions
  function addSquareOrCross(that){
    $player.text('Now turn: ' + lastPlayer);
    if(lastPlayer === 'cross'){
      that.addClass('circle');
      lastPlayer = 'circle';
      circles += that.data('number');
    }else{
      that.addClass('cross');
      lastPlayer = 'cross';
      crosses += that.data('number');
    }
    checkIfEnd();
  }

  function canClick(e){
    let that = $(this);
    let child = that.children('.figure');
    if(child.is('.circle, .cross') || end){
      that.addClass('rotate');
      setTimeout(function(){
        that.removeClass('rotate');
      },1000);
    }else{
      addSquareOrCross(child);
    }
  }

  function winner(win){
    end = true;
    if(win === "TIE"){
      $player.text('TIE!!!');
    }else{
      $player.text(win + ' WINS!!!');
    }
  }

  function checkIfEnd(){
    moves++;
    for(let i = 0; i < 3; i++){
      if(circles.search((i*3)%9) != -1 && circles.search((i*3)%9 + 1) != -1 && circles.search((i*3)%9 + 2) != -1 || (circles.search((i%9)) != -1 && circles.search((i+3)%9) != -1 && circles.search((i+6)%9) != -1) || (circles.search(0) != -1 && circles.search(4) != -1 && circles.search(8) != -1) || (circles.search(2) != -1 && circles.search(4) != -1 && circles.search(6) != -1) ){
        winner('CIRCLE');
        break;
      }
      if(crosses.search((i*3)%9) != -1 && crosses.search((i*3)%9 + 1) != -1 && crosses.search((i*3)%9 + 2) != -1 || (crosses.search((i%9)) != -1 && crosses.search((i+3)%9) != -1 && crosses.search((i+6)%9) != -1) || (crosses.search(0) != -1 && crosses.search(4) != -1 && crosses.search(8) != -1) || (crosses.search(2) != -1 && crosses.search(4) != -1 && crosses.search(6) != -1) ){
        winner('CROSS');
        break;
      }
    }
    if(moves > 8){
      winner('TIE');
    }
  }

  function restart(){
    $squares.each((index,square) => {
      $(square).children('.figure').removeClass('circle cross');
    });
    moves = 0;
    end = false;
    lastPlayer = 'cross';
    crosses ='';
    circles ='';
    $player.text('Now turn: circle');
    // start();
  }

  return {
    start: start,
  };
})();
// game.start();
