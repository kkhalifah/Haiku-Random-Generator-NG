var app = angular.module('haikuModule');
console.log("Factory is working");

app.factory('haikuFactory', function(){

  var fiveSyllablesFirst = ["breaking with river", "behind the water", "throughout the water,", "Sweden stops weaving.", "Panda works quickly", "admiring my yard," , "hark the sweeping taught!", "Tiger grunts aptly", "balancing my face,", "summoning my fate,", "before the sugar,", "sweeping with river", "into the water"];
  var sevenSyllables = ["fingers, Emperor admired", "China pondered happily.", "You considered the elbows", "Panda admired finally.","sounds! sounds! sweeping breaking shoe.", "fie! hark! leaving basking dog.", "Panda hunts brightly", "Brazil measured my blossoms", "Panda approved my blossoms", "Japan smiling happily.", "bright princes rejoiced quickly", "You discovered the crayons", "You imagined the flowers"];
  var fiveSyllablesLast = ["While balancing the","beside the water", "Japan stops breaking.", "admiring my face" , "into my sugar", "sounds the blowing wind!", "drat the leaving played!" , "Paris falls strangely", "under the gravel" , "behind the water", "tired princes agreed" , "under the sugar", "feeling the river"]

      function poem(){
        var line1 = fiveSyllablesFirst[Math.floor(Math.random()*fiveSyllablesFirst.length)];
        var line2 = sevenSyllables[Math.floor(Math.random()*sevenSyllables.length)];
        var line3 = fiveSyllablesLast[Math.floor(Math.random()*fiveSyllablesLast.length)];
            var finalPoem = [line1, line2, line3];
            return finalPoem;
      }

      return {
        poem:poem
      }

//       function randomLineFrom(array) {
//         console.log(array);
//           return array[randomNumber(array.length)];
//       }
//
//       function randomNumber(maxExclusive) {
//           return Math.floor(Math.random() * maxExclusive);
//       }
//
//   return {
//       getRandomFirstLine: function() {
//           return randomLineFrom(fiveSyllablesFirst);
//       },
// }

});
