describe('SearchController', function(){
  beforeEach(module('SosFixit'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('SearchController');
  }));

  describe ('attribute thingies initialize as', function(){
    it('the users initalizes as empty', function(){
      expect(ctrl.users).toEqual([]);
    });
    it('the search param initializes as empty', function(){
      expect(ctrl.searchParam).toEqual('');
    });
    it('the skills list initializes as empty', function(){
      expect(ctrl.skills).toEqual([]);
    });

  });

  describe('#getSkillsList', function(){

    var httpBackend;

    beforeEach(inject(function($httpBackend){
      httpBackend = $httpBackend;
      httpBackend
      .when("GET", "http://localhost:3000/skills")
      .respond(
        { skills: "Bike repair"}
      );
    }));

    it('sets ctrl.skills to be the skills returned by api', function(){
      ctrl.getSkillsList();
      httpBackend.flush();
      expect(ctrl.skills.skills).toEqual('Bike repair');
    });


  });

  describe('#getUserSkills', function(){

    var httpBackend;

    ctrl.searchParam = 3;

    beforeEach(inject(function($httpBackend){
      httpBackend = $httpBackend;
      httpBackend
      .when("GET", "http://localhost:3000/skills/" + ctrl.searchParam + "/users")
      .respond(
        { users: 'John'}
      );
    }));

    it('sets ctrl.user to be set to api response', function(){
      ctrl.getSkillsList();
      httpBackend.flush();
      expect(ctrl.users).toEqual('John');
    });


  });


});
