var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// Watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch(['*.html', 'css/**/*.css', 'img/**/*', 'js/**/*.js'], {cwd: 'app'}, reload);
});

// Compiles the CSS files and autoprefixes when necessary
gulp.task('build', function() {
  return gulp.src('app/css/styles.css')
    .pipe($.csscomb())
    .pipe($.autoprefixer())
    .pipe(gulp.dest('app/css'));
});

gulp.task('default', ['build']);
