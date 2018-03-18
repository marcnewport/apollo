const gulp = require('gulp');

gulp.task('liquid', function() {
	// gulp.src('src/config/*')
	// 	.pipe(gulp.dest('dist/config'));
	//
	// gulp.src('src/layout/*')
	// 	.pipe(gulp.dest('dist/layout'));
	//
	// gulp.src('src/locales/*')
	// 	.pipe(gulp.dest('dist/locales'));
	//
	// gulp.src('src/sections/*')
	// 	.pipe(gulp.dest('dist/sections'));
	//
	// gulp.src('src/snippets/*')
	// 	.pipe(gulp.dest('dist/snippets'));
	//
	// gulp.src('src/templates/*')
	// 	.pipe(gulp.dest('dist/templates'));

	return gulp.src(['src/**/*', '!src/assets{,/**}'])
		.pipe(gulp.dest(function(file) {
			return file.base.replace('src', 'dist');
		}));
});
