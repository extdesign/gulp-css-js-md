/*jshint node: true */
/*jshint globalstrict: true*/
'use strict';

const {series, src, dest} = require('gulp');

const babel = require('gulp-babel');            // поддержка ES6 и новых стандартов
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

function minifyJs(cb) {
    let path = [
        './examples/js/!(*.min).js'
    ];

    return src(path, {dot: true})
        .pipe(sourcemaps.init())
        .pipe(rename(function (path) {
            path.extname = ".min.js";
        }))
        .pipe(babel())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(function (file) {
            return file.base;
        }));
}

exports.minifyJs = minifyJs;