const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('watch', function () {

	runSequence(
		'copyConfig',
		'theme:watch',
		'browserSync'
	);

	gulp.watch('src/assets/js/**/*', ['scripts']);
	gulp.watch('src/assets/scss/**/*', ['sass']);
	gulp.watch(['src/**/*', '!src/assets{,/**}'], ['liquid']);
});

gulp.task('build', function(done) {
	runSequence(
		'clean',
		'scripts',
		'sass',
		'liquid',
		done
	);
});

gulp.task('deploy', function(done) {
	runSequence(
		'build',
		'copyConfig',
		'theme:deploy',
		done
	);
});
