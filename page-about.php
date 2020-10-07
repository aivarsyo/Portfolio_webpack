<?php

get_header();

?>

<div id="aboutContainer">

<svg preserveAspectRatio="xMidYMid slice">
    <image class="image_of_myself_2" href="<?php the_field( "image_of_myself_2" ) ?>" x="-100%" />
    <image class="image_of_myself_3" href="<?php the_field( "image_of_myself_3" ) ?>" y="-100%" />
    <image class="image_of_myself" href="<?php the_field( "image_of_myself" ) ?>"  />
</svg>


            <!-- <img src="<?php the_field( "image_of_myself" ) ?>" alt=""> -->

            <div id="aboutText">
                <p><?php the_field( "about_1" ) ?></p>
                <p><?php the_field( "about_2" ) ?></p>
                <p><?php the_field( "about_3" ) ?></p>
            </div>
            <div id="inTouch">
                <a href="mailto:<?php the_field( "mail" ) ?>">aivars.lejnieks@gmail.com</a>
                <a href="<?php the_field( "linkedin" ) ?>" target="_blank">linkedin</a>
                <a href="<?php the_field( "cv" ) ?>" target="_blank">CV</a>
            </div>

        </div>

<?php 

get_footer();

?>