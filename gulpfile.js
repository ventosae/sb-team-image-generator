const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

function style() {
    return gulp.src('./source/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
};

function watch() {
    browserSync.init ({
        server: {
            baserDir: './'
        }
    });
    gulp.watch('./source/*.scss', style);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('./source/*.js').on('change', browserSync.reload);
};

exports.style = style;
exports.watch = watch;