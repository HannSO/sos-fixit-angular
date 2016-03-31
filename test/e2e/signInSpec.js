describe('SOS Fixit Sign In partial', function() {

  var signInUserHelper      = require('./helpers/signInUserHelper.js');
  var synchronizationHelper = require('./helpers/synchronizationHelper.js');

  var emailField    = element(by.css('[type="email"]'));
  var passwordField = element(by.css('[type="password"]'));
  var submitButton  = element(by.css('[type="submit"]'));

  beforeEach(function() {
    browser.get('/#/sign_in');
  });

  describe('On page load', function() {

    it('Should provide fields to enter an e-mail and password', function() {
      expect(emailField.isDisplayed()).toBe(true);
      expect(passwordField.isDisplayed()).toBe(true);
    });

    it('Should provide a button to sign in', function() {
      expect(submitButton.isDisplayed()).toBe(true);
    });
  });

  describe('Log in', function() {

    it('should be able to sign a user in', function() {
      signInUserHelper.signInUser();
      synchronizationHelper.skipSync();
      expect(browser.getCurrentUrl()).toBe('http://localhost:8080/#/');
    });
  });
});
