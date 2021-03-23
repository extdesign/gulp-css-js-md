/*jshint node: true */
/*jshint globalstrict: true*/
'use strict';

const {src, dest, series} = require('gulp');

// global
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename'); //механизм переименования файлов
const plumber = require('gulp-plumber'); // отлавливает ошибки gulp и позволяет не завершать работу сборщика

// for SASS
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer'); // префиксы
//const cleanCSS = require('gulp-clean-css'); // minify css
//const csso = require('gulp-csso');
const cssnano = require('gulp-cssnano');

// for JS
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// for Markdown
const markdownIt = require('gulp-markdown');

const path = {
    sass: [
      './examples/**/*.scss',
    ],
    js: [
      './examples/**/*.js',
    ],
    md: [
      './examples/**/*.md',
    ]
}

const onError = function(err) {
  console.log(err);
  this.emit('end');
}

function scss2css() {
    return src(path.sass, {
      dot: true,
      removeBOM: true,
    })
      .pipe(plumber({
        errorHandler: onError
      }))
      .pipe(sourcemaps.init())
      .pipe(sass({
          outputStyle: 'compressed', // expanded or compressed
          includePaths: ['node_modules/susy/sass']
      })).on('error', onError)
      .pipe(autoprefixer('last 2 version'))
      //.pipe(cleanCSS({level: 2}))
      .pipe(cssnano())
      .pipe(sourcemaps.write('.'))
      .pipe(dest(function (file) {
          return file.base;
      }));
}

function js2minjs() {
    return src(path.js, {
      dot: true,
      removeBOM: true,
    })
      .pipe(plumber({
        errorHandler: onError
      }))
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

function md2html() {
    return src(path.md, {
      dot: true,
      removeBOM: true,
    })
      .pipe(plumber({
        errorHandler: onError
      }))
      .pipe(markdownIt({
          breaks: true,
          gfm: true,
          xhtml: true
      }))
      .pipe(dest(function (file) {
            console.log(file)
            return file.base + './';
        }
      ))
}

exports.scss = scss2css;
exports.js = js2minjs;
exports.md = md2html;
