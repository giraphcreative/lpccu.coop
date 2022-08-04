<?php
/*
Home/catch-all template
*/

function wpdocs_custom_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'wpdocs_custom_excerpt_length', 999 );

get_header(); ?>


	<div class="content-wide blog" role="main">

		<?php
		if ( is_search() ) {
			?><h1 class="post-title">Search Results for <span>'<?php print htmlspecialchars( strip_tags( $_REQUEST["s"] ) ); ?>'</span></h1><?php
		} else {
			?><h1 class="post-title">LPCCU Blog</h1><?php
		}
		?>
		<div class="blog-listing">
			<div class="blog-listing-inner">
		<?php
		if ( have_posts() ) : 

			// Start the Loop.
			while ( have_posts() ) : the_post(); 
				?>
				<div class="entry">
				    <h4><a href="<?php the_permalink(); ?>"><?php print get_the_title(); ?></a></h4>
				    <?php the_excerpt( 50 ); ?>
				</div>
				<?php
			endwhile;

		else :

			print "<p>There are currently no posts to list here.</p>";

		endif;
		?>
			</div>
		</div>
		
		<?php pagination(); ?>

	</div><!-- #primary -->


<?php get_footer(); ?>