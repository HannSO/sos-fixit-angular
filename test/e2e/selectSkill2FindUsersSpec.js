describe('SOS Fixit search skills feature', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  describe('on page load', function() {

    it('allows skills to be selected and provides a button to search them', function() {
      expect(element(by.id('skillSearchSubmit')).isDisplayed()).toBe(true);
      expect(element(by.id('skillSearchSubmit')).getText()).toContain('Search');
    });
  });
});
