const gulp       = require('gulp');
const sass       = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');


gulp.task('sass-c', function() {
    return gulp.src('./src/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./src'))

})

gulp.task("watch", function() {
    gulp.watch('./src/*.scss', gulp.series('sass-c'))
})