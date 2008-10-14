(function($) {

$.fn.sushibar = function(options) {
  var opts = $.extend({}, $.fn.sushibar.defaults, options);
  return this.each(function() {
    var $this = $(this);
    var viewport      = null;
    var images        = {}; 
    var currentIndex  = 0;
    var imageCount    = 0;

    function init() {
      $this.addClass('sushibar');
      
      collectImages();
      setThumbClass();
      setThumbWidths();
      createViewport(); 
      setThumbClickHandler();
      hideThumbsBeyondSushibar();
      createNavigationArrows();
      createContainer();
    }

    function viewportWidth() {
      return opts.visibleThumbs * items().outerWidth({margin:true});
    }

    function collectImages() {
      $this.find('li').each(function() {
        var fullUrl  = $(this).find('a').attr('href');
        var thumbUrl = $(this).find('img').attr('src');
        images[thumbUrl] = fullUrl;
        imageCount++;

        $(this).find('a').attr('href', 'javascript:void(0)');
      });
    }

    function setThumbClass() {
      $this.find('li').
        addClass('sushibar_item').
        css('margin', opts.thumbMargin);
      $this.find('li > a > img').
        addClass('sushibar_thumb');
    }

    function setThumbWidths() {
      $this.find('.sushibar_thumb').
        css     ('width', opts.thumbWidth);
    }

    function setThumbClickHandler() {
      $this.find('.sushibar_thumb').click(function() {
        var thumbUrl = $(this).attr('src');
        viewport.fadeOut('fast', function() {
          viewport.find('img').attr('src', images[thumbUrl]);
          viewport.fadeIn();
        });
      });
    }

    function createViewport() {
      viewport = $('<div class="sushibar_viewport"></div>');

      // Set the image to the first of the set.
      viewport.append('<img src="'+images[$this.find('.sushibar_thumb').attr('src')]+'"/>');

      // Set the width to the user-specified width in thumbnail images.
      viewport.find('img').css( 'width', viewportWidth() + 'px');

      viewport.hide();
      $this.before(viewport);
      viewport.fadeIn();
    }

    function items() {
      return $this.find('li.sushibar_item');
    }

    function createNavigationArrows() {
      var leftArrow   = $('<li>&laquo;</li>');

      leftArrow.click(function() {
        if (currentIndex == 0) return;
        currentIndex--;
        items().each(function(index) {
          if (index < currentIndex || index >= currentIndex + opts.visibleThumbs) {
            $(this).hide();
          } else {
            $(this).fadeIn();
          }
        });
      });

      var rightArrow  = $('<li>&raquo;</li>');
      rightArrow.click(function() {
        if (currentIndex == imageCount-opts.visibleThumbs) return;
        currentIndex++;
        items().each(function(index) {
          if (index < currentIndex || index >= currentIndex + opts.visibleThumbs) {
            $(this).hide();
          } else {
            $(this).fadeIn();
          }
        });
      });

      $this.prepend(leftArrow);
      $this.append(rightArrow);
    }

    function hideThumbsBeyondSushibar() {
      items().each(function(index) {
        if (index >= opts.visibleThumbs) {
          $(this).hide();
        }
      });
    }

    function createContainer() {
      var container = $('<div></div>');
      container.css('text-align', 'center');
      $this.wrap(container);
      $this.before(viewport);
    }

    init();

  });

};

//////////////////////////////////////// 
$.fn.sushibar.defaults = {
  thumbWidth:     '48px',
  thumbMargin:    '5px',
  visibleThumbs:  5
};
//////////////////////////////////////// 

})(jQuery);

