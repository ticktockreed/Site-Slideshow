/*
* AJAX Pageload
* Copyright 2012, Tim Reed             
* http://www.opensource.org/licenses/mit-license.php
* 8/17/2011
*/

/**
 * Globals Object
**/
var objGlobals = {
	
	/**
	 * Constants used throughout the app. Any selectors you use
	 * should appear here so that you only have to change them
	 * in one place.
	 */
	CONSTANTS: {
		
		CSS_AJAX_CONTENT_WRAP: '#content',

		
	},
	
	/**
	 * Init method. Fires off all other inits. Should be called
	 * only once on the first page load when the user arrives at the site.
	 */
	init: function() {
		
		// don't cache AJAXed content
		$.ajaxSetup ({  
		    cache: false  
		});
		
		
		objGlobals.init_ajax_site();
		objGlobals.init_hash_change_hook();
		objGlobals.init_slideshow();
		objGlobals.slideshowControls();
		objGlobals.slideSwitch();
		
	},
	
	/**
	 * So we can support the back button and such, we need
	 * to hook the hash changed event and load the page via
	 * AJAX as normal. Passing in true to this function will remove the
	 * hash change handler (useful for actual anchors)
	 */
	init_hash_change_hook: function(boolCancel) {
	
		if (boolCancel) {
			
			$(window).unbind('hashchange');
			
		} else {
			
			$(window).hashchange(function() {
				// ADD THIS LATER // _gaq.push(['_trackPageview', window.location.hash.substr(1)]);
				objGlobals.init_ajax_site(window.location.hash);
			});
			
		}
		
	},
	
	/**
	 * Since the site should be completely AJAX, we need to hook all
	 * non-external links and forms and pass their processing through
	 * our AJAX-driven routines. 
	 */
	init_ajax_site: function() {
		
		var ajaxwrapper = objGlobals.CONSTANTS.CSS_AJAX_CONTENT_WRAP
		
		
		var ajaxpage = $('a');
		$('.images img').fadeIn('slow');
		
		ajaxpage.click(function(event){            
		   event.preventDefault();            
			var strURL = $(this).attr('href')
			var toLoad = strURL + ' #content'; 


			window.location.hash = strURL;		

		    $(ajaxwrapper).fadeOut('fast',loadContent);  
		    $('body').append('<span id="load">LOADING...</span>')
			$('#load').fadeIn('fast');     
			

			function loadContent(){
			
				// AJAX in whole page so we can grab what we need
				$.ajax({
				  url: strURL,
				  dataType: 'html',
				  success: function( data, showNewContent ) {
			    
					// Change page title 
					var matches = data.match(/<title>(.*?)<\/title>/);
				    var spUrlTitle = matches[1];
					document.title = spUrlTitle;
				
				  }
				});
				
				// Inject new page #content into the DOM
				$(ajaxwrapper).load(toLoad,'',showNewContent);
				
			}

			function showNewContent() {
				
				$(ajaxwrapper).fadeIn('normal',hideLoader)
				$(ajaxwrapper + 'img').fadeIn('slow');

				$('img').load(function(){
					$(this).fadeIn('slow');
				});
				
			}

			function hideLoader(){
				$('#load').fadeOut('100');
						$('#load').remove();
			}


		});
		
	},
	
	
/**********************************************************
	Slideshow
**********************************************************/
	
	slideshowControls: function() {
		
		// Backwards navigation
		$("#prev").click(function() {
			stopAnimation();
			objGlobals.navigate("prev");
		});

		// Forward navigation
		$("#next").click(function() {
			stopAnimation();
			objGlobals.navigate("next");
		});

		var interval;
		$("#playpause").toggle(function(){
			stopAnimation();
		}, function() {

			// Show the next image
			objGlobals.navigate("next");

			// Start playing the animation
			interval = setInterval(function() {
				objGlobals.navigate("next");
			}, slideshowSpeed);
		}); 

		var stopAnimation = function() {
			// Change the background image to "play"
			$("#control").css({ "background-image" : "url(images/btn_play.png)" });

			// Clear the interval
			clearInterval(interval);
		};
	},
	
	slideSwitch: function() {	
		animating = true;
	    var $active = $('#slideshow div.active');

	    if ( $active.length == 0 ) $active = $('#slideshow div:last');
			
	    var $next =  $active.next().length ? $active.next()
	        : $('#slideshow div:first');

	    $active.addClass('last-active');

	    $next.css({opacity: 0.0})
	        .addClass('active')
	        .animate({opacity: 1.0}, 800, function() {
	            $active.removeClass('active last-active');
	        });
	},
	
	
	
	navigate: function(direction) {
		photos = $('#slideshow').children('div');
		// Check if no animation is running. If it is, prevent the action
		if(animating) {
			return;
		}
		
		// Check which current image we need to show
		if(direction == "next") {
			currentImg++;
			if(currentImg == photos.length + 1) {
				currentImg = 1;
			}
		} else {
			currentImg--;
			if(currentImg == 0) {
				currentImg = photos.length;
			}
		}
		
		// Check which container we need to use
		// var currentContainer = activeContainer;
		// if(activeContainer == 1) {
		// 	activeContainer = 2;
		// } else {
		// 	activeContainer = 1;
		// }
		
		//showImage(photos[currentImg - 1], currentContainer, activeContainer);
		
	},
	
	
	init_slideshow: function() {
		animating = false;
		currentImg = 0;
		// Start playing the animation
		slideshowSpeed = 2400;
		interval = setInterval(function() {
			objGlobals.navigate("next");
		}, slideshowSpeed);
		
    	// setInterval( objGlobals.slideSwitch, 2400 );
	}
}

	/**
	 * Document Ready Event. Don't stuff JS here. Put it
	 * where it belongs!
	 */
	$(function() { objGlobals.init(); });