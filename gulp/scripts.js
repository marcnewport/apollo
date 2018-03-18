const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('scripts', function() {
	return gulp.src('src/assets/js/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets:['es2015']
		}))
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/assets/'));
});
