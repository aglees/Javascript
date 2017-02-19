function addNumbers(numbers){
	return numbers.reduce((sum, number) => {
  	return sum + number;
  }, 0);
}
                        
addNumbers([1,2,3,4,5]);

// what if we want to have arbitarily more args?
function addNumbers(a,b,c,d,e){
  const numbers = [a,b,c,d,e]
	return numbers.reduce((sum, number) => {
  	return sum + number;
  }, 0);
}
                        
addNumbers(1,2,3,4,5);

// how can we do this better, as this doesn't work
function addNumbers(...numbers){
  return numbers.reduce((sum, number) => {
  	return sum + number;
  }, 0);
}

//spread operators
const defaultColors = ['red','green'];
const userFavourites = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

// defaultColors.concat(defaultColors);
["blue", ...fallColors, ...defaultColors, ...userFavourites ];

//shopping list example
function validateShoppingList(...items) {
	if (items.indexOf('milk') < 0) {
  	return ['milk', ...items ];
  }
  
  return items
}

validateShoppingList('oranges','bread','eggs')

//example of a math library where we have a bad name for a function, and need to 
// create an alias for the old function
const MathLibrary = {
	calculateProducts(a ,b) {
  	return a * b;
  },
  multiply(a, b) {
		return a * b;
	}
};

MathLibrary.multiply(5,4);

const MathLibrary = {
	calculateProducts(...rest) {
  	console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
		return a * b;
	}
};

MathLibrary.calculateProducts(5,4);


//Test question
function unshift(array, ...numbers) {
  return [...numbers, ...array];
}

unshift(['a','b'],1,2,3,4,5);

