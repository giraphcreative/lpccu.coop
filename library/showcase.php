<?php


function the_showcase() {

	// get the slides
	$slides = get_post_meta( get_the_ID(), CMB_PREFIX . "showcase", 1 );

	if ( !empty( $slides ) ) {
		?>
		<div class="showcase">
		<?php
		$count = 0;
		foreach ( $slides as $key => $slide ) {
			if ( !empty( $slide["image"] ) ) {

				// store the title and subtitle
				$title = ( isset( $slide["title"] ) ? $slide["title"] : '' );
				$subtitle = ( isset( $slide["subtitle"] ) ? $slide["subtitle"] : '' );
				$link = ( isset( $slide["link"] ) ? $slide["link"] : '' );

				// check if it's an image or video
				if ( p_is_image( $slide["image"] ) ) {
					// it's an image, so resize it and generate an img tag.
					$image = '<img src="' . $slide["image"] . '">';
				} else {
					// it's a video, so oEmbed that stuffs, yo
					$image = apply_filter( 'the_content', $slide["image"] );
				}

				?>
			<div class="slide<?php print ( $key == 0 ? ' visible' : '' ); ?>">
				<?php if ( !empty( $link ) ) { ?><a href="<?php print $link ?>" class="<?php print ( stristr( $link, 'vimeo' ) || stristr( $link, 'youtube' ) || stristr( $link, 'google.com/maps' ) ? 'lightbox-iframe' : '' ) ?>"><?php } ?>
				<?php print $image; ?>
				<?php if ( !empty( $link ) ) { ?></a><?php } ?>
				
				<?php if ( !empty( $title ) || !empty( $subtitle ) ) { ?>
				<div class="slide-content">
					<?php if ( !empty( $title ) ) { ?><h1><?php print $title; ?></h1><?php } ?>
					<?php if ( !empty( $subtitle ) ) { ?><h2><?php print $subtitle; ?></h2><?php } ?>
				</div>
				<?php } ?>
			</div>
				<?php
				$count++;
			}
		}

		if ( $count > 1 ) { 
			?>
			<div class="showcase-nav">
				<a class="previous">Previous</a>
				<a class="next">Next</a>
			</div>
			<?php
		}
		?>
		</div>
		<?php
	}
}




// ad showcase
function the_icon_showcase() {

	$icons = get_cmb_value( 'icon_showcase' );

	if ( !empty( $icons[0]['link'] ) && !empty( $icons[0]['image'] ) && !empty( $icons[0]['title'] ) ) { ?>
	<div class="column">
		<a href="<?php print $icons[0]['link']; ?>">
			<img src="<?php print $icons[0]['image']; ?>">
			<h5><?php print $icons[0]['title']; ?></h5>
		</a>
	</div>
	<?php } 

	if ( !empty( $icons[1]['link'] ) && !empty( $icons[1]['image'] ) && !empty( $icons[1]['title'] ) ) { ?>
	<div class="column">
		<a href="<?php print $icons[1]['link']; ?>">
			<img src="<?php print $icons[1]['image']; ?>">
			<h5><?php print $icons[1]['title']; ?></h5>
		</a>
	</div>
	<?php } 

	if ( !empty( $icons[2]['link'] ) && !empty( $icons[2]['image'] ) && !empty( $icons[2]['title'] ) ) { ?>
	<div class="column">
		<a href="<?php print $icons[2]['link']; ?>">
			<img src="<?php print $icons[2]['image']; ?>">
			<h5><?php print $icons[2]['title']; ?></h5>
		</a>
	</div>
	<?php } 

	if ( !empty( $icons[3]['link'] ) && !empty( $icons[3]['image'] ) && !empty( $icons[3]['title'] ) ) { ?>
	<div class="column">
		<a href="<?php print $icons[3]['link']; ?>">
			<img src="<?php print $icons[3]['image']; ?>">
			<h5><?php print $icons[3]['title']; ?></h5>
		</a>
	</div>
	<?php } 

}



?>