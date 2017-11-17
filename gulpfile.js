const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

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
gulp.task('default', ['sass', 'scripts']);

//Gulp Watch
gulp.task('watch', function(){
    gulp.watch('sass/*.scss', ['sass', 'scripts']);
});