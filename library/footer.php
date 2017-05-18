<?php


function the_footer_image() {
	?>
		<div class="footer-image">
			<?php if ( has_cmb_value( 'footer-image-link' ) ) { print '<a href="' . get_cmb_value( 'footer-image-link' ) . '">'; } ?>
			<img src="<?php show_cmb_value( 'footer-image' ); ?>" />
			<?php if ( has_cmb_value( 'footer-image-link' ) ) { print '</a>'; } ?>
		</div>
	<?php
}


?>