

// onload responsive footer and menu stuff
jQuery(document).ready(function($){

	if ( $( 'html' ).hasClass( 'ios' ) && !Cookies.get( 'hide-app-bar' ) ) {
		$( '.app-bar.ios' ).show();
	}

	if ( $( 'html' ).hasClass( 'android' ) && !Cookies.get( 'hide-app-bar' ) ) {
		$( '.app-bar.android' ).show();
	}

	$( '.app-bar .close' ).on( 'click', function(){
		$( this ).parent( '.app-bar' ).hide();
		Cookies.set('hide-app-bar', 'true', { expires: 14 });
	});

});

