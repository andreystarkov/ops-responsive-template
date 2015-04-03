/* skel-baseline v2.0.3 | (c) n33 | getskel.com | MIT licensed */

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			global: {
				href: 'css/style.css',
				containers: 1400,
				grid: { gutters: ['2em', 0] }
			},
			xlarge: {
				media: '(max-width: 1680px)',
				href: 'css/style-xlarge.css',
				containers: 1200
			},
			large: {
				media: '(max-width: 1280px)',
				href: 'css/style-large.css',
				containers: 960,
				grid: { gutters: ['1.5em', 0] },
				viewport: { scalable: false }
			},
			medium: {
				media: '(max-width: 980px)',
				href: 'css/style-medium.css',
				containers: '90%'
			},
			small: {
				media: '(max-width: 736px)',
				href: 'css/style-small.css',
				containers: '90%',
				grid: { gutters: ['1.25em', 0] }
			},
			xsmall: {
				media: '(max-width: 480px)',
				href: 'css/style-xsmall.css'
			}
		},
		plugins: {
			layers: {
				config: {
					mode: 'transform'
				},
				navPanel: {
					animation: 'pushX',
					breakpoints: 'medium',
					clickToHide: true,
					height: '100%',
					hidden: true,
					html: '<div data-action="moveElement" data-args="nav"></div>',
					orientation: 'vertical',
					position: 'top-left',
					side: 'left',
					width: 250
				},
				navButton: {
					breakpoints: 'medium',
					height: '4em',
					html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
					position: 'top-left',
					side: 'top',
					width: '6em'
				}
			}
		}
	});

    function createSliderNavigation(obj){
        var box = $(obj);
        var count = $('.item', obj).length;
        for(var i = 0; i < count; i++){
            $('.carousel-indicators', box).append('<li data-target="'+obj+'" data-slide-to="'+i+'"></li>');
        }
        $(box).append('<div class="left carousel-control carousel-left" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></div><div class="right carousel-control carousel-right" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></div>');
    }

    function animate(element_ID, animation) {

        $(element_ID).css({'display': 'block'}).addClass(animation);
        var wait = window.setTimeout( function(){
            $(element_ID).removeClass(animation)}, 1000
        );
    }

    function addAnimation(obj, animation){
    	$(obj).each(function(i){
    		i++;
    		$(this).addClass('wow '+animation);
    		$(this).attr({"data-wow-duration": "1s", "data-wow-delay": "0."+i+"s"});
    	});
    }

	$(function() {

		addAnimation('.box-features section', 'fadeInUp');
	//	addAnimation('.news-item', 'fadeInLeft');

		wow = new WOW({
		  boxClass:'wow', animateClass: 'animated', offset: 0, mobile: true, live: true
		});

		wow.init();

		$('body').flowtype({minFont: 12, maxFont: 16, maximum: 1200});

		var waypoint = new Waypoint({
		  element: $('#main'),
		  handler: function(direction) {
		    if(direction == "down"){
		    	$('#nav').addClass('faded');
		    } else {
		    	$('#nav').removeClass('faded');
		    }
		  }
		});

		$('.carousel-caption').each(function(){
			$(this).addClass('animated');
		});

		$('.carousel').carousel({ interval: 15000, pause: 'hover' });

		createSliderNavigation('#slider-header');

	    $('.carousel-left').click(function(){
	        $(this).parent().carousel('prev');
	    });
	    $('.carousel-right').click(function(){
	        $(this).parent().carousel('next');
	    });

        window.setTimeout( function(){
          //  $(".carousel-caption").removeClass('fadeInUp').attr({"data-wow-duration": "0.9s", "data-wow-delay": "0.2s"});
        }, 2000);

		$('#slider-header').on('slide.bs.carousel', function () {
		  	$('.carousel-caption').fadeOut();
		});

		$('#slider-header').on('slid.bs.carousel', function () {
			 animate(".carousel-caption", 'rotateInUpLeft');
		});

		var	$window = $(window),
			$body = $('body');

			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

	});

})(jQuery);