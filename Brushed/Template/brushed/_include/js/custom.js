
/*=========================================================================
 message box
========================================================================= */
	jQuery(function(){
      $('.message-box').find('.closemsg').click(function() {
         $(this).parent('.message-box').slideUp(500);
      });
	});

/*=========================================================================
 Nav
========================================================================= */
    $(window).load(function(){
      $("#nav").sticky({ topSpacing: 0 });
    });

/*=========================================================================
 Accordion
========================================================================= */
    $(function(){$("#accordion" ).accordion();});
    jQuery(function(){
      $().UItoTop({ easingType: 'easeOutQuart' });
    });
    
/*=========================================================================
 Carousel 1
========================================================================= */
	$(window).load (
    function(){$('.carousel1').carouFredSel({auto: true,prev: '.prev1',next: '.next1', width: '100%', items: {
      visible : {min: 1,
       max: 1
},
height: 'auto',
 width: 940,

    }, responsive: true, 
    
    scroll: 1, 
    
    mousewheel: false,
    
    swipe: {onMouse: true, onTouch: true}});
    
    } );
	
/*=========================================================================
 Carousel 2
========================================================================= */
    $(window).load (
    function(){$('.carousel2').carouFredSel({auto: true,prev: '.prev2',next: '.next2', width: '100%', items: {
      visible : {min: 1,
       max: 1
},
height: 'auto',
 width: 940,

    }, responsive: true, 
    
    scroll: 1, 
    
    mousewheel: false,
    
    swipe: {onMouse: true, onTouch: true}});
    
    } );

/*=========================================================================
 Image hover carousel 
========================================================================= */

			$(function() {
				$('.carousel').each(function() {
					var $cfs = $(this);
					$cfs.carouFredSel({
						direction: 'up',
						circular: false,
						infinite: false,
						align: false,
						width: 239,
						height: 277,
						items: 1,
						auto: false,
						scroll: {
							queue: 'last'
						}
					});
					$cfs.hover(
						function() {
							$cfs.trigger('next');
						},
						function() {
							$cfs.trigger('prev');
						}
					);
				});
			});



/*=========================================================================
 Tabs
========================================================================= */

;(function ( $, window, document, undefined ) {

    var pluginName = "tabulous",
        defaults = {
            effect: 'scale'
        };

       // $('<style>body { background-color: red; color: white; }</style>').appendTo('head');

    function Plugin( element, options ) {
        this.element = element;
        this.$elem = $(this.element);
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {

        init: function() {

            var links = this.$elem.find('a');
            var firstchild = this.$elem.find('li:first-child').find('a');
            var lastchild = this.$elem.find('li:last-child').after('<span class="tabulousclear"></span>');

            if (this.options.effect == 'scale') {
             tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescale');
            } else if (this.options.effect == 'slideLeft') {
                 tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hideleft');
            } else if (this.options.effect == 'scaleUp') {
                 tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescaleup');
            } else if (this.options.effect == 'flip') {
                 tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hideflip');
            }

            var firstdiv = this.$elem.find('#tabs_container, #tabs_container_dark');
            var firstdivheight = firstdiv.find('div:first').height();

            var alldivs = this.$elem.find('div:first').find('div');

            alldivs.css({'position': 'absolute','top':'40px'});

            firstdiv.css('height',firstdivheight+'px');

            firstchild.addClass('tabulous_active');

            links.bind('click', {myOptions: this.options}, function(e) {
                e.preventDefault();

                var $options = e.data.myOptions;
                var effect = $options.effect;

                var mythis = $(this);
                var thisform = mythis.parent().parent().parent();
                var thislink = mythis.attr('href');


                firstdiv.addClass('transition');

                links.removeClass('tabulous_active');
                mythis.addClass('tabulous_active');
                thisdivwidth = thisform.find('div'+thislink).height();

                if (effect == 'scale') {
                    alldivs.removeClass('showscale').addClass('make_transist').addClass('hidescale');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showscale');
                } else if (effect == 'slideLeft') {
                    alldivs.removeClass('showleft').addClass('make_transist').addClass('hideleft');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showleft');
                } else if (effect == 'scaleUp') {
                    alldivs.removeClass('showscaleup').addClass('make_transist').addClass('hidescaleup');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showscaleup');
                } else if (effect == 'flip') {
                    alldivs.removeClass('showflip').addClass('make_transist').addClass('hideflip');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showflip');
                }


                firstdiv.css('height',thisdivwidth+'px');

                


            });

           


         
            
        },

        yourOtherFunction: function(el, options) {
            // some logic
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            new Plugin( this, options );
        });
    };

})( jQuery, window, document );


