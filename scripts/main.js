(function() {
  // body...
  var elements = {
    cachedDom: function(){
      this.$lap = $('.paral-element-lap--position');
      this.$bloom = $('.paral-element-bloom--position');
      this.$coffee = $('.paral-element-coffee--position');
      this.$about = $('#aboutMe');
      this.$lapOffset = this.$lap.offset().top;
      this.$bloomOffset = this.$bloom.offset().top;
      this.$coffeeOffset = this.$coffee.offset().top;
      this.$aboutOffset = this.$about.offset().top;
    },
    init: function(){
      this.cachedDom();
      this.bindEvents();
      this.render();
    },
    bindEvents: function(){
      $(window).scroll( throttled(100, this.updatePosition.bind(this)));
    },
    render: function(){
      this.$lap.offset({top: this.$lapMove});
      this.$bloom.offset({top: this.$bloomMove});
      this.$coffee.offset({top: this.$coffeeMove});
      this.$about.offset({top: this.$aboutMove});
    },
    updatePosition: function(){
      this.$windowScroll = $(window).scrollTop();
      this.$lapMove =  this.$lapOffset + this.$windowScroll/6;
      this.$bloomMove = this.$bloomOffset + this.$windowScroll/4;
      this.$coffeeMove = this.$coffeeOffset + this.$windowScroll/9;
      this.$aboutMove = this.$aboutOffset - this.$windowScroll/3;
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
