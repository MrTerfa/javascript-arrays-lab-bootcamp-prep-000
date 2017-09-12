const app = "I don't do much."
var kittens = ['Milo','Otis','Garfield'];
var destructivelyAppendKitten = function(name){
  kittens.push(name);
  return kittens
}

var destructivelyPrependKitten = function(name){
  kittens.shift(name);
  return kittens
}
