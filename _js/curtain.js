(function($) {

  function Curtain($curtains) {
    var self = this,
        $el = $curtains,
        waypoints = [],
        Waypoint = window.Waypoint;

    self.height = 0;
    self.buffer = 128;

    self.init = function() {
      window.scrollTo(0, 1);
      // do window size checks
      self.setBodyHeight();
      self.setWaypoints();
    }

    self.setBodyHeight = function(){
      var bodyHeight = 0;

      $curtains.each(function(){
        bodyHeight += $(this).height();
      });

      $('body').height(bodyHeight);
    }

    self.setTop = function($el){
      $('.curtain').removeClass('top');
      $el.addClass('top');
    }

    self.injectFixed = function($el){
      if ($el.length) {
        $('#fixed').empty();
        $el.children().first().clone().appendTo('#fixed');
      }
    }

    self.setWaypoints = function(){
      $('.curtain').each(function(){
        var inview = new Waypoint.Inview({
          element: $(this)[0],
          enter: function(direction) {
            if (direction == 'up') {
              self.setTop($(this.element));
              self.injectFixed($(this.element).next('.curtain'));
            }
          },
          exit: function(direction) {
            if (direction == 'down') {
              self.setTop($(this.element));
              self.injectFixed($(this.element).next('.curtain'));
            }
          }
        })
      });

    }

    self.setNext = function($el){
      var $next = $el.next('.curtain');
      $el.css('margin-bottom', $next.height());
      setTimeout(function(){$next.addClass('set'); }, 10);
    };

    self.unsetNext = function($el){
      var $next = $el.next('.curtain');
      $el.css('margin-bottom', 0);
      $next.removeClass('set');
    };

    self.init();
  }

  $(function() {
    var $curtains = $(".curtain");

    if($curtains.length) {
      Curtain($curtains);
    }
  });

})(jQuery);
