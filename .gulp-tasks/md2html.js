/*jshint node: true */
/*jshint globalstrict: true*/
'use strict';

const {series, src, dest} = require('gulp');
const markdownGithubStyle = require('gulp-markdown-github-style');

function md2html(cb) {
    let path = [
        './examples/markdown/*.md'
    ];

    return src(path)
        .pipe(markdownGithubStyle({
            html: true,
            linkify: true,
            typographer: true
        }))
        .pipe(dest(function (file) {
                return file.base;
            }
        ));
}

exports.md2html = md2html;