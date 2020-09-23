<?php

get_header();

?>

<div id="worksContainer">

        <div class="glide">
            <div class="glide__track" data-glide-el="track">

                <?php if(have_rows("all_my_works"))?>

                <ul class="glide__slides">

                    <?php while(have_rows("all_my_works")): the_row(); ?>

                    <li class="glide__slide">
                        <svg>
                            <circle r="250px" cx="50%" cy="50%" fill="<?php the_sub_field("circle_fill") ?>"></circle>
                        </svg>

                        <lottie-player src="<?php the_sub_field("lottie_src") ?>" background="transparent" speed="1" loop="" autoplay=""></lottie-player>

                        <a href="<?php the_sub_field("link") ?>">
                            <p><?php the_sub_field("work_title") ?></p>
                        </a>
                    </li>

                <?php endwhile;?>
                    
                </ul>
            </div>

            <div class="glide__bullets" data-glide-el="controls[nav]">
                <button class="glide__bullet" data-glide-dir="=0"></button>
                <button class="glide__bullet" data-glide-dir="=1"></button>
                <button class="glide__bullet" data-glide-dir="=2"></button>
                <!-- <button class="glide__bullet" data-glide-dir="=3"></button>
                <button class="glide__bullet" data-glide-dir="=4"></button>
                <button class="glide__bullet" data-glide-dir="=5"></button>
                <button class="glide__bullet" data-glide-dir="=6"></button> -->
            </div>

            <div class="glide__arrows" data-glide-el="controls">
                <img src="<?php the_field( "arrow_image" ) ?>" class="glide__arrow glide__arrow--left" data-glide-dir="<">
                <img src="<?php the_field( "arrow_image" ) ?>" class="glide__arrow glide__arrow--right" data-glide-dir=">">
            </div>
        </div>
    </div>



    </div>



<?php 

get_footer();

?>

