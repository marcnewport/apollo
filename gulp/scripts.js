const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const presets = {
	"presets": [
		[
			"env", {
				"targets": {
					"browsers": ["last 2 versions", "IE 11", "> 5%"]
				}
			}
		]
	]
};

gulp.task('scripts', function() {
	return gulp.src('src/assets/js/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel(presets))
		.pipe(uglify())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/assets/'));
});
