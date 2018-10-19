var scrolling = (()=> {
  // body...

//cacheDOM
const $header = $('.header-layout');
const $projectIcon = $header.find('.icon-styling:nth-child(1)');
const $aboutMeIcon = $header.find('.icon-styling:nth-child(2)');
const $projectHeight = $('#projects').height();

function render(){
  console.log($(this));
  let windowHeight = $(window).innerHeight();
  if($(this).text() === 'work'){
    $(window).scrollTop((0.75*windowHeight));
  }else if($(this).hasClass('fa-user')){
    $(window).scrollTop(0.75*(windowHeight + $projectHeight));
  }else{
    return;
  }
}


function init(){
  $projectIcon.on('click', render);
  $aboutMeIcon.on('click', render);
}

return{
  init: init
};
})();
