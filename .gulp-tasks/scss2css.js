/*jshint node: true */
/*jshint globalstrict: true*/
'use strict';

const {series, src, dest} = require('gulp');
const plumber = require('gulp-plumber');          // уведомления об ошибках
const sass = require('gulp-sass');             // компилятор sass на C без compass
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');     // установка префиксов
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

function scss2css(cb) {
    let path = [
        './examples/css/*.scss'
    ];

    return src(path)
        .pipe(plumber())
        .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: 'compressed' // expanded or compressed
            }).on('error', sass.logError))
            .pipe(cleanCSS({level: 2}))
            .pipe(autoprefixer())
            // .pipe(rename(function (path) {
            //     path.dirname += "/../";
            // }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest(function (file) {
            return file.base;
        }));
}

exports.scss2css = scss2css;