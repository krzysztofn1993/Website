(function() {
  // body...
  var elements = {
    cachedDom: function(){
      this.$device = $('.paral-element__device--position');
      this.$bloom = $('.paral-element__bloom--position');
      this.$coffee = $('.paral-element__coffee--position');
      this.$paral = $('.moving-part');
      this.$deviceOffset = this.$device.offset().top;
      this.$bloomOffset = this.$bloom.offset().top;
      this.$coffeeOffset = this.$coffee.offset().top;
      this.$paralOffset = this.$paral.offset().top;
    },
    init: function(){
      this.cachedDom();
      this.bindEvents();
      this.render();
    },
    bindEvents: function(){
      $(window).scroll( throttled(50, this.updatePosition.bind(this)));
    },
    render: function(){
      this.$device.offset({top: this.$deviceMove});
      this.$bloom.offset({top: this.$bloomMove});
      this.$coffee.offset({top: this.$coffeeMove});
      this.$paral.offset({top: this.$paralMove});
    },
    updatePosition: function(){
      this.$windowScroll = $(window).scrollTop();
      this.$deviceMove =  this.$deviceOffset + this.$windowScroll/6;
      this.$bloomMove = this.$bloomOffset + this.$windowScroll/4;
      this.$coffeeMove = this.$coffeeOffset + this.$windowScroll/9;
      this.$paralMove = this.$paralOffset - this.$windowScroll/3;
      this.render();
    }
  };

  elements.init();
})();


function throttled(delay, fn) {
  let lastCall = 0;
  return function (...args) {
    const now = (new Date).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}
