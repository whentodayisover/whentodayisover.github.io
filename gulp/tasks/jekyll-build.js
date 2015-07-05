var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    cp = require('child_process');

gulp.task('jekyll-build', function (done) {
    browserSync.notify('Building Jekyll');
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});