$(document).ready(function($) {
    

    $('#tabs').tabulous({
    	effect: 'scale'
    });

     $('#tabs2').tabulous({
    	effect: 'slideLeft'
    });

     $('#tabs3').tabulous({
    	effect: 'scaleUp'
    });

    $('#tabs4, #tabs3-left-dark').tabulous({
    	effect: 'flip'
    });


});


/*=========================================================================
 S Gallery screenfull
========================================================================= */

/*!
* screenfull
* v1.0.4 - 2013-05-26
* https://github.com/sindresorhus/screenfull.js
* (c) Sindre Sorhus; MIT License
*/
(function(a,b){"use strict";var c="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,d=function(){for(var a,c,d=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"]],e=0,f=d.length,g={};f>e;e++)if(a=d[e],a&&a[1]in b){for(e=0,c=a.length;c>e;e++)g[d[0][e]]=a[e];return g}return!1}(),e={request:function(a){var e=d.requestFullscreen;a=a||b.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?a[e]():a[e](c&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){b[d.exitFullscreen]()},toggle:function(a){this.isFullscreen?this.exit():this.request(a)},onchange:function(){},onerror:function(){},raw:d};return d?(Object.defineProperties(e,{isFullscreen:{get:function(){return!!b[d.fullscreenElement]}},element:{enumerable:!0,get:function(){return b[d.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return!!b[d.fullscreenEnabled]}}}),b.addEventListener(d.fullscreenchange,function(a){e.onchange.call(e,a)}),b.addEventListener(d.fullscreenerror,function(a){e.onerror.call(e,a)}),a.screenfull=e,void 0):a.screenfull=!1})(window,document);



/*=========================================================================
 S Gallery
========================================================================= */

/*
 *  Project: S Gallery 
 *  Description: Responsive jQuery Gallery Plugin with CSS3 Animations inspired by http://store.sony.com/webapp/wcs/stores/servlet/ProductDisplay?catalogId=10551&storeId=10151&langId=-1&productId=8198552921666556433#gallery
 *  Author: Sara Soueidan
 *  License: Creative-Commons Attribution Non-Commercial
 */

