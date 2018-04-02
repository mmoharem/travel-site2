var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    simplVars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    // connect = require('gulp-connect'),
    postcssImport = require('postcss-import'),
    browserSync = require('browser-sync').create();





//////////////////////////////
///////...connect........////
// gulp.task('connect', function(){
//   connect.server({
//
//       livereload: true
//   });
// });
    //   ..creat gulp ... Connect ... task
// gulp.task('connect', connect.server({
//     root: [outputDir],
//     open: { browser: 'Google Chrome' }
// }));



//new task.   //------->..For html
gulp.task('html', function () {

    gulp.src('./app/*.html')
        .pipe(gulp.dest('./app'))
        // .pipe(connect.reload());

});





//new task.   //------>..for css
gulp.task('styles', function() {
    // console.log("Imagine Sass or PostCSS tasks runing here.");

    // Creat gulp.src & pip gulp.dest
    return gulp.src('./app/assets/css/main.css') //we use return because gulp.src is a syncronas function
        // .pipe(connect.reload())
        .pipe(postcss([postcssImport, simplVars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));



}); //Use ($gulp taskName(html)) to run any task.






//...creat Gulp Watch...

gulp.task('watch', function() {

    browserSync.init({
      server: {
        baseDir: "app"
      }
    });

    // HTML-watch.
    watch('./app/index.html', function() {
        gulp.start('html');
        browserSync.reload();

    });

    // CSS-watch.
    watch(['./app/assets/css/main.css', './app/assets/css/_variables.css', './app/assets/css/_global.css', './app/assets/css/_large-hero.css', './app/assets/css/_btn.css'], function() {
        // gulp.start('styles');
        gulp.start('cssInject');
        // gulp.start('connect');
    });

});
gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/main.css')
    .pipe(browserSync.stream());
});
gulp.task('default', [/*'connect', */'watch']);
