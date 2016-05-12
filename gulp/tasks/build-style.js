var gulp = require('gulp');
var sass = require('gulp-sass');
//var concat = require('gulp-concat');
//var minify = require('gulp-minify-css');

gulp.task('sass', function() {
    gulp.src('./src/**/*.scss')
        .pipe(sass())
       //.pipe(concat('style.css'))
       //.pipe(minify())
        .pipe(gulp.dest('./dist'));
});
