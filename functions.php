<?php

function getStyle(){
    wp_enqueue_script('main-js', get_theme_file_uri('./dist/js/main.1.0.0.js'), NULL, '1.0', true);
    wp_enqueue_style('theme_main_styles', get_stylesheet_uri('./style.css'));
    wp_enqueue_style( 'custom-style’, get_template_directory_uri() . ‘/node_modules/@glidejs/glide/src/assets/sass/glide.core' );
    wp_enqueue_style( 'custom-stylesss’, get_template_directory_uri() . ‘/node_modules/@glidejs/glide/src/assets/sass/glide.theme' );
    wp_enqueue_style('google-fonts', '//fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@400;800&display=swap');
}

add_action('wp_enqueue_scripts', 'getStyle');

function features(){
    add_theme_support('title-tag');
}

add_action('after_setup_theme', 'features');