/*jshint node: true */
/*jshint globalstrict: true*/
'use strict';

const {task} = require('gulp');

function defaultTask(cb) {
    cb();
}

const scss = require('./.gulp-tasks/scss2css');
const md = require('./.gulp-tasks/md2html');
const js = require('./.gulp-tasks/minify-js');

exports.default = defaultTask;
exports.css = scss.scss2css;
exports.md = md.md2html;
exports.js = js.minifyJs;