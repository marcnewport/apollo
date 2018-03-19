const gulp = require('gulp');
const glob = require('glob');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

const settings = {
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

	const files = glob.sync('src/assets/js/*.js');

	return files.forEach(function(file) {
		browserify({ entries: file })
	        .transform(babelify.configure({ presets: ['env'] }))
	        .bundle()
			.on('error', function (err) {
				console.error(err.toString());
				this.emit("end");
			})
			.pipe(source(file.replace('src/assets/js/', '')))
			.pipe(buffer())
	        .pipe(sourcemaps.init())
	        .pipe(uglify())
	        .pipe(sourcemaps.write('.'))
			.pipe(gulp.dest('dist/assets/'));
	})
});
