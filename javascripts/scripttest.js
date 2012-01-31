
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
		
		CSS_AJAX_CONTENT_WRAP: "#content",
		CSS_TOP_NAVIGATION_WRAP: "#top-navigation-wrap",
		CSS_FAVORITE_MIX_BUTTON: "#favorite-mix-button",
		CSS_COMMENT_FORM: "#comment-form",
		CSS_SIDEBAR_AD_WRAP: "#sidebar-ad-wrap",
		CSS_FOOTER_AD_WRAP: "#footer-ad-wrap",
		CSS_AJAX_LOADER_WRAP: "#loader-wrap",
		CSS_UPLOAD_BUTTON_PLACEHOLDER: ".upload-button-placeholder",
		CSS_AD_REFRESH_TRIGGER: ".refresh-ad",
		
		REQUEST_STATUS_OK: "ok",
		REQUEST_STATUS_ERROR: "error",
		REQUEST_STATUS_UNAUTHENTICATED: "unathenticated",

		HASH_NOT_LOGGED_IN: "/mixes/preview",
		
		AUTHENTIC_JOBS_API_URL: "http://www.authenticjobs.com/js/jobs_r_single_v2.js",
		ADVERTISEMENT_LAST_REFRESH: null,
		ADVERTISEMENT_REFRESH_FREQUENCY: 15,
		
		WINDOW_HAS_FOCUS: true
		
	},
	
	/**
	 * Init method. Fires off all other inits. Should be called
	 * only once on the first page load when the user arrives at the site.
	 */
	init: function() {
		
		// Interior page? No, no
		// if (window.location.pathname.length > 1) {
		// 	window.location.href = "/";
		// 	return;
		// }
		
		objGlobals.init_ajax_site();
		objGlobals.init_hash_change_hook();
		
		// Check for initial hash
		if (window.location.hash.length > 5) {
			$(window).hashchange();
		}
		
		//$(".album-list img").lazyload();
		
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
				//_gaq.push(['_trackPageview', window.location.hash.substr(1)]);
				objGlobals._fetch_page_via_ajax(window.location.hash);
			});
			
		}
		
	},
	
	/**
	 * Since the site should be completely AJAX, we need to hook all
	 * non-external links and forms and pass their processing through
	 * our AJAX-driven routines. You have the option of disabling AJAX
	 * processing on a given element by giving it a class of "manual-ajax".
	 * The main use case of disabling AJAX would be like the Twitter login
	 * link that cannot be processed via AJAX. 
	 */
	init_ajax_site: function() {
		
		// AJAX Error Handler
		$(document).ajaxError(function(objEvent, objXHR, objSettings, objError) {
			
			alert("Sorry, an error occurred. Please try your request again later.");
			
		});
		
		// AJAX Links
		$("a:not(.manual-ajax)").live("click", function() {
			
			var $link = $(this);
			var strURL = $link.attr("href");
			
			// If link is external or an named-anchor, let it go
			if (strURL.substr(0, 4) == 'http' || strURL.substr(0, 1) == "#") {
				return;
			}
			
			// the jQuery hashchange() event will
			// actually load the page. So trigger it now.
			window.location.hash = strURL;			
			
			// Cancel the normal link behavior
			return false;
			
		});
		
		// Non-AJAX Links
		$("a.manual-ajax").live("click", function() {
			
			// Cancel the hashchange event in case this link really needs to
			// take the user to an anchor
			
			objGlobals.init_hash_change_hook(true);
			
			// Set a timeout to re-enable the hash change hook
			setTimeout(function() {
				objGlobals.init_hash_change_hook();
			}, 1000);
			
		});
		
		// Forms
		$("form:not(.manual-ajax)").live("submit", function() {
			
			var $form = $(this);
			
			// If the form posts externally, let it go
			if ($form.attr("action").substr(0, 4) == "http") {
				return;
			}
			
			objGlobals._submit_form_via_ajax($form);
			
			return false;
			
		});
		
	},
	
	/**
	 * Will manually register an event hit with Google Analytics.
	 * strEvent: The "category" (eg SocialLinks)
	 * strParam: The "label" (eg SiteName)
	 * strValue: The "value" (eg Facebook)
	 * See: https://www.google.com/analytics/reporting/events?id=1163291&pdr=20110702-20110801&cmp=average#lts=1312312718287
	 */
	register_analytics_event: function(strEvent, strParam, strValue) {
		
		try {
			
			//	_gaq.push(['_trackEvent', strEvent, strParam, strValue]);
			
		} catch(err) { }
		
	},
	
	/**
	 * Forces a hard redirect to the login controller, which fires the user off to
	 * Twitter to finish their oAuth login.
	 */
	redirect_to_login: function() {
		
		window.location.hash = objGlobals.CONSTANTS.HASH_NOT_LOGGED_IN;
		
	},
	
	/**
	 * Conveinence method for retreating one step in the history.
	 */
	go_back: function() {
		
		// Causing redirect loops in some browsers
		// history.go(-1);
		
		window.location.href = "/";
		
	},
	
	/**
	 * Helper method to change the UI to a loading... state
	 */
	show_loading: function(boolShow) {
		
		if (boolShow) {
			
			$(objGlobals.CONSTANTS.CSS_AJAX_CONTENT_WRAP)
				.stop(false, true)
				.animate({opacity: 0});
			$(objGlobals.CONSTANTS.CSS_AJAX_LOADER_WRAP)
				.stop(false, true)
				.fadeIn("slow");
			
		} else {
			
			$(objGlobals.CONSTANTS.CSS_AJAX_LOADER_WRAP)
				.stop(false, true)
				.hide();
			$(objGlobals.CONSTANTS.CSS_AJAX_CONTENT_WRAP)
				.stop(false, true)
				.animate({opacity: 1});
			
		}
		
	},
	
	/**
	 * This method is our main utility method for loading a link in via AJAX. You
	 * have the option of specifying a success callback.
	 */
	_fetch_page_via_ajax: function(strURL, funcCallback) {
		
		if (strURL.substr(0, 1) == "#" && strURL.length > 1) {
			strURL = strURL.substr(1);
		}
		
		if (strURL == "") {
			strURL = "/";
		}
		
		if (strURL) {
			
			objGlobals.show_loading(true);
			
			$.ajax({
				url: strURL,
				data: null,
				dataType: "json",
				
				success: function(objData, strStatus, objXHR) {
					
					objGlobals._insert_new_page_content(objData, strStatus, objXHR);

					if (typeof funcCallback == "function") {
						funcCallback.apply(this, [objData, strStatus, objXHR]);
					}

					objGlobals.show_loading(false);
					
				}
				
				
			});
			
		}
		
	},
	
	/**
	 * Main utility method for inserting fetched content into the DOM. All of our communications
	 * from the back-end are made via JSON. So, we have a set format for the response. The documentation
	 * for this response can be found in the base PHP controller class.
	 */
	_insert_new_page_content: function(objData, strStatus, objXHR) {
		
		if (typeof objData != 'object') {
			alert('An unknown error occurred. Please try again later.');
			objGlobals.go_back();
			return;
		}
		
		if (objData.meta.notice) {
			
			alert(objData.meta.notice);
			
		}
		
		if (objData.meta.redirect) {
			
			window.location.hash = objData.meta.redirect;
			return;
			
		}
		
		switch(objData.meta.request_status) {
			
			case objGlobals.CONSTANTS.REQUEST_STATUS_OK:
			
				// Update page title
				if (objData.meta.title) {
					document.title = objData.meta.title;
				}
				
				// Reset scroll position
				if($.browser.safari)
					$("body").animate({scrollTop: 0})
				else
					$("html,body").animate({scrollTop: 0});
				
				// Body Class
				if (typeof objData.meta.body_class != "undefined") {
					$("body").attr("class", objData.meta.body_class);
				}
				
				// Top Navigation
				if (objData.sections.top_navigation) {
					var $currentTopNav = $(objGlobals.CONSTANTS.CSS_TOP_NAVIGATION_WRAP);
					var $newTopNav = $(objData.sections.top_navigation);
					if ($currentTopNav.length && $currentTopNav.html().length != $newTopNav.html().length) {
						$currentTopNav.html($newTopNav);
					}
				}
				
				// Update the page content
				if (objData.sections.content) {
					
					$(objGlobals.CONSTANTS.CSS_AJAX_CONTENT_WRAP).html(objData.sections.content);
					
					//////
					// Perform any actions that must happen on every page load
					//////
					
					// Hook file uploads
					objGlobals.init_ajax_file_uploads();

					// Update playlist item active states
					objPlayer.sync_active_playlist_item();
					
					// Lazy load images
					$(".album-list img").lazyload({});
					
				}
				
				// If the mix detail, reload the ad
				if (window.location.hash.search("listen") != -1) {

					objGlobals.init_authentic_jobs();
					
					$("#bottom-callouts")
						.hide()
						.prev()
						.hide();
				} else {
					
					$("#bottom-callouts")
						.show()
						.prev()
						.show();
				}
				
				break;
				
			// An error occurred. Should include error message.
			case objGlobals.CONSTANTS.REQUEST_STATUS_ERROR:
			
				if (!objData.meta.notice) {
					alert("An error occurred and an error message was not supplied.");
				}
			
				break;
			
			// Unauthorized. Users's session timed out.
			case objGlobals.CONSTANTS.REQUEST_STATUS_UNAUTHENTICATED:
			
				objGlobals.redirect_to_login();
				return;
			
				break;
			
			default:
				
				alert("Sorry, an error occurred. We've been alerted are working hard to get it fixed.");
				
				break;
			
		}
		
	}


}


	/**
	 * Document Ready Event. Don't stuff JS here. Put it
	 * where it belongs!
	 */
	$(function() { objGlobals.init(); });