describe('SOS Fixit Register partial,', function() {

  var registerUserHelper    = require('./helpers/registerUserHelper.js');
  var synchronizationHelper = require('./helpers/synchronizationHelper.js');

  var emailField                = element(by.css('[type="email"]'));
  var passwordField             = element(by.css('[name="password"]'));
  var passwordConfirmationField = element(by.css('[name="password_confirmation"]'));
  var locationField             = element(by.css('[placeholder="Location Search"]'));
  var longitudeField            = element(by.css('[name="longitude"]'));
  var latitudeField             = element(by.css('[name="latitude"]'));
  var mapImage                  = element(by.css('ui-gmap-google-map'));
  var welcomeMessage            = element(by.id('welcomeUser'));
  var registerButton            = element(by.css('[type="submit"]'));


  beforeEach(function() {
    browser.get('/#/register');
  });

  describe('on page load,', function() {

    it('should provide fields for a user to enter their details', function() {
      expect(emailField.isDisplayed()).toBe(true);
      expect(passwordField.isDisplayed()).toBe(true);
      expect(passwordConfirmationField.isDisplayed()).toBe(true);
      expect(locationField.isDisplayed()).toBe(true);
      expect(registerButton.isDisplayed()).toBe(true);
    });

    it('should display a map', function() {
      expect(mapImage.isDisplayed()).toBe(true);
    });

    it('should not display input fields for longitude and latitude, but they should be present', function() {
      expect(longitudeField.isPresent()).toBe(true);
      expect(latitudeField.isPresent()).toBe(true);
      expect(longitudeField.isDisplayed()).toBe(false);
      expect(latitudeField.isDisplayed()).toBe(false);
    });
  });

  describe('registering a user', function() {

    beforeEach(function() {
      registerUserHelper.registerUser();
      synchronizationHelper.skipSync();
    });

    it('should take them to their personal page once successfully registed', function() {
      expect(browser.getCurrentUrl()).toBe('http://localhost:8080/#/');
      // expect(welcomeMessage).toBe('Welcome test@test.com');
    });
  });
});
