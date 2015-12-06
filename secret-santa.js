var participants = ["A", "B", "C", "D", "E"];
var remainingParticipants = participants.slice(0);
var draw = [];

var removeElementFromArray = function(array, elementToRemove) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] != elementToRemove) {
      arr.push(array[i]);
    }
  }
  return arr;
};

// calculate random number
var calculateRandomIndex = function(tempPartsArray) {
  var rand = Math.random();
  var factor = tempPartsArray.length - 1;
  var realIndex = rand * factor;
  var randomIndex = Math.ceil(rand * factor);
  console.log("rand: " + rand + ", factor: " + factor + ", realIndex: " + realIndex + ", randomIndex:" + randomIndex);
  return randomIndex;
}

var randomIndex = -1,
  randomPart = "";
for (var i = 0; i < participants.length; i++) {
  var tempPartsArray = removeElementFromArray(remainingParticipants, participants[i]);

  randomIndex = calculateRandomIndex(tempPartsArray);
  randomPart = tempPartsArray[randomIndex];

  $("#result").append("<p>" + participants[i] + " =====> " + randomPart + "</p>")

  // on ajoute le participant au tableau des tirages + et on retire le participant tiré des participants restants
  draw.push(randomPart);


  //remainingParticipants.pop(randomPart);
  remainingParticipants = removeElementFromArray(remainingParticipants, randomPart);
}

console.dir(draw);
