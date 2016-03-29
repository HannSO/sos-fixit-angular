describe('searchController', function(){

  beforeEach(module('SosFixit'));

  var ctrl;

//   beforeEach(module('stateMock'));
//
// // Initialize the controller and a mock scope
//   beforeEach(inject(function ($state){ //other vars as needed {
//       state = $state;
//       //initialize other stuff
//   }));



  beforeEach(inject(function($controller){
    ctrl = $controller('searchController');
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


    // move to protractor
  // describe('#getSkillsList', function(){
  //
  //   var httpBackend;
  //
  //   beforeEach(inject(function($httpBackend){
  //     httpBackend = $httpBackend;
  //     httpBackend
  //     .whenGET("http://localhost:3000/skills")
  //     .respond(
  //       {skills:"Bike repair"}
  //     );
  //   }));
  //
  //   it('sets ctrl.skills to be the skills returned by api', function(){
  //     // state.expectTransitionTo('/');
  //     ctrl.getSkillsList();
  //     httpBackend.flush();
  //     expect(ctrl.skills.skills).toEqual('Bike repair');
  //   });
  //
  //
  // });
  //
  // describe('#getUserSkills', function(){
  //
  //   var httpBackend;
  //
  //
  //
  //   beforeEach(inject(function($httpBackend){
  //     ctrl.searchParam = 3;
  //     httpBackend = $httpBackend;
  //     httpBackend
  //     .when("GET", "http://localhost:3000/skills/")
  //     .respond(
  //       { users: 'John'}
  //     );
  //   }));
  //
  //   it('sets ctrl.user to be set to api response', function(){
  //     ctrl.getSkillsList();
  //     httpBackend.flush();
  //     expect(ctrl.users).toEqual('John');
  //   });
  //
  //
  // });


});
