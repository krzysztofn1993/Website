var scrolling = (()=> {
  // body...

//cacheDOM
const $bodyWrapper = $('.body-wrapper');
const $projectsButton = $bodyWrapper.find('a[href="#Projects"]');
const $aboutMeButton = $bodyWrapper.find('a[href="#Aboutme"]');
let $projectsSectionHeight = $bodyWrapper.find('#Projects').height();
let $homeHeight = $bodyWrapper.find('#Home').height();
let $navbarPositionHeight = $bodyWrapper.find('.navbar li').height();
function render(e){
  if(!/iPhone/.test(navigator.platform)){
    e.preventDefault();
    // console.log($aboutMeSectionOffset , $projectsSectionOffset);
    if($(this).text() === 'Projects' || $(this).hasClass('goDown')){
      $(window).scrollTop($homeHeight - $navbarPositionHeight);
    }else{
      $(window).scrollTop($homeHeight + $projectsSectionHeight - $navbarPositionHeight);
    }
  }
}


function init(){
  $projectsButton.on('click', render);
  $aboutMeButton.on('click', render);
  $(window).resize(reload);
}

function reload(){
  $projectsSectionHeight = $bodyWrapper.find('#Projects').height();
  $homeHeight = $bodyWrapper.find('#Home').height();
  $navbarPositionHeight = $bodyWrapper.find('.navbar li').height();
}

return{
  init: init
};
})();
