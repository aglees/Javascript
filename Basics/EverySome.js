var computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Acer', ram: 32}
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

"--- Every Array Helper ---"
computers.every(function(computer){
	return computer.ram > 16;
});
"--- Some Array Helper ---"
computers.some(function(computer){
	return computer.ram > 16;
});

var names = [
	"Alexander",
  "Matthew",
  "Joe"
];

"--- Every name longer than 4 ---"
names.every(function(name){
	return name.length > 4;
});

"--- Some name longer than 4 ---"
names.some(function(name){
	return name.length > 4;
});



