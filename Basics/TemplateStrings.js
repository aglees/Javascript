function getMessage() {
	const year = new Date().getFullYear();
  
  return `the year is ${year}`;
}

getMessage();

function getMessage() {
	const year = new Date().getFullYear();
  
  return `the year is ${year - 1}`;
}

getMessage();

function getMessage() {
	const year = new Date().getFullYear();
  
  return `the year is ${new Date().getFullYear()}`;
}

getMessage();


function getMessage() {
  const year = new Date().getFullYear();
  return `the year is ${year}`;
}

getMessage();


const device_id = 4;
const guid = 20;
const username = "hello";

const data = `{"device_id": "${device_id}", "guid": "${guid}", "username": "${username}"}`;
data

const year = 2016;
const yearMessage = `The year is ${year}`;
yearMessage

function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

doubleMessage(4)

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

fullName('Andrew','Gleeson')
