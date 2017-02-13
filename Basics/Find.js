function Car(model) {
	this.model = model;
}

var cars = [
	new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function(car){
	return car.model === 'Focus'
});


var posts = [
  {id: 1, title: 'New Post'},
  {id: 2, title: 'Old Post'},
];

var comment = { postId: 1, content: 'Great Post'};

function postForComment(posts, comment) {
  return posts.find(function(post){
  	return post.id === comment.postId;
    });
}

postForComment(posts, comment);

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria) {
	var key = Object.keys(criteria)[0]
  var value =  criteria[key]
  
  return array.find(function(item){
  	return item[key] === value
  });
}

findWhere(ladders, { height: 25 });