var gulp = require('gulp'),
    del = require('del'),
    gutil = require('gulp-util'),
    bowerFiles = require('main-bower-files'),
    react = require('gulp-react'),
    browserSync = require('browser-sync'),
    babel = require('gulp-babel');

var config = {
    src: './src',
    dist: './dist'
};

gulp.task('clean', function() {
    del(config.dist + '/**/*');
});

gulp.task('bower', function() {
    gulp.src(bowerFiles())
        .pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('scripts', function() {
    gulp.src(config.src + '/scripts/*.jsx')
        .pipe(react({harmony: false, es6module: true}))
        .pipe(babel({modules: 'amd'}))
        .pipe(gulp.dest(config.dist + '/js'));

    gulp.src(config.src + '/scripts/*.js')
        .pipe(babel({modules: 'amd'}))
        .pipe(gulp.dest(config.dist + '/js'));
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: config.dist
        }
    });

    gulp.watch(config.src + '/scripts/*.jsx', ['scripts']);
    gulp.watch(config.dist + '/api/**/*.json').on('change', browserSync.reload);
    gulp.watch(config.dist + '/js/*.js').on('change', browserSync.reload);
});

gulp.task('default', function() {
   gulp.watch(config.src + '/scripts/**/*.js', ['scripts']); 
});
