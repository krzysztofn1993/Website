let paralax = (function() {

  //cache DOM
      const $parent = $('.body-wrapper');
      const $device = $parent.find('.paral-element__device--position');
      const $bloom = $parent.find('.paral-element__bloom--position');
      const $coffee = $parent.find('.paral-element__coffee--position');
      const $paral = $parent.find('.moving-sections-wrapper');
      const $deviceOffset = $device.offset().top;
      const $bloomOffset = $bloom.offset().top;
      const $coffeeOffset = $coffee.offset().top;
      const $paralOffset = $paral.offset().top;
      let $windowScroll = $(window).scrollTop();
      let $deviceMove =  $deviceOffset + $windowScroll/6;
      let $bloomMove = $bloomOffset + $windowScroll/4;
      let $coffeeMove = $coffeeOffset + $windowScroll/9;
      let $paralMove = $paralOffset - $windowScroll/3;
//////////////////

    function render(){
      $device.offset({top: $deviceMove});
      $bloom.offset({top: $bloomMove});
      $coffee.offset({top: $coffeeMove});
      $paral.offset({top: $paralMove});
    }
    function updatePosition(){
      $windowScroll = $(window).scrollTop();
      $deviceMove =  $deviceOffset + $windowScroll/6;
      $bloomMove = $bloomOffset + $windowScroll/4;
      $coffeeMove = $coffeeOffset + $windowScroll/9;
      $paralMove = $paralOffset - $windowScroll/3;
      render();
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

    function init(){
      $(window).scroll( throttled(10, updatePosition));
    }
    return {
       init: init
    };
  })();
