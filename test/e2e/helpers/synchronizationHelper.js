var synchronizationHelper = function() {

  this.skipSync = function() {
    browser.ignoreSynchronization = true;
    browser.waitForAngular();
    browser.sleep(500);
  };

};

module.exports = new synchronizationHelper();
