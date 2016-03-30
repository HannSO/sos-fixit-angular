describe('SOS Fixit Sign In partial', function() {

  var registerUserHelper    = require('./helpers/registerUserHelper.js');
  var signInUserHelper      = require('./helpers/signInUserHelper.js');
  var synchronizationHelper = require('./helpers/synchronizationHelper.js');

  var emailField    = element(by.css('[type="email"]'));
  var passwordField = element(by.css('[type="password"]'));
  var submitButton  = element(by.css('[type="submit"]'));

  beforeEach(function() {
    browser.get('/#/sign_in');
  });

  describe('On page load of "user_sessions/new.html"', function() {

    it('Should provide fields to enter an e-mail and password', function() {
      expect(emailField.isDisplayed()).toBe(true);
      expect(passwordField.isDisplayed()).toBe(true);
    });

    it('Should provide a button to sign in', function() {
      expect(submitButton.isDisplayed()).toBe(true);
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
