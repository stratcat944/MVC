// List of all foodItem instances
var allFoods = [];

// This will be our base class for our model
var FoodItem = function(name, flavor, image){
	this.name = name;
	// Bananas Foster - won't work, two words.
	this.slug = name.trim().toLowerCase().replace(/ /g, '-');
	this.flavor = flavor;
	this.image = image;

}
// Bananas Foster

var addFood = function(name, flavor, image){
	var newFood = new FoodItem(name, flavor, image)
	allFoods.push(newFood)
}

addFood('Pizza', 'Savory', 'http://slice.seriouseats.com/images/20071024pizzerialamozzer-thumb.jpg');

addFood('Cake', 'Delicious', 'http://static.guim.co.uk/sys-images/music/Pix/pictures/2009/5/22/1242985956697/Morrissey-with-birthday-c-002.jpg');

addFood('Turkey', 'Fowl', 'http://pixel.nymag.com/imgs/daily/grub/2015/02/03/03-morrissey-turkey.w750.h560.2x.jpg');

addFood('Toast', 'blasphemous', 'http://blog.blazingangles.net/soapbox/images/muhammed-toast.jpg')

var foodFind = function(slug){
	return allFoods.filter(function(element){
		return element.slug === slug
	})[0]
}

var foodDelete= function(slug){

	for(var  i = 0; i < allFoods.length; i++) {
		if(allFoods[i].slug === slug) {
			allFoods.splice(i, 1);
			return
		}
	}
}


module.exports = {
	allFoods 	: allFoods,
	addFood 	: addFood,
	FoodItem 	: FoodItem,
	foodFind 	: foodFind,
	foodDelete 	: foodDelete
}

