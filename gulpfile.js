var gulp = require('gulp');
var requireDir = require('require-dir');

requireDir('./gulp/build', { recurse: true });

gulp.task('default', ['build-style']);
