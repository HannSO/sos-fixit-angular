var emailField;
var passwordField;
var passwordConfirmationField;
var locationPicker;
var submitButton;
var testEmail;
var testPassword;
var testLocation;

var registerUserHelper = function() {

  emailField                = element(by.css('[type="email"]'));
  passwordField             = element(by.model('UserCtrl.registrationForm.password'));
  passwordConfirmationField = element(by.model('UserCtrl.registrationForm.password_confirmation'));
  locationPicker            = element(by.css('[placeholder="Search Box"]'));
  submitButton              = element(by.css('[type="submit"]'));
  testEmail                 = 'test@test.com';
  testPassword              = 'testpassword';
  testLocation              = 'london';
  waitForProtractor         = browser.sleep(500);

  this.registerUser = function() {
    browser.get('/#/register');
    emailField.sendKeys(testEmail);
    passwordField.sendKeys(testPassword);
    passwordConfirmationField.sendKeys(testPassword);
    locationPicker.sendKeys(testLocation);
    waitForProtractor;
    submitButton.click();
    waitForProtractor;
  };
};

module.exports = new registerUserHelper();
