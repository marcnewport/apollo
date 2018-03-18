const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('watch', ['copyConfig', 'theme:watch', 'browserSync'], function () {

	gulp.watch(
		'src/scripts/**/*',
		['scripts']
	);
});

gulp.task('build', ['scripts']);

// // The default dev command
// gulp.task('default', function(callback) {
// 	runSequence(
// 		['svg', 'js:vendor', 'js:dev'],
// 		'jekyll:build',
// 		'dev:watch',
// 		callback
// 	);
// });

require('require-dir')('./gulp');
