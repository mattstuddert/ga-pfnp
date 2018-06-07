var gulp = require('gulp');

var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
  }
};

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(rename({basename: 'main', suffix: '.min'}))
    .pipe(gulp.dest(paths.styles.dest));
}

function watch() {
  gulp.watch(paths.styles.src, styles);
}

gulp.task(watch);
