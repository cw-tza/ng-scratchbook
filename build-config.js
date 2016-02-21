'use strict';

module.exports = {
  dest:      {
    dir:     'dest',
    files:   'dest/**',
    scripts: 'app.js',
    styles:  'app.css'
  },
  templates: {
    files:      'app/**/*.html',
    minifyOpts: {
      removeComments:              true,
      removeCommentsFromCDATA:     true,
      collapseWhitespace:          true,
      conservativeCollapse:        true,
      collapseInlineTagWhitespace: true,
      preserveLineBreaks:          true,
      useShortDoctype:             true,
      keepClosingSlash:            true,
      caseSensitive:               true,
      quoteCharacter:              '\''
    }
  },
  scripts:   {
    files:       'app/**/*.js',
    concatOrder: [
      'app/**/*.module.js',
      'app/**/*.js'
    ]
  },
  styles:    {
    sass: 'app/**/*.scss',
    css:  'app/**/*.css'
  },
  karma:     karmaServerOpts
};

function karmaServerOpts(devMode) {
  return {
    configFile: __dirname + '/test/karma.conf.js',
    singleRun:  !devMode
  }
}