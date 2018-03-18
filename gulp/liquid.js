const gulp = require('gulp');

gulp.task('liquid', function() {
	return gulp.src(['src/**/*', '!src/assets{,/**}'])
		.pipe(gulp.dest(function(file) {
			return file.base.replace('src', 'dist');
		}));
});
