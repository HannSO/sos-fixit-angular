describe('SOS Fixit Register partial', function() {

  var emailField                = element(by.css('[type="email"]'));
  var passwordField             = element(by.css('[name="password"]'));
  var passwordConfirmationField = element(by.css('[name="password_confirmation"]'));
  var locationField             = element(by.css('[placeholder="Location Search"]'));
  var mapImage                  = element(by.css('ui-gmap-google-map'));
  var submitButton              = element(by.css('[type="submit"]'));


  beforeEach(function() {
    browser.get('/#/register');
  });

  describe('On page load', function() {

    it('Should provide fields for a user to enter their details', function() {
      expect(emailField.isDisplayed()).toBe(true);
      expect(passwordField.isDisplayed()).toBe(true);
      expect(passwordConfirmationField.isDisplayed()).toBe(true);
      expect(locationField.isDisplayed()).toBe(true);
    });

    it('Should display a map', function() {
      expect(mapImage.isDisplayed()).toBe(true);
    });
  });
});
