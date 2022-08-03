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
<link href="<?php bloginfo( "template_url" ) ?>/css/main.css?v=12" rel="stylesheet" type="text/css">

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
	<h4>Important Info: <span class="new">New Online Banking Platform</span></h4>
	<p>Online banking will have a new and refreshed look on August 18, 2022. This will be a significant change to the current interface that you've experienced before. It increases your security and provides an improved interface with our Mobiliti apps. <strong>When the new online banking launches, you'll be prompted to update your Login ID and Security Code (password).</strong></p>
	<div class="columns">
		<div class="column">
			<h5>Login ID</h5>
			<p>Your Login ID will be the same as your previous Login ID which is usually your 5-digit account number with a leading 0. For example:</p>
			<p><span class="old"><strong>Old:</strong> 12345</span><br>
			<span class="new"><strong>New:</strong> 012345</span></p>
		</div>
		<div class="column">
			<h5>Security Code (Password)</h5>
			<p>Your new security code will be the word security in all lowercase + the last 4 of the primary member’s Social Security Number.</p>
			<p>If the last four of your SSN is 1234, then your default passcode is <span class="new">security1234</span>.</p>
		</div>
	</div>
	<h5>What's different?</h5>
	<ul>
		<li>Scheduled Transfers will need to be set up again.</li>
		<li>Shared Accounts are no longer available.</li>
		<li>You will have access to any account you are joint on.</li>
		<li>Representatives can assist you with relationship accounts for other member-to-member transfers.</li>
		<li>You'll need to re-enroll in Credit Sense if you use it to check your credit score/receive tailored offers.</li>
	</ul>
	<p><a href="https://www.netbranch.app.fiserv.com/lpccu/" class="btn teal">Continue to Home Banking</a></p>
	<p class="quiet">Questions about the change? <a href="/about/contact/">Contact us today</a> for additional information.</p>
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
			<a href="#" class="lightbox-banking-open banking">Home Banking</a>
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
