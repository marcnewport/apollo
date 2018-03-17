const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('scripts', function() {
	// Add your scripts to array in order of dependancy
	return gulp.src([
			'src/scripts/*.js'
		])
		.pipe(babel({
			presets:['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/assets/'));
});
