var emailField;
var passwordField;
var submitButton;
var testEmail;
var testPassword;

var signInUserHelper = function() {

  emailField    = element(by.css('[type="email"]'));
  passwordField = element(by.css('[type="password"]'));
  submitButton  = element(by.css('[type="submit"]'));
  testEmail     = 'test@test.com';
  testPassword  = 'testpassword';

  this.signInUser = function() {
    browser.get('/#/sign_in');
    emailField.sendKeys(testEmail);
    passwordField.sendKeys(testPassword);
    submitButton.click();
  };
};

module.exports = new signInUserHelper();
