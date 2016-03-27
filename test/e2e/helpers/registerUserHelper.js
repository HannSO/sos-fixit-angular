var testEmail;
var testPassword;

var registerUserHelper = function() {

  testEmail    = 'test@test.com';
  testPassword = 'testpassword';

  this.registerUser = function() {
    browser.get('/#/register');
    element(by.css('[type="email"]')).sendKeys(testEmail);
    element(by.model('registrationForm.password')).sendKeys(testPassword);
    element(by.model('registrationForm.password_confirmation')).sendKeys(testPassword);
    element(by.css('[type="submit"]')).click();
  };

};

module.exports = new registerUserHelper();
