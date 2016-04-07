const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less_moving_motivators', () => gulp.src('styles/bootstrap.less')
  .pipe(less())
  .pipe(gulp.dest('public'))
);

gulp.task('watch_moving_motivators', () => {
  gulp.watch('styles/**/*.less', ['less_moving_motivators']);
});

gulp.task('watch', ['less_moving_motivators', 'watch_moving_motivators']);
gulp.task('default', ['less_moving_motivators']);
gulp.task('deploy', ['less_moving_motivators']);
