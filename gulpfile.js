const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      cssnext = require('postcss-cssnext'),
      csswring = require('csswring'),
      importcss = require('postcss-import')

gulp.task('styles', () => {
  const processors = [
    importcss,
    cssnext,
    csswring
  ]
  return gulp.src('./postCss/styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./public/css'))
})

gulp.task('watch', () => {
  gulp.watch('./postCss/**/*.css', ['styles'])
})

gulp.task('default', ['styles','watch'])