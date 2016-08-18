
for (i = 5; i <= 120; i += 10) {
  console.log("going up: " + i);
};


for (var i = 4096; i > 1; i /= 2) {
	console.log("going down: " + i);
};

var prez = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe"]
var order = [1, 2, 3, 4, 5];
	for (var i = 0; i < prez.length; i++) {
		for(var t = 0; t < order.length; t++){

		}
		console.log("President", order[i], prez[i]);
	};


var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var key in antSpecies) {
	console.log("ant species", key);
};


