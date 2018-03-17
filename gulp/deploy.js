const gulp = require('gulp');
const exec = require('child_process').exec;

const argIndex = process.argv.indexOf('-e');
const env = argIndex > -1 ? process.argv[argIndex + 1] : 'development';

gulp.task('deploy', function() {
	exec('theme upload -e '+ env, {
		cwd: 'dist/'
	},
	function(error, stdout, stderr)  {
	  if (error) return console.error(error);
	  console.log(stdout);
	});
});
