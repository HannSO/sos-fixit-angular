describe('SOS Fixit', function() {

  beforeEach(function() {
    browser.get('/#');
  });

  describe('On page load of "index.html"', function() {

    it('Should display the correct title', function() {
      expect(browser.getTitle()).toBe('SOS Fixit');
    });
  });

});
