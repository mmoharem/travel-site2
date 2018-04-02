
var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
simplVars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
postcssImport = require('postcss-import'),
mixins = require('postcss-mixins');




//new task.   //------>..for css
gulp.task('styles', function() {
    // console.log("Imagine Sass or PostCSS tasks runing here.");

    // Creat gulp.src & pip gulp.dest
    return gulp.src('./app/assets/css/main.css') //we use return because gulp.src is a syncronas function
        // .pipe(connect.reload())
        .pipe(postcss([postcssImport, mixins, simplVars, nested, autoprefixer]))
        .on('error' , function(errorInfo){
               console.log(errorInfo.toString());
               this.emit('end');
           })
        .pipe(gulp.dest('./app/temp/styles'));



}); //Use ($gulp taskName(html)) to run any task.
