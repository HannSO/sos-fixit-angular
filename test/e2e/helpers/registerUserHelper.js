var emailField;
var testEmail;
var passwordField;
var passwordConfirmationField;
var testPassword;
var locationPicker;

var registerUserHelper = function() {

  locationPicker = element(by.css('[placeholder="Search Box"]'));
  testEmail      = 'test@test.com';
  testPassword   = 'testpassword';
  testLocation   = 'london';

  this.registerUser = function() {
    browser.get('/#/register');
    element(by.css('[type="email"]')).sendKeys(testEmail);
    element(by.model('UserCtrl.registrationForm.password')).sendKeys(testPassword);
    element(by.model('UserCtrl.registrationForm.password_confirmation')).sendKeys(testPassword);
    locationPicker.sendKeys(testLocation);
    element(by.css('[type="submit"]')).click();
  };
};

module.exports = new registerUserHelper();
