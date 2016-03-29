var DatabaseCleaner = require('database-cleaner');
var databaseCleaner = new DatabaseCleaner('postgresql');

describe('SOS Fixit Sign In partial', function() {

  var email;
  var password;
  var registerUserHelper = require('./helpers/registerUserHelper.js');
  var signInUserHelper = require('./helpers/signInUserHelper.js');

  beforeEach(function() {
    browser.get('/#/sign_in');
  });

  describe('On page load of "user_sessions/new.html"', function() {

    it('Should provide fields to enter an e-mail and password', function() {
      expect(element(by.css('[type="email"]')).isDisplayed()).toBe(true);
      expect(element(by.css('[type="password"]')).isDisplayed()).toBe(true);
    });

    it('Should provide a button to sign in', function() {
      expect(element(by.css('[type="submit"]')).isDisplayed()).toBe(true);
    });
  });

  describe('Logging in', function() {

    // beforeEach(function() {
    //   registerUserHelper.registerUser();
    // });

    it('Should register a new user', function() {
      registerUserHelper.registerUser();
      browser.ignoreSynchronization = true;
      browser.waitForAngular();
      browser.sleep(500);
      expect(browser.getCurrentUrl()).toBe('http://localhost:8080/#/');
    });

    describe('Signing that user in', function() {

      it('Should have created a new user and be able to sign them in', function() {
        signInUserHelper.signInUser();
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.sleep(500);
        expect(browser.getCurrentUrl()).toBe('http://localhost:8080/#/');
      });
    });
  });
});
