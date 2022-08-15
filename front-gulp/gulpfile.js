const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMap = require('gulp-sourcemaps');
const miniFycss = require('gulp-clean-css');

// npm i --save-dev @plugin
// yarn add @plugin




function Css() {
    return src('./site/scss/index.scss')
        .pipe(sourceMap.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(miniFycss())
        .pipe(sourceMap.write())
        .pipe(dest('./site/css'));
}

function Watch() {
    watch('./site/scss/**/*.scss', Css);
}


exports.dev = parallel(Css, Watch);