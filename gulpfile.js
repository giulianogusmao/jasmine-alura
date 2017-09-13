const gulp = require('gulp')
    , clean = require('gulp-clean')
    , sass = require('gulp-sass')
    , browserSync = require('browser-sync').create()
    , reload = browserSync.reload;

let path = {
    origin: './src',
    deploy: './dist'
};

gulp.task('clean', () => {
    return gulp
        .src(path.deploy)
        .pipe(clean());
});

gulp.task('copy', () => {
    gulp
        .src(`${path.origin}/**/*.+(html|js)`)
        .pipe(gulp.dest(path.deploy))
        .pipe(browserSync.stream());
});

gulp.task('sass', () => {
    return gulp
        .src(`${path.origin}/sass/**/*.+(scss|sass)`)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(`${path.deploy}/css`));
});

gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: path.deploy,
        }
    });

    gulp.watch(`${path.origin}/**/*.+(html|js)`, ['copy']);
    gulp.watch(`${path.origin}/**/*.+(scss|sass)`).on('change', () => {
        gulp.start('sass');
    });
});

gulp.task('test-watch', () => {
    browserSync.init({
        server: {
            baseDir: './',
            index: './src/index.html',
        }
    });

    gulp.watch(`${path.origin}/**/*.js`, ['copy']);
    gulp.watch(`./**/*[Ss]pec.js`).on('change', reload);
    gulp.watch(`jasmine/**/*.html`).on('change', reload);
});

gulp.task('default', ['clean'], () => gulp.start(
    'copy'
    , 'sass'
));