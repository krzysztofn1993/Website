

var number = (function() {
  // body...

  //cacheDOM
  const $project = $('.project');
  const $send = $project.find('#send');
  const $pickInput = $project.find('#pickedNumber');
  const $list = $project.find('.answer-list');
  const $info = $project.find('.info');
  let url = 'http://numbersapi.com/';
  let arrAnswers = [];


  //functions
  function askForNumber(e){
    e.preventDefault();
    let $pickedValue = $pickInput.val();
    let sendUrl = url + $pickedValue + '?json';
    fetch(sendUrl)
    .then(response => response.json())
    .then( json => {
      arrAnswers.push(json.text);
      limitAnswers();
      appendToList();
    }).catch((err) => {
      console.log(err);
    });
  }

  function limitAnswers(){
    arrAnswers = arrAnswers.filter((elem,pos,arr)=> arr.indexOf(elem) == pos);
    if(arrAnswers.length > 10){
      arrAnswers.shift();
    }
  }


  function appendToList(){
    if( $list.children('li:last').text() !== arrAnswers[arrAnswers.length-1] || $list.children('li').length == 0 ){
      $list.append(`<li class='answers-list__position'></li>`);
      $list.children('li:last').hide().text(`${arrAnswers[arrAnswers.length-1]}`).slideDown('slow');
    }else{
      console.log('same');
      $list.children('li:last').css('color', 'green');
      setTimeout(function(){
        $list.children('li').css('color', 'SeaShell');
      }, 400);
    }
    if($list.children('li').length > 10){
      $list.children('li:first').fadeOut('fast',function(){$(this).remove();});
    }
  }

  function bindEvents(){
    //bind events
    $send.click(askForNumber);
    $("form").submit(askForNumber);
  }

  return {
    init: bindEvents
  };

})();
