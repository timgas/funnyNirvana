let hamster = {
  stomach: [],

  eat(food) {
  	if (this.hasOwnProperty('eat')) {
      this.stomach += food;
  	} else {
  		this.arr = [];
  		this.arr.push(food);
  	}
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};