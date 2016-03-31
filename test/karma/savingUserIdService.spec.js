describe('savingUserId', function(){

  beforeEach(module('SosFixit'));

  var service;

  beforeEach(inject(function($controller){
    service = $service('savingUserId');

  }));

  describe('getData', function(){
    it('returns nothing before data is set', function(){
      expect(service.getData()).toEqual('');
    });

  describe ('setData', function(){
    it('the search param initializes as empty', function(){
      expect(ctrl.searchParam).toEqual('');
    });
  });
    it('the skills list initializes as empty', function(){
      expect(ctrl.skills).toEqual([]);
    });
  });

});
