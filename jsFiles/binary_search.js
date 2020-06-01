function binary_search(list, item) {
	
	let low = 0,
		hight = list.length - 1;

	while(low <= hight) {
		let mid = Math.round((low + hight)/2);
			guess = list[mid];

		if(guess == item) 
			return mid;

		if(guess > item)
			hight = mid - 1;

		else low = mid + 1; 	
	}
}
// test coment
let array = [1, 3, 4, 5, 8, 9, 11, 13, 14, 15,16 ,17, 19, 21, 23, 25];
binary_search(array, 3);