<!DOCTYPE html>
<html lang="en">

<head>
<?php wp_head();?>
    <meta property="og:image" content="assets/thumbnail/thumbnail.png">
</head>

<body>

    <body id="<?php the_title();?>" data-title="<?php the_title();?>">

        <header>
        <!-- output the menu -->
<?php wp_nav_menu( array( 'theme_location' => 'secondary' ) ); ?>
            
        </header>
  