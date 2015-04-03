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

    function animate(element_ID, animation) {

        $(element_ID).css({'display': 'block'}).addClass(animation);
        var wait = window.setTimeout( function(){
            $(element_ID).removeClass(animation)}, 1300
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

        new WOW().init();

		addAnimation('.box-features section', 'bounceInUp');

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

		var	$window = $(window),
			$body = $('body');

			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

			$('.carousel').carousel({ interval: 15000, pause: 'hover' });

			$('#slider-header').on('slide.bs.carousel', function () {
			  	$('.carousel-caption').fadeOut();
			})

			$('#slider-header').on('slid.bs.carousel', function () {
				 animate(".carousel-caption", 'bounceInUp');
			})

	});

})(jQuery);