<!DOCTYPE html>
<html lang="en">

<head>
<?php wp_head();?>
    <meta property="og:image" content="assets/thumbnail/thumbnail.png">
</head>

<body>

    <body id="<?php the_title();?>" data-title="<?php the_title();?>">
        <header>
            <div class="topnav">
                <a class="active" href="<?php echo site_url('/'); ?>">Home</a>
                <a href="<?php echo site_url('/works'); ?>">Works</a>
                <a href="<?php echo site_url('/about'); ?>">About</a>
            </div>
        </header>
  