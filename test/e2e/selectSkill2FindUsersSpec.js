describe('SOS Fixit search skills feature', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  describe('on page load', function() {

    it('allows skills to be selected and provides a button to search them', function() {
      expect(element(by.id('skillSelectorButtons')).isPresent()).toBe(true);
      expect(element(by.id('skillSearchSubmit')).isDisplayed()).toBe(true);
      expect(element(by.id('skillSearchSubmit')).getText()).toContain('Search');
      expect(element(by.id('listUsersWithSelectedSkills')).isPresent()).toBe(true);
      expect(element(by.id('listUsersWithSelectedSkills')).isDisplayed()).toBe(false);
    });

    describe('on submiting an empty search', function() {



      it('doesn\'t display a list of users', function() {
        expect(element(by.id('listUsersWithSelectedSkills')).isPresent()).toBe(true);
        expect(element(by.id('listUsersWithSelectedSkills')).isDisplayed()).toBe(false);
      });

    });
  });
});
