var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
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

gulp.task('sass', function () {
  gulp.src('./src/css/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 5 versions']
    }))
    .pipe(gulp.dest('build/css'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('build'));
  gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('build/images'));
});

gulp.task('default',['browserify', 'sass', 'copy'], function() {
  return gulp.watch('src/**/*.*', ['browserify', 'sass', 'copy']);
});
