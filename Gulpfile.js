var gulp = require('gulp'),
	gutil = require('gulp-util'),
	bowerFiles = require('main-bower-files'),
	react = require('gulp-react'),
    babel = require('gulp-babel');

var config = {
    src: './src',
    dist: './dist'
};

gulp.task('bower', function() {
	gulp.src(bowerFiles())
		.pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('scripts', function() {
	gulp.src(config.src + '/scripts/*.jsx')
		.pipe(react({harmony: false, es6module: true}))
		.pipe(babel())
		.pipe(gulp.dest(config.dist + '/js'));

    gulp.src(config.src + '/scripts/*.js')
        .pipe(babel())
        .pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('default', function() {
   gulp.watch(config.src + '/scripts/**/*.js', ['scripts']); 
});
