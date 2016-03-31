var signInUserHelper = function() {

  var emailField    = element(by.css('[type="email"]'));
  var passwordField = element(by.css('[type="password"]'));
  var submitButton  = element(by.css('[type="submit"]'));
  var testEmail     = 'test@test.com';
  var testPassword  = 'testpassword';

  this.signInUser = function() {
    browser.get('/#/sign_in');
    emailField.sendKeys(testEmail);
    passwordField.sendKeys(testPassword);
    submitButton.click();
  };
};

module.exports = new signInUserHelper();
