<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage Twenty_Twelve
 * @since Twenty Twelve 1.0
 */
?>	
	
	</section>
	
	<footer class="footer">
		<div class="column first">
			<h5>Lincoln Park Community Credit Union</h5>
			<p>1400 Emmons<br>
			Lincoln Park, MI  48146<br>
			Phone: 313.389.2300<br>
			Routing Number: 272482375<br>
			Lost/Stolen VISA Credit:<br>
			800.237.6211 / 866.604.0381<br>
			Lost/Stolen Debit Mastercard:<br>
			800.544.8969</p>
		</div>
		<div class="column">
			<h5>Loans</h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-one', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
		<div class="column small">
			<h5>Accounts</h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-two', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
		<div class="column">
			<h5>Services</h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-three', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
		<div class="column small">
			<h5>Resources</h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-four', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
		<div class="column last">
			<h5>Our Story</h5>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-five', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
	</footer><!-- #colophon -->

	<div class="colophon">
		<div class="column">
			<img src="<?php bloginfo( 'template_url' ); ?>/img/logo-ncua.png" class="alignright">Your savings are federally insured to at least $250,000, and backed by the full faith and credit of the United States Government. 
		</div>
		<div class="column">
			<img src="<?php bloginfo( 'template_url' ); ?>/img/logo-equal-housing.png" class="alignright">Equal Housing Lender - We do business in accordance with the Federal Fair Housing Law and the Equal Housing Opportunity Act. 
		</div>
		<div class="column links">
			<a href="#" class="alignright"><img src="<?php bloginfo( 'template_url' ); ?>/img/logo-shared.png" class="alignright"></a>
			<a href="#" class="alignright"><img src="<?php bloginfo( 'template_url' ); ?>/img/social-facebook.png" class="alignright"></a>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-notices', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
	</div>

</div><!-- #container -->

<?php wp_footer(); ?>
</body>
</html>