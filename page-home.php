<?php

get_header();

while(have_posts()){
    the_post(); ?>

<div id="homeContainer">
            <div id="nameSvg"></div>
            <p>Aivars</p>
            <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_vAtD7F.json" background="transparent"
                speed="1" loop autoplay>
            </lottie-player>
            <div id="skills">
                <p><?php $value = get_field( "skill1" ) ?></p>
                <p>.coding</p>
                <p>.animation</p>
                <p>.video</p>
            </div>

            <div id="skillsUno">
                <p><?php $value = get_field( "skill1" ) ?></p>
                <p>.coding</p>
            </div>

            <div id="skillsDos">
                <p>.animation</p>
                <p>.video</p>
            </div>



        </div>



<?php }

get_footer();

?>

