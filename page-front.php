<?php

/*
Template Name: Front Page
*/

get_header();

?>

	<?php the_showcase(); ?>
	
	<div class="content-wide" role="main">
		<?php 
		
		if ( have_posts() ) :
			while ( have_posts() ) : the_post(); 
				if ( get_cmb_value( 'layout-title-hide' ) != 'on' ) {
					?>
			<h1 class="post-title"><?php the_title(); ?></h1>
					<?php
				}
				the_content();
			endwhile;
		endif;
		
		the_icon_showcase();

		?>
	</div><!-- #content -->

	<div class="blog-listing">
		<h2 class="blog-title">Our Blog</h2>
		<div class="blog-listing-inner">
			<?php
			$args = array(
				'post_type' => array( 'post' ),
				'posts_per_page' => 3
			);

			// The Query
			$the_query = new WP_Query( $args );
			 
			// The Loop
			if ( $the_query->have_posts() ) { 
		    	$count = 1;
			    while ( $the_query->have_posts() ) {
			    	if ( $count < 4 ) {
			    	?>
		    <div class="entry">
			    <?php $the_query->the_post(); ?>
			    <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
			    <h4><a href="<?php the_permalink(); ?>"><?php print get_the_title(); ?></a></h4>
			    <?php the_excerpt(); ?>
			</div>
			    	<?php
			    	}
			    	$count++;
				}
		    }
			/* Restore original Post Data */
			wp_reset_postdata();
			?>
		</div>
		<div class="blog-read-more"><a href="/resources/blog" class="btn">Read More Blog Posts</a></div>
	</div>

	<?php the_boxes(); ?>

	<?php the_footer_image(); ?>

<?php

get_footer();

?>