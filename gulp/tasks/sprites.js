var gulp = require('gulp'),
sprite = require('gulp-svg-sprite'),
rename = require('gulp-rename');

var config = {
    mode: {
        css: {
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

gulp.task('createSprite', function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(sprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteFile', ['createSprite'], function(){   //use [], to add any dependancy to run before the function
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/css'));
});

gulp.task('runSprite', ['createSprite', 'copySpriteFile']);
