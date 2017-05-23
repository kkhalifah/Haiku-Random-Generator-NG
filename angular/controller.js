
//module
  var app = angular.module('haikuModule', []);
//controller
app.controller('haikuController', function($scope, haikuFactory, $http){
  console.log("controller is connected");
  $scope.addLine = function (line){
    console.log(line);
    //method
    //line or lines?
    haikuFactory.setLine(line);
  //  $location.path('/output')
  }

 };
});


//what is $location to partial?
//app.controller('formControl', function($scope , madFactory, $location){
// });

(function() { // <-- It's an IIFE
var app = angular.module("sixYearOldApp", []); // create the module

// Angular auto-"magically" injects our service called "tempConverterService".
app.controller("sixYearOldController", function($scope, randomService) {
    $scope.words = [];

    $scope.addWord = function() {
        $scope.words.push({
            text: randomService.getRandomWord()
        });
    };

    $scope.addDecoratedWord = function() {
        $scope.words.push({
            text: randomService.getRandomWord(),
            clss: randomService.getRandomClass()
        });
    };

    $scope.addWords = function() {
        for (var i = 0; i < randomService.getRandomNumberOfWords(); i++) {
            $scope.addWord();
        }
    }

    $scope.addDecoratedWords = function() {
        for (var i = 0; i < randomService.getRandomNumberOfWords(); i++) {
            $scope.addDecoratedWord();
        }
    }
});

})();
