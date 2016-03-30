var registerUserHelper = function() {

  var emailField                = element(by.css('[type="email"]'));
  var passwordField             = element(by.model('UserCtrl.registrationForm.password'));
  var passwordConfirmationField = element(by.model('UserCtrl.registrationForm.password_confirmation'));
  var locationPicker            = element(by.css('[placeholder="Location Search"]'));
  var submitButton              = element(by.css('[type="submit"]'));
  var testEmail                 = 'test@test.com';
  var testPassword              = 'testpassword';
  var testLocation              = 'london';
  var waitForProtractor         = browser.sleep(600);

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
