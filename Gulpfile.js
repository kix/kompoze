var gulp = require('gulp'),
	gutil = require('gulp-util'),
    babel = require('gulp-babel');

var config = {
    src: './src',
    dist: './dist'
};

gulp.task('scripts', function() {
    gulp.src(config.src + '/scripts/*.js')
        .pipe(babel())
        .pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('default', function() {
   gulp.watch(config.src + '/scripts/**/*.js', ['scripts']); 
});
