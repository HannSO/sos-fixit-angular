var DatabaseCleaner = require('database-cleaner');
var databaseCleaner = new DatabaseCleaner('postgresql');

describe('SOS Fixit Sign In partial', function() {

  var email;
  var password;
  var registerUserHelper = require('./helpers/registerUserHelper.js');

  beforeEach(function() {
    browser.ignoreSynchronization = true;
    email = 'joe_wroe@icloud.com';
    password = 'password';
    browser.get('/#/sign_in');
    element(by.id('email')).sendKeys(email);
    element(by.id('password')).sendKeys(password);
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

    it('Should have created a new user and signed them in', function() {
      browser.get('/#/register');
      element(by.css('[type="email"]')).sendKeys('test@test.com');
      element(by.css('[type="email"]')).getText().then(function(text) {
        console.log('found text "' + text + '" at id="registerLink"');
      });
      // expect(browser.getCurrentUrl()).toBe('http://localhost:8080/#/');
    });
  });
});
