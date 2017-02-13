const add = function(a,b) {
	return a + b;
}
add(1, 2);

const arrowAdd = (a,b) => { return a + b }
arrowAdd(3,5)

const arrowAdd2 = (a,b) => a + b;
arrowAdd2(23,5)

const double = (number1, number2) => 2 * number1 + 2 * number2
double(16,16)

numbers.map(function(number){
	return number * 2
});

numbers.map(number => number * 2)

// Dealing with issues around this and scope

// using bind
const team = {
	members: ['Jane', 'Bill'],
  	teamName: 'Super Squad',
  	teamSummary: function(){
  		return this.members.map(function(member){
    		return `${member} is on team ${this.teamName}`;
    	}.bind(this));
  	}
};

team.teamSummary();

// using var self = this
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function(){
    var self = this;
  	return this.members.map(function(member){
    	return `${member} is on team ${self.teamName}`;
    });
  }
};

team.teamSummary();

// using fat arrow function
const team = {
	members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function(){
    	return this.members.map((member) => {
    	return `${member} is on team ${this.teamName}`;
    });
  }
};

team.teamSummary();


// example of big arrow not being suitable
const profile = {
    name: 'Alex',
    getName: function() { return this.name; } 
};

profile.getName()



