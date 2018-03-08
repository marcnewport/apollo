const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const browserSync = require('browser-sync').create();
const runSequence = require('run-sequence');
const exec = require('child_process').exec;

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

// // Setup browser-sync
// gulp.task('browserSync', function() {
// 	browserSync.init({
// 		server: {
// 			baseDir: '_site',
// 			reloadDelay: 1000
// 		}
// 	});
// });
//
// // Reloads the browser
// gulp.task('browserSync:reload', function() {
// 	browserSync.reload();
// });

// // Watches the constious files during development
// gulp.task('dev:watch', ['browserSync'], function () {
// 	gulp.watch('_svg/**/*', ['svg']);
// 	gulp.watch(['_js/vendor/**/*', 'bower_components/**/*'], ['js:vendor']);
// 	gulp.watch('_js/**/*', ['js:dev']);
//
// 	gulp.watch(
// 		[
// 			'_data/**/*',
// 			'_events/**/*',
// 			'_includes/**/*',
// 			'_layouts/**/*',
// 			'_news/**/*',
// 			'_people/**/*',
// 			'_sass/**/*',
// 			'_testimonials/**/*',
// 			'_work/**/*',
// 			'admin/**/*',
// 			'assets/**/*',
// 			'css/*',
// 			'js/*',
// 			'*.html'
// 		],
// 		['jekyll:build']
// 	);
//
// 	gulp.watch('_site/index.html', ['browserSync:reload']);
// });
//
//
//
// // The default dev command
// gulp.task('default', function(callback) {
// 	runSequence(
// 		['svg', 'js:vendor', 'js:dev'],
// 		'jekyll:build',
// 		'dev:watch',
// 		callback
// 	);
// });
