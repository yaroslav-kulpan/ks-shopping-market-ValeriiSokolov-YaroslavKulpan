const gulp = require('gulp');
const rigger = require('gulp-rigger');
const sass = require('gulp-sass');							//sass
const browserSync = require('browser-sync').create();//runtime watcher and changer
const clean = require('gulp-clean');						//cleaner product directory "dev"
const cleanCSS = require('gulp-clean-css');					//CSS minifier
const sourcemaps = require('gulp-sourcemaps');				//SCSS navigation in Chrome inspector
const rename = require('gulp-rename');						//rename files after minify
const concat = require('gulp-concat');						//concat for js
const terser = require('gulp-terser');						//minify for js
const autoprefixer = require('gulp-autoprefixer');			//cross-browser compatibility css
// const imagemin = require('gulp-imagemin');

const imgFiles = ['./src/image/**/**.*', './src/image/**/**.*'];
const jsScript = ['./src/js/*.js'];
const componentCss = ['./src/scss/components/*.css'];

cleandev = () => gulp.src('./dist', {read: false}).pipe(clean());
image = () => gulp.src(imgFiles).pipe(gulp.dest('./dist/image'));
css = () => gulp.src(componentCss).pipe(gulp.dest('./dist/css'));
js = () => gulp.src(jsScript).pipe(gulp.dest('./dist/js'));
buildHtml = () => gulp.src('./src/*.html').pipe(rigger()).pipe(gulp.dest('./')).pipe(browserSync.stream());

scripts = () => gulp.src('src/js/main.js')
    .pipe(terser({											//terser
        toplevel: true
    }))														//minify js
    .pipe(concat('main.js'))									//concat all js files
    .pipe(rename(function (path) {							// function of rename extname for .css
        path.extname = ".min.js";
    }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.stream());

forSass = () => gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', console.error.bind(console))
    .pipe(cleanCSS({level: 2}, ))								// minifyCSS
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],							// для браузеров которые использует 0.1%
        cascade: false
    }))
    .pipe(concat('style.css'))
    .pipe(rename(function (path) {							// function of rename extname for .css
        path.extname = ".min.css";
    }))
    .pipe(sourcemaps.write('./../css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());

watch = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/**/*.html', buildHtml);
    gulp.watch('./src/**/*.scss', forSass);
    gulp.watch('./src/**/*.js', scripts);
};

gulp.task('cleandev', cleandev);
gulp.task('buildHtml', buildHtml);
gulp.task('image', image);
gulp.task('scripts', scripts);
gulp.task('sass', forSass);
gulp.task('watch', watch);
gulp.task('build', gulp.series('cleandev', gulp.series(image, scripts, js, css, buildHtml, forSass)));
gulp.task('dev', gulp.series('build', watch));