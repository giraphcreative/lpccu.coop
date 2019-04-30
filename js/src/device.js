

// onload user agent sniffing for app links.
jQuery(document).ready(function($){

	// if we're on iOS, and the app bar isn't hidden (cookie check)
	if ( $( 'html' ).hasClass( 'ios' ) && !Cookies.get( 'hide-app-bar' ) ) {
		
		// show the ios app bar
		$( '.app-bar.ios' ).show();
	}

	// if we're on Android, and the app bar isn't hidden (cookie check)
	if ( $( 'html' ).hasClass( 'android' ) && !Cookies.get( 'hide-app-bar' ) ) {

		// show the android app bar.
		$( '.app-bar.android' ).show();
	}

	// when someone clicks the close 'X' on the app bar
	$( '.app-bar .close' ).on( 'click', function(){

		// hide the bar itself.
		$( this ).parent( '.app-bar' ).hide();

		// set a cookie to prevent it from showing for 14 days
		Cookies.set('hide-app-bar', 'true', { expires: 14 });

	});

});

