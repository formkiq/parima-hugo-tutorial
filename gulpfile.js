var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    purgecss = require('gulp-purgecss');

gulp.task('dev-css', function () {
    return gulp.src('./src/css/page.css', {allowEmpty: true})
      .pipe(postcss([
        require('tailwindcss'),
        require('autoprefixer'),
      ]))
      .pipe(concat('page.css'))
      .pipe(cleanCss())
      .pipe(gulp.dest('./static/css/'))
});

gulp.task('build-css', function () {
    return gulp.src('./src/css/page.css')
      .pipe(postcss([
        require('tailwindcss'),
        require('autoprefixer'),
      ]))
  .pipe(purgecss({
    content: ['./layouts/**/*.html', './content/**/*.html'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    whitelist: [':focus', 'button', 'button:focus']
  }))
      .pipe(concat('page.css'))
      .pipe(cleanCss())
      .pipe(gulp.dest('./static/css/'))
});

gulp.task('watchcss', function() {
  gulp.watch('./src/css/*.css', gulp.series('procss'));
});

gulp.task('dev', gulp.series('dev-css'));

gulp.task('build', gulp.series('build-css'));