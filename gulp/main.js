const gulp = require('gulp');
const runSequence = require('run-sequence');
const path = require('path');

gulp.task('watch', function () {

	runSequence(
		'copyConfig',
		'theme:watch',
		'browserSync'
	);

	gulp.watch('src/assets/js/**/*', ['scripts']);
	gulp.watch('src/assets/scss/**/*', ['sass']);

	gulp.watch(['src/**/*', '!src/assets{,/**}'])
		.on('change', function(event) {
			const dest = event.path.replace('src', 'dist');
			gulp.src(event.path)
				.pipe(gulp.dest(path.dirname(dest)));
		})
		.on('unlink', function(event) {
			gulp.src(event.path, { read: false })
				.pipe(clean());
		});
});

gulp.task('build', function(done) {
	runSequence(
		'clean',
		'scripts',
		'sass',
		'liquid',
		'copyConfig',
		done
	);
});

gulp.task('deploy', function(done) {
	runSequence(
		'build',
		'theme:deploy',
		done
	);
});
