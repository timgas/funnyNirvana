let dictionary = Object.create(null, {
	toString: {
		value: function() {
    	return Object.keys(this).join();
	  }
	}
})

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let prop in dictionary) {
	alert(prop);
}

alert(dictionary);