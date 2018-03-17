const gulp = require('gulp');
const runSequence = require('run-sequence');

// Watches the constious files during development
gulp.task('watch', ['clean', 'build', 'copyConfig', 'deploy', 'browserSync'], function () {

	gulp.watch(
		'src/scripts/**/*',
		['scripts']
	);

	gulp.watch(
		'dist/**/*!(.yml)',
		['deploy', 'browserSync:reload']
	);
});

// The default build command
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
