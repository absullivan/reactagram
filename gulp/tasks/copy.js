var gulp = require('gulp');
var config = require('../config').images;

gulp.task('copy', function() {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
