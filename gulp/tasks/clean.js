var gulp = require('gulp'),
    clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src(['css', 'js'], {read: false})
    .pipe(clean());
});
