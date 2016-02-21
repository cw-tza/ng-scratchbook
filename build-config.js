'use strict';

module.exports = {
  dest:      {
    dir:    'dest',
    files:  'dest/**',
    concat: 'app-out.js'
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
      'app/components/**/*.js',
      'app/view1/**/*.js',
      'app/view2/**/*.js'
    ]
  },
  styles:    {
    sass: 'app/**/*.scss',
    css:  'app/**/*.css'
  }
};