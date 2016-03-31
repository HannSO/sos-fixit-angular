describe('SOS Fixit homepage', function() {

  var signInLink        = element(by.id('signInLink'));
  var registerLink      = element(by.id('registerLink'));
  var greeting          = element(by.id('welcomeUser'));
  var waitForProtractor = browser.sleep(5000);

  beforeEach(function() {
    browser.get('/#');
  });

  describe('On page load of "index.html"', function() {

    it('Should display the correct title', function() {
      expect(browser.getTitle()).toBe('SOS Fixit');
    });

    it('Should provide options to sign in and register', function() {
      expect(signInLink.isDisplayed()).toBe(true);
      signInLink.getText().then(function(text) {
        console.log('found text "' + text + '" at id="signInLink"');
      });
      expect(registerLink.isDisplayed()).toBe(true);
      element(registerLink.getText().then(function(text) {
        console.log('found text "' + text + '" at id="registerLink"');
      }));
    });

    it('Should not think any users are signed in', function() {
      expect(greeting.isDisplayed()).toBe(false);
    });
  });

  describe('Selection of links on page', function() {

    it('Loads the "new.html" view from "user_sessions"', function() {
      signInLink.click();
      expect(browser.getCurrentUrl()).toContain('/sign_in');
    });

    it('Loads the "new.html" view from "user_registrations"', function() {
      registerLink.click();
      expect(browser.getCurrentUrl()).toContain('/register');
    });
  });
});
