// cat constructor
function cat(name, weight, personality, appetite, color){
  this.name = name;
  this.weight = weight;
  this.personality = personality;
  this.appetite = appetite;
  this.color = color;
}

// new cat objects
var twitchy = new cat('Twitchy', 20, 'coi', 'hungry', 'brown');
var ruffles = new cat('Ruffles', 11, 'shy', 'not hungry', 'black');
var dusty = new cat('Dusty', 13, 'sleepy', 'not hungry', 'yellow');

// cat array with all the cat objects
var catArray = [twitchy, ruffles, dusty];

// just in case you want to sort them by weight
/*catArray.sort(function(a, b) {
  return b.weight - a.weight;
});
*/

// write h1s to body containing the name and personality of each cat.
(function catHeaders(cats) {
  for (i = 0; i < cats.length; i++) {
    var h1 = document.createElement('h1');
    h1.innerHTML = 'This cat is named ' + cats[i].name + ' and he is a ' + cats[i].personality + ' cat.';
    h1.style.color = cats[i].color;
    document.body.append(h1);
  }
})(catArray);

// check to see if the cats need fed based on their hunger
(function checkHunger(cats) {
  for (i = 0; i < cats.length; i++) {
    if (cats[i].appetite == 'hungry') {
      console.log(cats[i].name + ' needs fed.');
    }
    else {
      console.log(cats[i].name + ' does not need fed.');
    }
  }
})(catArray);
