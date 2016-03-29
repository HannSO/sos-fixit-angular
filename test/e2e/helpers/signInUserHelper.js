var testEmail;
var testPassword;

var signInUserHelper = function() {

  testEmail    = 'test@test.com';
  testPassword = 'testpassword';

  this.signInUser = function() {
    browser.get('/#/sign_in');
    element(by.css('[type="email"]')).sendKeys(testEmail);
    element(by.css('[type="password"]')).sendKeys(testPassword);
    element(by.css('[type="submit"]')).click();
  };
};

module.exports = new signInUserHelper();
