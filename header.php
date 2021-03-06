<!DOCTYPE html>
<!--[if IE 7]><html class="ie ie7" <?php language_attributes(); ?>><![endif]-->
<!--[if IE 8]><html class="ie ie8" <?php language_attributes(); ?>><![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!--><html <?php language_attributes(); ?>><!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width,initial-scale=1" />

<title><?php wp_title( '|', true, 'right' ); ?> Lincoln Park Community CU</title>

<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->

<?php wp_head(); ?>
<link href="<?php bloginfo( "template_url" ) ?>/css/main.css?v=11" rel="stylesheet" type="text/css">

</head>
<body <?php body_class(); ?>>

<div class="app-bar ios">
	Get our mobile banking app! <a href="https://itunes.apple.com/us/app/lincoln-park-community-cu/id1148730451?mt=8" class="install">Install &raquo;</a> <a class='close'>X</a>
</div>

<div class="app-bar android">
	Get our mobile banking app! <a href="https://play.google.com/store/apps/details?id=com.lincolnparkccu.mobile" class="install">Install &raquo;</a> <a class='close'>X</a>
</div>

<?php the_emergency_bar(); ?>

<div class="container">

<header>

	<div class="wrap">
	
		<div class="logo">
			<a href="/" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">
				<img src="<?php bloginfo( "template_url" ) ?>/img/logo.png" alt="<?php bloginfo( 'name' ); ?>">
			</a>
		</div>
		
		<div class="search">
			<?php get_search_form(); ?>
		</div>
		
		<div class='tools'>
			<a href="https://www.netbranch.app.fiserv.com/lpccu/" class="banking bypass">Home Banking</a>
			<a href="/about/contact/" class="contact">Contact Us</a>
		</div>

	</div>

	<nav role="navigation">
		<button class="menu-toggle"><i class="fa fa-bars">Show/hide Menu</i></button>
		<?php wp_nav_menu( array( 'theme_location' => 'main-menu', 'menu_class' => 'nav-menu' ) ); ?>
	</nav>
	
</header>

<section class="content">
	<a name="content"></a>
