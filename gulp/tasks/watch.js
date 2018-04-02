
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    // connect = require('gulp-connect'),
    browserSync = require('browser-sync').create();







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
    watch(['./app/assets/css/main.css', './app/assets/css/_variables.css', './app/assets/css/_mixins.css', './app/assets/css/_global.css', './app/assets/css/_page-section.css', './app/assets/css/_wrapper.css', './app/assets/css/_typography.css','./app/assets/css/_large-hero.css', './app/assets/css/_btn.css'], function() {
        // gulp.start('styles');
        gulp.start('cssInject');
        // gulp.start('connect');
    });

});


//...creat Gulp task for cssInject...

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/main.css')
    .pipe(browserSync.stream());
});
