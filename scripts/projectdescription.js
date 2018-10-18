var description = (()=>{
// body...

//cache DOM
const $tiles = $('.projects-gallery__tile');
let width = $(window).width();
///////////////////


function render(e){
    $(this).children('.projects-gallery__moving-part').toggleClass('description');
}

$(window).resize(()=>{
  if (width!= $(window).width()) {
    width = $(window).width();
    init();
  }
});

function init(){
  console.log(width);
  if(width < 768){
    $tiles.off('mouseenter mouseleave').on('click', render);
  }else{
    $tiles.off('click').on('mouseenter mouseleave', render);
  }
}
return {
  init: init
};
})();
