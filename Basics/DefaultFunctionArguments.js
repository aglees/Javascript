// Original 
function makeAjaxRequest(url, method) {
	if (!method) {
  	method = 'GET';
  }
  
  // logic to make the request
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com','GET');

// With default argument assigned
function makeAjaxRequest(url, method = 'GET') {
	return method
  // logic to make the request
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com','POST');

// can also use null
// in this case null does not get reassigned to 'GET'
makeAjaxRequest('google.com', null);

// in this case undefined will be reassigned to 'GET'
makeAjaxRequest('google.com', undefined);

// User and Admin user example
function User(id) {
	this.id = id;
}

function generateId() {
	return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
	user.admin = true;
  
  return user;
}

const user = new User(generateId())
createAdminUser(user);
user.id

