const gulp = require('gulp');
const clean = require('gulp-clean');

// Copies the config file for themekit to use
gulp.task('copyConfig', function() {
	return gulp.src('config.yml')
		.pipe(gulp.dest('dist/'));
});

gulp.task('clean', function() {
	return gulp.src('dist', { read: false })
		.pipe(clean());
});
