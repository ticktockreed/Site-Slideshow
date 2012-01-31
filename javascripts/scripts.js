/*
* AJAX Pageload
* Copyright 2012, Tim Reed             
* http://www.opensource.org/licenses/mit-license.php
* 8/17/2011
*/

$(document).ready(function() {
	
	if (window.location.hash.length > 5) {
		$(window).hashchange();
	}

	// TO DO: 
	// Add jQuery Cycle Plugin to move through images.
	// Fix Hash change events to work on sub pages of site
	// Animate menu with jQuery
	// Add plus sign and hide product copy on pages



	/* Load some AJAX
	================================================== */

	var ajaxpage = $('a');
	
	
	$('.images img').fadeIn('slow');
	
	
	ajaxpage.click(function(event){            
	   event.preventDefault();            
		var strURL = $(this).attr('href')
		var toLoad = strURL + ' #content'; 
		
		//Not sure what this does!
		console.log(window.location.pathname);
		if (window.location.pathname.length > 1) {
			window.location.href = "/";
			return;
		}
		  
		window.location.hash = strURL;	    		

	    $('#content').fadeOut('fast',loadContent);  
	    $('body').append('<span id="load">LOADING...</span>')
		$('#load').fadeIn('fast');     


		function loadContent(){
			$("#content").load(toLoad,'',showNewContent);
		}	
		
		function showNewContent() {
			
			
			
			$('#content').waitForImages(function() {
				$('#content').fadeIn('normal',hideLoader)
				$('#content img').fadeIn('slow');
			});
			
			
			// $('img').load(function(){
			// 					$(this).fadeIn('slow');
			// 				});
		}
		
		function hideLoader(){
			// $('#load').fadeOut('100');
			// 		$('#load').remove();
		}
		
		
	});
	

});