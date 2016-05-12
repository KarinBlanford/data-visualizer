var requireDir = require('require-dir');
var gulp = require('gulp');
var runSequence = require('run-sequence');

requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', function() {
	runSequence (
		'build-dev'
	// 'clean',
	// [
	// 	'style',
	// 	'scripts'
	// ],
	// 'watch',
	// 'connect'
	);
});

gulp.task( 'build-dev', function ()
{
	'sass'
	// runSequence (
	// 	'clean',
	// 	[
	// 		'build-style',
	// 		'build-scripts',
	// 		'build-resources'
	// 	],
	// 	'build-html',
	// 	'connect'
	// );
});
