import del from 'del'
import gulp from 'gulp'
import babel from 'gulp-babel'
import help from 'gulp-task-listing'
import {crop as cropExt} from 'gulp-ext'

gulp.task('help', help)

gulp.task('compile', ['compile-lib', 'compile-bin'])

gulp.task('compile-bin', () =>
  gulp.src('bin/*')
    .pipe(babel())
    .pipe(cropExt())
    .pipe(gulp.dest('build/bin'))
)

gulp.task('compile-lib', () =>
  gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build/lib'))
)

gulp.task('watch-bin', () => gulp.watch('bin/*', ['compile-bin']))
gulp.task('watch-lib', () => gulp.watch('lib/**/*.js', ['compile-lib']))

gulp.task('clean', () => del(['build']))
gulp.task('default', ['compile', 'watch'])
gulp.task('watch', ['watch-bin', 'watch-lib'])
