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
    runSequence = require('run-sequence'),
    karma       = require('karma'),
    del         = require('del'),
    config      = require('./build-config'),
    KarmaServer = karma.Server,
    devMode     = false;

gulp.task('clean', cleanTask);
gulp.task('templates', templatesTask);
gulp.task('scripts', scriptsTask);
gulp.task('styles', stylesTask);
gulp.task('build', buildTask);
gulp.task('test', testTask);
gulp.task('dev', ['build'], devTask);
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
             .pipe(mapConcat(config.dest.scripts, {sourcesContent: true}))
             .pipe(gulp.dest(config.dest.dir));
}

function stylesTask() {

  return merge(
    gulp.src(config.styles.css),
    gulp.src(config.styles.sass)
        .pipe(sass().on('error', sass.logError)))
    .pipe(mapConcat(config.dest.styles))
    .pipe(gulp.dest(config.dest.dir));
}

function buildTask(callback) {

  runSequence('clean',
              'test', [
                'scripts',
                'templates',
                'styles'
              ], callback);
}

function testTask(callback) {

  startKarma(callback);
}

function devTask(callback) {

  devMode = true;
  gulp.watch(config.scripts.files, ['scripts']);
  gulp.watch(config.templates.files, ['templates']);
  gulp.watch([config.styles.css, config.styles.sass], ['styles']);
  startKarma(callback);
}

function startKarma(callback) {

  new KarmaServer(config.karma(devMode), callback)
    .start();
}