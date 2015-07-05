var gulp = require('gulp');

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('_sass/**/*.scss', ['css']);
  // Watch .js files
  gulp.watch('_js/**/*.js', ['js']);
  // Watch .html files and posts
  gulp.watch(['*.html', '_includes/**/*.html', '_layouts/*.html', '*.md', '_posts/*', '_data/**/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('css', 'js', 'browser-sync', 'watch');
});
