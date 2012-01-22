/*
* AJAX Pageload
* Copyright 2012, Tim Reed             
* http://www.opensource.org/licenses/mit-license.php
* 8/17/2011
*/


$(document).ready(function() {

	/* Load some AJAX
	================================================== */

	var ajaxpage = $('#nav ul li a');
	
	ajaxpage.click(function(event){            
	   event.preventDefault();            
	
		var toLoad = $(this).attr('href');
        
		console.log(toLoad);                                          		

	    $('#content').fadeOut('fast',loadContent);  
	    $('#wrapper').append('<span id="load">LOADING...</span>');     
	    $('#load').fadeIn('slow');  




		function loadContent(){
			$('#content').load(toLoad,'',showNewContent)
		}


		
		function showNewContent(){
			$('#content').fadeIn('normal',hideLoader)
		}
		
		function hideLoader(){
			$('#load').fadeOut('normal')
		}
		
	});
	
	

});