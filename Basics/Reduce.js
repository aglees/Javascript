var numbers = [10,20,30];
var sum = 0;

sum = numbers.reduce(function(sum, number){
	return sum + number;
}, 0);

var primaryColors = [
  {color: 'red'},
  {color: 'yellow'},
  {color: 'blue'}
];

var list = []

primaryColors.reduce(function(list,color){
	list.push(color.color);
	return list
}, []);

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(total, desk) {
    if (desk.type == 'sitting') { ++total.sitting; }
    if (desk.type == 'standing') { ++total.standing; }
 		return total
}, { sitting: 0, standing: 0 });

deskTypes

var numbers = [1, 1, 2, 3, 4, 4, 6];

function unique(array) {
  var result = array.reduce(function(output, element){
  	
    if (!output.find(function(item){ return item === element; })) 
    	{ output.push(element); }
    return output;
  
  },[]);
  
  return result;
}

unique(numbers);

