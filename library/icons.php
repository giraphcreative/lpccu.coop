<?php


// ad showcase
function the_icon_showcase() {

	// get the icons
	$icons = get_cmb_value( 'icon_showcase' );

	// if it's an array
	if ( is_array( $icons ) ) {

		if ( !empty( $icons[0]['link'] ) && !empty( $icons[0]['image'] ) && !empty( $icons[0]['title'] ) ) {

		// if it's an array, we'll assume it's got content
		?>
		<div class="icons">
			<?php
			foreach ( $icons as $icon ) {
				$color = ( !empty( $icon['color'] ) ? $icon['color'] : 'blue' );
				if ( !empty( $icon['link'] ) && !empty( $icon['image'] ) && !empty( $icon['title'] ) ) { 
					?>
			<a href="<?php print $icon['link']; ?>">
				<div class="icon ">
					<div class="icon-image <?php print $color ?>"><img src="<?php print $icon['image']; ?>" alt="<?php print ( !empty( $icon['alt-text'] ) ? $icon['alt-text'] : $icon['title'] ); ?>"></div>
					<h5 class="<?php print $color; ?>"><?php print $icon['title']; ?></h5>
				</div>
			</a>
					<?php 
				} 
			}
			?>
		</div>
		<?php
		}
	}
}


?>