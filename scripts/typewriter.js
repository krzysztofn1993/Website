var typingAnimation = (()=> {
  // body...

//cacheDOM

const literal = 'Nice to meet you.<br />Let me show you what I do...';
let currentLiteral = '';
let letter = 0;
let refTypeWriting = 0;

function render(){
  let $text = $('#typewrite');
  console.log($text);
  setTimeout(()=>{
    if(currentLiteral.length !== literal.length){
      currentLiteral += literal[letter];
      letter++;
      $text.html(currentLiteral);
      window.requestAnimationFrame(render);
    }else{
      cancelAnimationFrame(refTypeWriting);
    }
  }, 55);
}

function createParagraph(){
  console.log("halo");
  $('.welcome-text').append('<p id="typewrite" class="text text--bigger"></p>');
}

function init(){
  createParagraph();
  refTypeWriting = window.requestAnimationFrame(render);
}

return {
  init: init
};
})();
