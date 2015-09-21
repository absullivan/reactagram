var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('browserify', function() {
  browserify('./src/js/application.js')
    .transform('reactify')
    .bundle()
    .pipe(source('application.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('build'));
  gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('build/images'));
  gulp.src('src/css/**/*.*')
    .pipe(gulp.dest('build/css'));
});

gulp.task('default',['browserify', 'copy'], function() {
  return gulp.watch('src/**/*.*', ['browserify', 'copy']);
});
