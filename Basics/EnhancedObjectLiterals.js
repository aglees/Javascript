// orginal 

function createBookShop(inventory) {
	return  {
        inventory: inventory,
        inventoryValue: function() {
        return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title).price;
        }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10},
  { title: 'Eloquent JS', price: 15}  
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');
bookShop.inventory

// enhanced

function createBookShop(inventory) {
    return  {
        inventory,
        inventoryValue() {
        return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10},
  { title: 'Eloquent JS', price: 15}  
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');
bookShop.inventory


// JQuery Example
// Original
function saveFile() {
	$.ajax({ method: 'POST', url: url, data: data });
}

const url = "http://fileupload.com";
const data = { color: 'red' };

saveFile(url, data);

// enhanced
function saveFile() {
	$.ajax({ 
		url, 
    data, 
    method: 'POST' 
	});
}

const url = "http://fileupload.com";
const data = { color: 'red' };

saveFile(url, data);

