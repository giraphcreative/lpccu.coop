

// onload responsive footer and menu stuff
jQuery(document).ready(function($){

	// select some things we'll use to make things responsive
	var menu = $( 'header nav' ),
		menu_toggle = menu.find( 'button.menu-toggle' ),
		menu_ul = menu.find( '.nav-menu' ),
		fluid_images = $( '.content img' );


	// remove height and width from images inside
	fluid_images.removeAttr( 'width' ).removeAttr( 'height' );


	// show/hide menus when they click the toggler
	menu_toggle.click(function(){

		if ( menu_ul.is( ':visible' ) ) {
			menu_ul.hide();
		} else {
			menu_ul.show();
		}

		// when user clicks a link, open submenu if it exists.
		menu_ul.find( 'a' ).click(function(){
			var parent_li = $( this ).parent( 'li' );
			var submenu = $( this ).next( 'ul' );
			if ( !submenu.is( ':visible' ) && parent_li.hasClass( 'menu-item-has-children' ) ) {
				event.preventDefault();
				parent_li.addClass( 'open' );
				submenu.show();
			}
		});

	});

	// 
	$( '.accordion-box-title' ).click(function(){
		$( this ).parent( '.accordion-box' ).children( '.accordion-box-content' ).slideToggle( 600 );
	});

	$( 'button[data-url]' ).click(function(){
		window.location.href = $( this ).attr( 'data-url' );
	});

	$( '.content a:not(.previous):not(.next):not(.lightbox-iframe), a.off-site' ).click(function( e ){
		
		// break the normal linking behavior
		e.preventDefault();

		// get the link
		var the_link = $( this );
		var the_link_href = the_link.attr( 'href' );

		// prompt the user and if they confirm the prompt, proceed to the third party site.
		if ( the_link.hasClass( 'bypass' ) ||
			the_link_href.match( /lpccu.test/i ) || 
			the_link_href.match( /lpccu.coop/i ) || 
			the_link_href.match( /lp.giraph.io/i ) || 
			the_link_href.match( /www.netbranch.app.fiserv.com/i ) || 
			the_link_href.charAt(0) === '#' || 
			the_link_href.charAt(0) === '/' ) {
			location.href = the_link_href;
		} else {
			if ( confirm( "This link is taking you to a third party provider - are you sure you want to proceed?" ) ) {
				window.open( the_link_href, "_blank" );
			}
		}

	});

	$( '.lightbox-iframe' ).magnificPopup({ 'type': 'iframe' });




	$( '.lightbox-banking-open' ).click(function(){
        $.magnificPopup.open({
            items: {
                src: '.lightbox-banking'
            },
            type: 'inline'
        });
	});
	
	$( '.instructions-show' ).on( 'click', function(){
		$( '.lightbox-banking .question' ).hide();
		$( '.lightbox-banking .instructions' ).show();
	});


});


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-97184804-1', 'auto');
ga('send', 'pageview');

