(function(){
  'usse strict';// used to strict the creation of any variable in global scop


  angular.module('myFirstApp',[])

  .controller('MyFirstController', function($scope){
    $scope.name="hanaa";
    $scope.sayHello=function(){
      return "Hello Coursera!";
    };

  });
})();
