exports.config = {

  framework: 'jasmine',

  specs: [
    'e2e/**/*Spec.js'
  ],

  baseUrl: 'http://localhost:8080',

  onPrepare: function() {
      var SpecReporter = require('jasmine-spec-reporter');
      // add jasmine spec reporter
      jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
   },

   jasmineNodeOpts: {
     print: function() {},
     showColors: true,
     defaultTimeoutInterval: 30000
   }
};
