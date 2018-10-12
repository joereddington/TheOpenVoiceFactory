// Karma configuration
// Generated on Wed Jan 03 2018 11:05:15 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './', //set this if you want to run tests from a specific directory


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js',
      'spec/*_test.js',
      'javascript/read_json.js',
      //'javascript/tests/*.js',
      {pattern: 'testdata/*.obf', watched: true, served: true, included: true}
    ],


    // list of files to exclude
    exclude: [
      'n'
    ],

    proxies: {
        '/testdata/': '/base/testdata/'
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    
    plugins: [
      'karma-jquery',
      'karma-jasmine',
      'karma-chrome-launcher'
    ],

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
