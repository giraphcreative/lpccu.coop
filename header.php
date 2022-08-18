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
<link href="<?php bloginfo( "template_url" ) ?>/css/main.css?v=14" rel="stylesheet" type="text/css">

</head>
<body <?php body_class(); ?>>

<div class="app-bar ios">
	Get our mobile banking app! <a href="https://itunes.apple.com/us/app/lincoln-park-community-cu/id1148730451?mt=8" class="install">Install &raquo;</a> <a class='close'>X</a>
</div>

<div class="app-bar android">
	Get our mobile banking app! <a href="https://play.google.com/store/apps/details?id=com.lincolnparkccu.mobile" class="install">Install &raquo;</a> <a class='close'>X</a>
</div>

<?php the_emergency_bar(); ?>

<div class="lightbox-banking hide">
	<div class="question">
		<h4><span class="new">Have you logged into the new Online Banking yet?</span></h4>
		<p><strong>Have you logged into Online Banking since the Online Banking update on 8/18?</strong> If you haven't yet, we'll provide you some information that will help you get in for the first time.</p>
		<p><a href="https://lpccu-dn.financial-net.com/web/" class="btn teal">Yes, I Have</a> <a href="#" class="btn navy instructions-show">No, I Haven't</a></p>
	</div>
	<div class="instructions hidden">
		<h4><span class="new">New Online Banking Platform</span></h4>
		<p>Upon your first login, you'll be prompted to update your Login ID and Security Code (password).</strong> Here's how to gain access to your account:</p>
		<div class="columns">
			<div class="column">
				<h5>Login ID</h5>
				<p>Your Login ID will be the same as your previous Login ID which is usually your <strong>5-digit account number</strong> with a <strong>leading 0</strong>. For example:</p>
				<p><span class="old"><strong>Old:</strong> 12345</span><br>
				<span class="new"><strong>New:</strong> 012345</span></p>
			</div>
			<div class="column">
				<h5>Security Code (Password)</h5>
				<p>Your new security code will be the word <strong>'security'</strong> in all lowercase + the <strong>last 4</strong> of the primary member’s Social Security Number.</p>
				<p>If the last four of your SSN is 1234, then your default passcode is <span class="new">security1234</span>.</p>
			</div>
		</div>
		<p><a href="https://lpccu-dn.financial-net.com/web/" class="btn teal">Continue to Home Banking</a></p>
		<p class="quiet">Questions about the change? <a href="/about/contact/">Contact us today</a> for additional information.</p>
	</div>
</div>

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
			<a href="https://www.netbranch.app.fiserv.com/lpccu/" class="banking">Home Banking</a>
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
