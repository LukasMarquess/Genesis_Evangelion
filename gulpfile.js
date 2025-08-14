const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const imageMin = require('gulp-imagemin');
const ugfliy = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/**/*.js')
    .pipe(ugfliy())
    .pipe(gulp.dest('./dist/js'));
}

function styles() {
    return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.series(styles, images, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/**/*.scss', gulp.parallel(styles));
    gulp.watch('./src/images/**/*', gulp.parallel(images));
    gulp.watch('./src/scripts/**/*.js', gulp.parallel(scripts));
};