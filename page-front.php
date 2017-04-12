<?php

/*
Template Name: Page - Home
*/

get_header();

?>

	<?php the_showcase(); ?>

	<div class="home-icons group">
		<?php the_icon_showcase(); ?>
	</div>

	<div class="home-footer">
		<img src="<?php bloginfo( 'template_url' ) ?>/img/home-footer.jpg">
	</div>

<?php 

get_footer();

?>