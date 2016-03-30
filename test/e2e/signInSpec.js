var DatabaseCleaner = require('database-cleaner');
var databaseCleaner = new DatabaseCleaner('postgresql');



describe('SOS Fixit Sign In partial', function() {

  var registerUserHelper    = require('./helpers/registerUserHelper.js');
  var signInUserHelper      = require('./helpers/signInUserHelper.js');
  var synchronizationHelper = require('./helpers/synchronizationHelper.js');

  beforeEach(function() {
    browser.get('/#/sign_in');
  });

  xdescribe('On page load of "user_sessions/new.html"', function() {

    it('Should provide fields to enter an e-mail and password', function() {
      expect(element(by.css('[type="email"]')).isDisplayed()).toBe(true);
      expect(element(by.css('[type="password"]')).isDisplayed()).toBe(true);
    });

    it('Should provide a button to sign in', function() {
      expect(element(by.css('[type="submit"]')).isDisplayed()).toBe(true);
    });
  });

  describe('Logging in', function() {

    beforeEach(function() {
      registerUserHelper.registerUser();
      synchronizationHelper.skipSync();

    });

    it('Should have created a new user and be able to sign them in', function() {
      signInUserHelper.signInUser();
      synchronizationHelper.skipSync();
      expect(browser.getCurrentUrl()).toBe('http://localhost:8080/#/');
    });
  });
});