;(function ( $, window, document, undefined ) {

    var pluginName = "sGallery",
        defaults = {
            fullScreenEnabled: false
        };

    function Plugin( element, options ) {
        this.element = element;
        this.galleryContainer = $(this.element);
        this.bigItemsList = this.galleryContainer.children('ul:eq(1)');
        this.bigItem = this.bigItemsList.children('li');
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.current = "";
        this.slideshow = false;
        this.initialHeight = 'auto';
        this.isFullScreen = false;
        this.$controls = $('.controls');
        this.$control = $('.control');
        this.$grid = $('.grid');
        this.$fsButton = $('.fs-toggle');
        this.$document = $(document);
        this.$window = $(window);
        this.init();
    }

    Plugin.prototype = {

        init: function() {
            var that = this,
                smallItems = this.galleryContainer.find('ul:eq(0)'),
                smallItem = smallItems.children('li'),
                count = this.bigItem.length,
                options = this.options;
                

            this.setDelays(smallItems);
            this.bindListHandler(smallItems);
            this.handleQuit();
            this.controlSlideShow(count);
            if(options.fullScreenEnabled){
                this.controlFullScreen();
            }
            this.changeOnResize();
            
        },

        changeOnResize: function(){
            var that = this;

            this.$window.load(function(){

                that.$window.resize(function(){

                    that.initialHeight = that.galleryContainer.outerHeight();

                    that.minHeight = that.bigItem.height()
                                    +  parseInt(that.bigItem.css('top'))
                                    + that.$controls.height() * 2;
                                    console.log('window resize');
                    that.adaptHeight();
                   
                });
                that.$window.trigger('resize');
            });
            
        },

        setDelays: function(smallItems){
            smallItems.children('li').each(function(index){
                $(this).css('animation-delay', 0.075 * index + 's');
            });
        },

        bindListHandler: function(smallItems){
            var that = this;

            smallItems.on('click', 'li', function(e){
                e.preventDefault();
                var $this = $(this);
                that.current = $this.index();
                that.fadeAllOut();
                that.showControls();
                that.slideshow = true;
                startImg = that.bigItemsList.children('li:eq(' + that.current + ')');
                $this.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                    startImg.addClass('fadeInScaleUp').removeClass('fadeOut');
                    that.adaptHeight();
                });   
            });
        },

        adaptHeight: function(){
            var that = this,
                height = this.bigItem.outerHeight();
            if(that.slideshow && that.initialHeight < that.minHeight){
                $(that.element).animate({'height': that.minHeight + 'px'}, 0);
                console.log('adapting height first if');
            }
            else if(that.slideshow && that.initialHeight > that.minHeight){
                $(this.element).animate({'height': that.minHeight + 'px'}, 0);
                console.log('adapting height second if');
            }
        },

        fadeAllOut: function(){
            this.galleryContainer.children('ul:eq(0)')
                     .children('li')
                     .removeClass('scaleUpFadeIn')
                     .removeClass('showLastSecond')
                     .addClass('scaleDownFadeOut');
        },

        fadeAllIn: function(){
            var that = this;
            var dropZone = this.galleryContainer.children('ul:eq(0)').children('li:eq(' + that.current + ')');
            this.galleryContainer.children('ul:eq(0)')
                     .children('li')
                     .not(dropZone)
                     .removeClass('scaleDownFadeOut')
                     .addClass('scaleUpFadeIn');

            dropZone.removeClass('scaleDownFadeOut').addClass('showLastSecond');
        },

        showControls:function(){
            this.$controls.addClass('showControls')
                          .removeClass('hideControls');
        },

        hideControls: function(){
            this.$controls.addClass('hideControls')
                          .removeClass('showControls');
        },

        controlSlideShow: function(count){

            var that = this, key;

            this.$document.on('keydown', function(e){

                var e = e || window.event;
                key = e.keyCode;

                if(key == 37 && that.slideshow){
                    that.current--;
                    if(that.current < 0) { 
                        that.current = count - 1; 
                    }
                    that.moveToNextImage();
                }
                else if(key == 39 && that.slideshow){
                    that.current++;
                    if(that.current == count) { 
                        that.current = 0; 
                    }
                    that.moveToNextImage();
                }
                
            });

            this.$control.on('click', function(){

                var direction = $(this).data('direction');

                (direction == 'next') ? that.current++ : that.current--;

                if(that.current < 0) { 
                    that.current = count - 1; 
                }
                else if(that.current == count) { 
                    that.current = 0; 
                }

                that.moveToNextImage();

            });
        },

        moveToNextImage: function(){
            var that = this;

            var currentImg = this.bigItemsList.children('li:eq(' + that.current + ')')
                                         .addClass('fadeInScaleUp')
                                         .siblings('li')
                                         .filter('.fadeInScaleUp')
                                         .removeClass('fadeInScaleUp')
                                         .addClass('fadeOut')
                                         .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                                            $(this).removeClass('fadeOut');
                                         });
        },

        handleQuit: function(){

            var that = this;

            this.$document.on('keydown', function(e){
                var e = e || window.event;
                    key = e.keyCode;

                if(key == 16 && that.slideshow){
                    that.quitSlideShow();
                }
            });
            
            this.$grid.on('click', function(){
                that.quitSlideShow();
            });
        },

        controlFullScreen: function(){
            var that = this, gallery = this.element;

            this.$fsButton.css('display', 'inline-block').on('click', function(){
               if (screenfull.enabled) {
                    screenfull.toggle(gallery);
                    if(!that.isFullScreen){
                        $(this).removeClass('icon-fullscreen').addClass('icon-fullscreen-exit');
                        that.isFullScreenfull = true;
                    }
                    else{
                        $(this).removeClass('icon-fullscreen-exit').addClass('icon-fullscreen');
                        that.isFullScreen=false;
                    }
                } 
                else {
                    return false;
                }      
            });
        },

        quitSlideShow: function(test) {
            
            this.hideControls();
            this.fadeAllIn();
            this.slideshow = false;

            var that = this;

            if(!this.isFullScreen){
                this.galleryContainer.animate({'height' : that.initialHeight}, 0, function(){
                    $(this).css('height', 'auto');
                });
            }

            var currentImg = this.galleryContainer.children('ul:eq(1)').children('li:eq(' + that.current + ')'),
                  dropZone = this.galleryContainer.children('ul:eq(0)').children('li:eq(' + that.current + ')'),
                    height = dropZone.height(),
                     width = dropZone.width(),
                      left = dropZone.position().left,
                       top = dropZone.position().top,
                     delay = parseFloat(dropZone.css('animation-delay')),
                  duration = parseFloat(dropZone.css('animation-duration')),
                      wait = delay + duration;

            currentImg.children('img').andSelf().animate({
                'height'     : height,
                'width'      : width ,
                'left'       : left  + 'px',
                'top'        : top  + 'px',
            }, wait * 1000, function(){
                    $(this).removeClass('fadeInScaleUp').removeAttr('style');
            });
        }
    };

    
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );

    $(document).ready(function(){
      $('#gallery-container').sGallery({
        fullScreenEnabled: true
      });
    });



// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: ''
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css('position', '')
              .css('top', '');
            s.stickyElement.parent().removeClass(s.className);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop);

            if (typeof s.getWidthFrom !== 'undefined') {
              s.stickyElement.css('width', $(s.getWidthFrom).width());
            }

            s.stickyElement.parent().addClass(s.className);
            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();
    },
    methods = {
      init: function(options) {
        var o = $.extend(defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          stickyId = stickyElement.attr('id');
          wrapper = $('<div></div>')
            .attr('id', stickyId + '-sticky-wrapper')
            .addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);

          if (o.center) {
            stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          var stickyWrapper = stickyElement.parent();
          stickyWrapper.css('height', stickyElement.outerHeight());
          sticked.push({
            topSpacing: o.topSpacing,
            bottomSpacing: o.bottomSpacing,
            stickyElement: stickyElement,
            currentTop: null,
            stickyWrapper: stickyWrapper,
            className: o.className,
            getWidthFrom: o.getWidthFrom
          });
        });
      },
      update: scroller
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);



$(window).load(function(){
// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});
});//]]>  


/*=========================================================================
 Button
========================================================================= */

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );


var buttons7Click = Array.prototype.slice.call( document.querySelectorAll( '#btn-click button' ) ),
	buttons9Click = Array.prototype.slice.call( document.querySelectorAll( 'button.btn-8g' ) ),
	totalButtons7Click = buttons7Click.length,
	totalButtons9Click = buttons9Click.length;

buttons7Click.forEach( function( el, i ) { el.addEventListener( 'click', activate, false ); } );
buttons9Click.forEach( function( el, i ) { el.addEventListener( 'click', activate, false ); } );

function activate() {
	var self = this, activatedClass = 'btn-activated';

	if( classie.has( this, 'btn-7h' ) ) {
		// if it is the first of the two btn-7h then activatedClass = 'btn-error';
		// if it is the second then activatedClass = 'btn-success'
		activatedClass = buttons7Click.indexOf( this ) === totalButtons7Click-2 ? 'btn-error' : 'btn-success';
	}
	else if( classie.has( this, 'btn-8g' ) ) {
		// if it is the first of the two btn-8g then activatedClass = 'btn-success3d';
		// if it is the second then activatedClass = 'btn-error3d'
		activatedClass = buttons9Click.indexOf( this ) === totalButtons9Click-2 ? 'btn-success3d' : 'btn-error3d';
	}

	if( !classie.has( this, activatedClass ) ) {
		classie.add( this, activatedClass );
		setTimeout( function() { classie.remove( self, activatedClass ) }, 1000 );
	}
}

document.querySelector( '.btn-7i' ).addEventListener( 'click', function() {
	classie.add( document.querySelector( '#trash-effect' ), 'trash-effect-active' );
}, false );

