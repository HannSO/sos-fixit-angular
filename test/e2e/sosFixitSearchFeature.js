describe('SOS Fixit Search', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('allows you to search by skill', function() {
    var skills = element(by.model('skills')).sendKeys('Plumbing');
    element(by.id('skillSearchSubmit')).click();
    expect(element(by.id('bob')).getText()).toBe('Bob The Builder');
  });
});
