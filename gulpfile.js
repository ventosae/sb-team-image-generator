const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');

const autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
}

function style() {
    return gulp.src('./source/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(cleanCSS({compatibility: 'ie11'}))
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


function compress() {
    return gulp.src(['./source/*.js'])
      .pipe(minify())
      .pipe(gulp.dest('./source'))
  };


exports.style = style;
exports.watch = watch;
exports.prefix = autoprefixer;
exports.compress = compress;