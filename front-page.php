<?php

get_header();

?>

<div id="homeContainer">
            <div id="nameSvg"><?php the_field( "svg_name" ) ?></div>
            <p>Aivars</p>
            <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_vAtD7F.json" background="transparent"
                speed="1" loop autoplay>
            </lottie-player>
            <div id="skills">
                <p><?php the_field( "skill1" ) ?></p>
                <p><?php the_field( "skill2" ) ?></p>
                <p><?php the_field( "skill3" ) ?></p>
                <p><?php the_field( "skill4" ) ?></p>
            </div>

            <div id="skillsUno">
                <p><?php the_field( "skill1" ) ?></p>
                <p><?php the_field( "skill2" ) ?></p>
            </div>

            <div id="skillsDos">
                <p><?php the_field( "skill3" ) ?></p>
                <p><?php the_field( "skill4" ) ?></p>
            </div>



        </div>



<?php 

get_footer();

?>

