Function.prototype.defer = function(ms) {
	let func = this;
  return function(a, b) {
   setTimeout(() => func(a, b), ms);
  }
}


f.defer(1000)(13, 2);