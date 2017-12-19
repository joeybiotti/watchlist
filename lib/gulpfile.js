const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const jshint = require('gulp-jshint');

//Optimize Images
gulp.task('imagemin', function(){
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('css/images'))
});

//Compile Sass
 gulp.task('sass', function(){
    gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'))
 });

//Lint Scripts
gulp.task('lint', function(){
    gulp.src('app/*')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
});

// Gulp Default
gulp.task('default', ['sass', 'imagemin', 'lint']);

//Gulp Watch
gulp.task('watch', function(){
    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch('./img/*', ['imagemin']);
    gulp.watch('./app/*', ['lint']);
});