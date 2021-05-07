const mix = require('laravel-mix');
require('laravel-mix-purgecss');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         //
//     ]);

mix.styles('resources/css/bootstrap.min.css','public/css/bootstrap.min.css').purgeCss();
mix.styles('resources/css/font-awesome.min.css','public/css/font-awesome.min.css').purgeCss();
mix.styles('resources/css/magnific-popup.css','public/css/magnific-popup.css').purgeCss();
mix.styles('resources/css/owl.carousel.min.css','public/css/owl.carousel.min.css').purgeCss();
mix.styles('resources/css/owl.theme.default.min.css','public/css/owl.theme.default.min.css').purgeCss();
mix.styles('resources/css/responsive.css','public/css/responsive.css').purgeCss();
mix.styles('resources/css/style.css','public/css/style.css').purgeCss();
mix.styles('resources/css/themify-icons.css','public/css/themify-icons.css').purgeCss();


mix.js('resources/js/bootstrap.min.js','public/js/bootstrap.min.js').purgeCss();
mix.js('resources/js/jquery-3.3.1.min.js','public/js/jquery-3.3.1.min.js').purgeCss();
mix.js('resources/js/jquery.easeScroll.min.js','public/js/jquery.easeScroll.min.js').purgeCss();
mix.js('resources/js/jquery.easing.min.js','public/js/jquery.easing.min.js').purgeCss();
mix.js('resources/js/jquery.mb.ytplayer.min.js','public/js/jquery.mb.ytplayer.min.js').purgeCss();
mix.js('resources/js/magnific-popup.min.js','public/js/magnific-popup.min.js').purgeCss();
mix.js('resources/js/owl.carousel.min.js','public/js/owl.carousel.min.js').purgeCss();
mix.js('resources/js/scripts.js','public/js/scripts.js').purgeCss();
mix.js('resources/js/typed.min.js','public/js/typed.min.js').purgeCss();

mix.js('resources/js/vendor/modernizr-2.8.1.min.js','public/js/vendor/modernizr-2.8.1.min.js').purgeCss();


