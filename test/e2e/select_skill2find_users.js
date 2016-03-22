describe('SOS Fixit Search', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('allows you to search by skill', function() {
    element(by.id('skillSearchSubmit')).click();
  });
});
