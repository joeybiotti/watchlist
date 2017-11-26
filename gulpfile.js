const gulp = require('gulp');
const sass = require('gulp-sass');
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

// Gulp Default
gulp.task('default', ['sass', 'imagemin']);

//Gulp Watch
gulp.task('watch', function(){
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('img/*', ['imagemin']);
});