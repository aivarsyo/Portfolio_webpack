<?php

function getStyle(){
    wp_enqueue_script('main-js', get_theme_file_uri('./dist/js/main.1.0.0.js'), NULL, '1.0', true);
    wp_enqueue_style('theme_main_styles', get_stylesheet_uri('./style.css'));
    wp_enqueue_style('google-fonts', '//fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;800&display=swap');
}

add_action('wp_enqueue_scripts', 'getStyle');

function features(){
    add_theme_support('title-tag');
}

add_action('after_setup_theme', 'features');

function register_menu_location() {
	register_nav_menus( array(
        'primary' => __( 'Primary Navigation' ),
        'secondary' => __( 'Secondary Navigation' )
	) );
}
add_action( 'after_setup_theme', 'register_menu_location' );