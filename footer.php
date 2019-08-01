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
			<h5>Lincoln Park Community CU</h5>
			<p>1400 Emmons, Lincoln Park, MI 48146<br>
				Phone 313.389.2300 - Routing # 272482375<br>
				Lost/Stolen VISA Credit:<br>
				800.237.6211 / 866.604.0381<br>
				Lost/Stolen/Dispute Debit MasterCard:<br>
				833.305.9994 / 833.305.9996<br>
				Debit MasterCard activation/PIN reset<br>
				800.992.3808</p>
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
			<a href="/ncua-insurance-information/" target="_blank"><img src="<?php bloginfo( 'template_url' ); ?>/img/logo-ncua.png" class="alignright" alt="Insured by the NCUA"></a>Your savings are federally insured to at least $250,000, and backed by the full faith and credit of the United States Government. 
		</div>
		<div class="column">
			<img src="<?php bloginfo( 'template_url' ); ?>/img/logo-equal-housing.png" class="alignright" alt="Equal Housing Lender Logo">Equal Housing Lender - We do business in accordance with the Federal Fair Housing Law and the Equal Housing Opportunity Act. 
		</div>
		<div class="column links">
			<a href="https://co-opcreditunions.org/locator/" class="alignright off-site"><img src="<?php bloginfo( 'template_url' ); ?>/img/logo-shared.png" class="alignright" alt="COOP Credit Union Locator"></a>
			<a href="https://www.facebook.com/LincolnParkCommunityCU/" class="alignright off-site"><img src="<?php bloginfo( 'template_url' ); ?>/img/social-facebook.png" class="alignright" alt="Visit us on Facebook."></a>
			<?php wp_nav_menu( array( 'theme_location' => 'footer-notices', 'menu_class' => 'nav-menu' ) ); ?>
		</div>
		<div class="ada-disclaimer">
			Lincoln Park Community Credit Union is committed to providing a website that is accessible to the widest possible audience in accordance with ADA standards and guidelines. We are actively working to increase the accessibility and usability of our website to all people. If you are using a screen reader or other auxiliary aid and are having problems using this website, please contact us at 313.389.2300 for assistance. All products and services available on this website are available at our office as well. 
		</div>
	</div>

</div><!-- #container -->

<?php wp_footer(); ?>
</body>
</html>