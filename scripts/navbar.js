var navbar = (function() {
  // body...

  //cacheDOM

  const $menuElements = $('.navbar__position');
  const $menuPosition =  $menuElements.find('li');
  const $menuPositionHeight = $menuPosition.height();
  const $sections = $('.section');

  // variables

  let correctWidth = false;
  let hamburgerOpen = false;

  //functions

  function toggleClass(){
    $('.hamburger__dash').toggleClass('hamburger__dash--open');
    $menuElements.each((index,item)=>{
      if(hamburgerOpen){
        elem();
      }else{
        $(item).slideDown();
      }
    });
    hamburgerOpen = !hamburgerOpen;
  }

  function elem(){
    $menuElements.each((index,item)=>{
      if($(item).children('li').hasClass('text--bold')){
        $(item).slideDown();
      }else{
        $(item).slideUp();
      }
    });
  }

  function active () {
    $sections.each((index,item) => {
      if($(window).scrollTop() + $(window).innerHeight() >= $(document).height() - 2){
        for(let i = 0; i < $menuPosition.length; i++){
          $($menuPosition[i]).removeClass('text--bold');
          if(i === $menuPosition.length - 1 ){
            $($menuPosition[i]).addClass('text--bold');
          }
        }
      }else if($(window).scrollTop() >= $(item).offset().top - 2*$menuPositionHeight && $(window).scrollTop() <= $(item).offset().top + $(item).height() - 2*$menuPositionHeight){
        $($menuPosition[index]).addClass('text--bold');
      }else{
        // console.log('remove class');
        $($menuPosition[index]).removeClass('text--bold');
      }
    });
    if(!hamburgerOpen && correctWidth){
      elem();
    }
  }

  function init(){
    reload();
    $(window).resize(reload);
    $(window).scroll(throttled(10,active));
    $('.hamburger').click(toggleClass);
  }

  function reload(){
    if($(window).innerWidth() <= 560){
      correctWidth = true;
    }else{
      correctWidth = false;
    }
  }

  function throttled(delay, fn) {
      let lastCall = 0;
      return function (...args) {
        let now = (new Date).getTime();
        if (now - lastCall < delay) {
          return;
        }
        lastCall = now;
        return fn(...args);
      };
    }

  return {
    init: init
  };
})();
