'use strict';

var gulp        = require('gulp'),
    gulpIf      = require('gulp-if'),
    mapConcat   = require('gulp-concat-sourcemap'),
    order       = require('gulp-order'),
    sass        = require('gulp-sass'),
    htmlMin     = require('gulp-htmlmin'),
    jsHint      = require('gulp-jshint'),
    jscs        = require('gulp-jscs'),
    merge       = require('merge-stream'),
    del         = require('del'),
    runSequence = require('run-sequence'),
    config      = require('./build-config'),
    devMode     = false;

gulp.task('clean', cleanTask);
gulp.task('templates', templatesTask);
gulp.task('scripts', scriptsTask);
gulp.task('styles', stylesTask);
gulp.task('build', buildTask);
gulp.task('dev', devTask);
gulp.task('default', ['build']);

function cleanTask() {

  return del(config.dest.files);
}

function templatesTask() {

  return gulp.src(config.templates.files)
             .pipe(htmlMin(config.templates.minifyOpts))
             .pipe(gulp.dest(config.dest.dir));
}

function scriptsTask() {

  return gulp.src(config.scripts.files)
             .pipe(jsHint())
             .pipe(jsHint.reporter('jshint-stylish'))
             .pipe(gulpIf(!devMode, jsHint.reporter('fail')))
             .pipe(jscs())
             .pipe(jscs.reporter())
             .pipe(gulpIf(!devMode, jscs.reporter('fail')))
             .pipe(order(config.scripts.concatOrder, {base: '.'}))
             .pipe(mapConcat(config.dest.concat, {sourcesContent: true}))
             .pipe(gulp.dest(config.dest.dir));
}

function stylesTask() {

  return merge(
      gulp.src(config.styles.css)
          .pipe(gulp.dest(config.dest.dir)),
      gulp.src(config.styles.sass)
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest(config.dest.dir)));
}

function buildTask(callback) {

  runSequence('clean', [
    'scripts',
    'templates',
    'styles'
  ], callback);
}

function devTask() {

  devMode = true;
  gulp.watch(config.scripts.files, ['scripts']);
  gulp.watch(config.templates.files, ['templates']);
  gulp.watch([config.styles.css, config.styles.sass], ['styles']);
}
