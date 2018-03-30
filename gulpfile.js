var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    simplVars = require('postcss-simple-vars'),
    nested = require('postcss-nested');


//creat gulp default task
gulp.task('default', function() {
    console.log("Hooray - you created a Gulp task.");
}); //Use ($gulp) to run default task.



//new task.   //For html
gulp.task('html', function() {
    console.log("New Gulp task");
}); //Use ($gulp taskName(html)) to run any task.



//new task.   //for css
gulp.task('styles', function() {
    // console.log("Imagine Sass or PostCSS tasks runing here.");

    // Creat gulp.src & pip gulp.dest
    return gulp.src('./app/assets/css/style.css') //we use return because gulp.src is a syncronas function
        .pipe(postcss([autoprefixer, simplVars, nested]))
        .pipe(gulp.dest('./app/temp/styles'));


}); //Use ($gulp taskName(html)) to run any task.






//...creat Gulp Watch...

gulp.task('watch', function() {

    // HTML-watch.
    watch('./app/index.html', function() {
        gulp.start('html');
    });

    // CSS-watch.
    watch('./app/assets/css/style.css', function() {
        gulp.start('styles');
    });

});