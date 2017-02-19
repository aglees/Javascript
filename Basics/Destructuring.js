// ES5 code
var expense = {
	type: 'Business',
  amount: '$45 USD'
};

var type = expense.type;
var amount = expense.amount;

type;
amount;

// ES6 code
var expense = {
	type: 'Business',
  amount: '$45 USD'
};

// a bit like tuple unpacking, but using a dictionary as the source
// variables must be same name as the properties being referenced
const { type, amount } = expense;
type;
amount;

// ES5 code
var savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary(file) {
	return `The file ${file.name}.${file.extension} is of size ${file.size}`;
}

fileSummary(savedFile)

// ES6 code
var savedFile = {
	extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary( { name, extension, size }) {
	return `The file ${name}.${extension} is of size ${size}`;
}

fileSummary(savedFile)

// this is how additional variables can be passed being
var savedFile = {
	extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary( { name, extension, size }, { color }) {
	return `The file ${name}.${extension} is of size ${size} and color ${color}`;
}

fileSummary(savedFile, { color: 'red'} )

// destructuring and arrays
const companies = [
	'Google',
    'Facebook',
    'Uber'
];

const [ name, name2, name3, name4 ] = companies;
const { length } = companies
const firstCompany = companies[0];

name;
name2;
name3;
typeof name4;
firstCompany
length

const [name, name2, ...rest] = companies;
name
name2
rest

// another example, but with objects
const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

var location = companies[0].location
location

//lets do the same thing with destructuring
const [ { location } ] = companies;
location

// get the second item
const [ , { name, location } ] = companies;
name
location

// how about getting the first element from the locations property?
const Google = {
	locations: ['Mountain View', 'New York', 'London']
};

const { locations:[location] } = Google;
location 

// how about a user signup function

function signup( { username, password, email, dateOfBirth, city } ) {
	// create new user code goes here
}

const user = {
	username: 'andrew',
    password: 'mypassword',
    email: 'myemail@address.com',
    dateOfBirth: '1/1/1990',
    city: 'London' 
};

signup(user);

// destructuring arrays ...again!
// out original object
const points = [
 	[4, 5],
    [10, 1],
    [0, 40]
];

// we want it to look like this
[
  {x: 4, y: 5},
  {x: 10, y: 1},
  {x: 0, y: 40}
];

points.map(([x, y]) => {
	return {x, y}; 
});

