<?php

get_header('work');

?>

<div id="descOfWork">

        <p style="color: <?php the_field( "title_color" ) ?>;"><?php the_title();?></p>

        <p>Idea</p>
        <p>Result</p>

        <p><?php the_field( "idea" ) ?></p>
        <p><?php the_field( "result" ) ?></p>

    </div>

    <div id="underPart">

        <img src="<?php the_field( "screenshot" ) ?>" alt="<?php the_title();?>">


        <a id="buttonSvg" href="<?php the_field( "button_link" ) ?>" target="_blank">
        <?php the_field( "button_svg" ) ?>
    </a>


    </div>



<?php 

get_footer();

?>

