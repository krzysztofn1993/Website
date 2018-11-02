var typingAnimation = (()=> {
  // body...

//cacheDOM

const $text = $('#typewrite');
const literal = 'Nice to meet you.<br />Let me show you what I do...';
let currentLiteral = '';
let letter = 0;
let refTypeWriting = 0;

function render(){
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

function init(){
  refTypeWriting = window.requestAnimationFrame(render);
}

return {
  init: init
};
})();
