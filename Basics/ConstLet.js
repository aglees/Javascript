function count(targetString) {
	
  const characters = ['a','e','i','o','u'];
  let number = 0;
	
  number = targetString.split("").reduce(function(total, char){
  	if( characters.find(function(character){ return char == character }) )
       { ++total; }
    return total
  }, 0);
  
  return number
}

count('dacfvgyinjsvdkolalscvapvnwrh');