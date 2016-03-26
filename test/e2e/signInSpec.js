describe('SOS Fixit Sign In partial', function() {

  var email;
  var password;

  beforeEach(function() {
    email = 'joe_wroe@icloud.com';
    password = 'password';
    browser.get('/#/sign_in');
    element(by.id('email')).sendKeys(email);
    element(by.id('password')).sendKeys(password);
  });

  describe('On page load of "user_sessions/new.html"', function() {

    it('Should provide fields to enter an e-mail and password', function() {
      expect(element(by.css('[type="email"]')).isDisplayed()).toBe(true);
      expect(element(by.css('[type="password"]')).isDisplayed()).toBe(true);
    });

    it('Should provide a button to sign in', function() {

    });
  });
});
