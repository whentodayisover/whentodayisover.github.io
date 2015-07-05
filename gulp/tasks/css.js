var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');

gulp.task('css', function() {
  return sass('_sass/all.scss', { style: 'expanded' })
    .pipe(plumber())
    .pipe(autoprefixer('last 2 version', 'ie 9'))
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(notify({ message: 'Styles task complete' }));
});
