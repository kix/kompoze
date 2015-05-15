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

gulp.task('html', function(cb) {
    gulp.src(config.src + '/**/*.html')
        .pipe(gulp.dest(config.dist));

    cb();
});

gulp.task('scripts', function(cb) {
    gulp.src(config.src + '/scripts/*.jsx')
        .pipe(react({harmony: false, es6module: true}))
        .pipe(babel({modules: 'amd'}))
        .pipe(gulp.dest(config.dist + '/js'));

    gulp.src(config.src + '/scripts/**/*.js')
        .pipe(babel({modules: 'amd'}))
        .pipe(gulp.dest(config.dist + '/js'));

    cb();
});

gulp.task('css', function(cb) {
    var postcss = require('gulp-postcss');
    gulp.src(config.src + '/css/**/*.css')
        .pipe(postcss([require('postcss-mixins'), require('postcss-simple-vars')]))
        .pipe(gulp.dest(config.dist + '/css'))
        .pipe(browserSync.reload({stream: true}));
    cb();
});

gulp.task('watch', function() {
    gulp.watch(config.src + '/scripts/*.jsx', ['scripts']);
    gulp.watch(config.dist + '/api/**/*.json').on('change', browserSync.reload);
    gulp.watch(config.dist + '/js/*.js').on('change', browserSync.reload);
    gulp.watch(config.src + '/css/**/*.css', ['css']);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: config.dist
        }
    });
});

gulp.task('build', ['html', 'bower', 'scripts']);

gulp.task('server', ['build', 'watch', 'browserSync']);

gulp.task('default', function() {
   gulp.watch(config.src + '/scripts/**/*.js', ['scripts']); 
});
