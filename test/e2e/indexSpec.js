xdescribe('SOS Fixit homepage', function() {

  beforeEach(function() {
    browser.get('/#');
  });

  describe('On page load of "index.html"', function() {

    it('Should display the correct title', function() {
      expect(browser.getTitle()).toBe('SOS Fixit');
    });

    it('Should provide options to sign in and register', function() {
      expect(element(by.id('signInLink')).isDisplayed()).toBe(true);
      element(by.id('signInLink')).getText().then(function(text) {
        console.log('found text "' + text + '" at id="signInLink"');
      });
      expect(element(by.id('registerLink')).isDisplayed()).toBe(true);
      element(by.id('registerLink')).getText().then(function(text) {
        console.log('found text "' + text + '" at id="registerLink"');
      });
    });

    it('Should not think any users are signed in', function() {
      expect(element(by.id('welcomeUser')).isDisplayed()).toBe(false);
    });
  });

  describe('Selection of links on page', function() {

    it('Loads the "new.html" view from "user_sessions"', function() {
      element(by.linkText('Sign in')).click();
      expect(browser.getCurrentUrl()).toContain('/sign_in');
    });

    it('Loads the "new.html" view from "user_registrations"', function() {
      element(by.linkText('Register')).click();
      expect(browser.getCurrentUrl()).toContain('/register');
    });
  });

});
