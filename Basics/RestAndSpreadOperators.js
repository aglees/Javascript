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

// defaultColors.concat(defaultColors);
[ ...defaultColors, ...userFavourites];