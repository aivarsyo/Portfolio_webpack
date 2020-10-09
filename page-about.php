<?php

get_header();

?>

<div id="aboutContainer">

<div class="imageHolder">

<img class="image_of_myself" src="<?php the_field( "image_of_myself" ) ?>"  />
<img class="image_of_myself_2" src="<?php the_field( "image_of_myself_2" ) ?>" />
    <img class="image_of_myself_3" src="<?php the_field( "image_of_myself_3" ) ?>" />
    
    </div>

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