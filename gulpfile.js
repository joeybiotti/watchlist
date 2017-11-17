const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

//Optimize Images
gulp.task('imagemin', function(){
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('images'))
});

//Compile Sass
gulp.task('sass', function(){
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/'))
});

// Concat + Minify JavaScript
gulp.task('scripts', function(){
    gulp.src('js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'))
});

// Gulp Default
gulp.task('default', ['sass', 'scripts', 'imagemin']);

//Gulp Watch
gulp.task('watch', function(){
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('img/*', ['imagemin']);
});