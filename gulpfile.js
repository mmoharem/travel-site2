var gulp = require('gulp'),
    watch = require('gulp-watch');

//creat gulp default task
gulp.task('default', function() {
    console.log("Hooray - you created a Gulp task.");
}); //Use ($gulp) to run default task.

//new task. 
gulp.task('html', function() {
    console.log("New Gulp task");
}); //Use ($gulp taskName(html)) to run any task.

//new task. 
gulp.task('styles', function() {
    console.log("Imagine Sass or PostCSS tasks runing here.");
}); //Use ($gulp taskName(html)) to run any task.

//Creat gulp-watch task   
// gulp.task('watch', function() {

//     // HTML-watch.
//     watch('./app/index.html', function() {
//         gulp.start('html');
//     });

//     watch('./app/assets/styles/**/*.css', function() {
//         gulp.start('styles');
//     });
// });

gulp.task('watch', function() {

    // HTML-watch.
    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/css/style.css', function() {
        gulp.start('styles');
    });

});