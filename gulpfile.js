require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
require('./gulp/tasks/scripts');



var gulp = require('gulp'),
watch = require('gulp-watch');




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

gulp.task('default', [/*'connect', */'watch']);
