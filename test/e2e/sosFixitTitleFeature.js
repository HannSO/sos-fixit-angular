describe('SOS Fixit Title Page', function(){

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('on page load', function(){
    expect(browser.getTitle()).toEqual('SOS Fixit');
    expect(element(by.id("welcome")).getText()).toBe("Hello World");
  });

});
