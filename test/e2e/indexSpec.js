describe('SOS Fixit', function() {

  describe('On page load of "index.html"', function() {

    it('Should display the correct title', function() {
      browser.get('/#');
      expect(browser.getTitle()).toBe('SOS Fixit');
    });
  });

});
