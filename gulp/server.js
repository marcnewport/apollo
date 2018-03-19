const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const read = require('read-yaml');

const config = read.sync('config.yml');
const argIndex = process.argv.indexOf('-e');
const env = argIndex > -1 ? process.argv[argIndex + 1] : 'development';

gulp.task('browserSync', function() {
	browserSync.init({
		proxy: 'https://'+ config[env].store +'?preview_theme_id='+ config[env].theme_id,
		host: 'localhost',
		open: 'external',
		injectChanges: true,
		reloadDelay: 1000,
		reloadDebounce: 1000
	});

	gulp.watch('dist/**/*', function() {
		browserSync.reload();
	});
});
