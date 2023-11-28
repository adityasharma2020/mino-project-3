const jsonData = require('./data.json');

let result;

// ========list all the food items=======================
function listAllItems(data) {
	let result = jsonData.map((item) => {
		return item.foodname;
	});

	return result;
}

// =======list all the food items with given category=======
function itemsWithCategory(data, category) {
	//check if data is valid and in correct format
	if (!data || !Array.isArray(data)) {
		console.log('Data is invalid!');
		return [];
	}

	// -------------approach 1: using forEach-------------
	// const result = [];
	// data.forEach((item) => {
	// 	if (item.category === category && item.foodname) {
	// 		result.push(item.foodname);
	// 	}
	// });
	// return result;

	//--------------approach 2: using filter and map-----------
	return data
		.filter((item) => item.category === category && item.foodname)
		.map((item) => item.foodname);
}

function itemsGreaterThanGivenCalories(data, calories) {
	return data.filter((item) => item.calorie > calories);
}
function itemsLessThanGivenCalories(data, calories) {
	return data.filter((item) => item.calorie < calories);
}

function itemsHighestToLowestProtein(data) {
	// approach 1: bubble sort
	// for (let i = 0; i < data.length; i++) {
	// 	for (let j = i + 1; j < data.length; j++) {
	// 		if (data[i].protiens < data[j].protiens) {
	// 			let temp = data[i];
	// 			data[i] = data[j];
	// 			data[j] = temp;
	// 		}
	// 	}
	// }

	// return data;

	// approach 2: sort method
	return data.sort((item1, item2) => item2.protiens - item1.protiens);
}

function itemsLowestToHighestCab(data) {
	// approach 1: bubble sort
	// for (let i = 0; i < data.length; i++) {
	// 	for (let j = i + 1; j < data.length; j++) {
	// 		if (data[i].cab > data[j].cab) {
	// 			let temp = data[i];
	// 			data[i] = data[j];
	// 			data[j] = temp;
	// 		}
	// 	}
	// }
	// return data;
	// approach 2 : sort method
	return data.sort((item1, item2) => item1.cab - item2.cab);
}

result = listAllItems(jsonData);
console.log('All food items:', result);
console.log('================================================================');

result = itemsWithCategory(jsonData, 'Vegetable');
console.log('items with category vegetable:', result);
console.log('================================================================');

result = itemsWithCategory(jsonData, 'Fruit');
console.log('items with category fruit:', result);
console.log('================================================================');

result = itemsWithCategory(jsonData, 'Protein');
console.log('items with category protein:', result);
console.log('================================================================');

result = itemsWithCategory(jsonData, 'Nuts');
console.log('items with category nuts:', result);
console.log('================================================================');

result = itemsWithCategory(jsonData, 'Grain');
console.log('items with category Grain:', result);
console.log('================================================================');

result = itemsWithCategory(jsonData, 'Dairy');
console.log('items with category dairy:', result);
console.log('================================================================');

result = itemsGreaterThanGivenCalories(jsonData, 100);
console.log('items greater than 100 calories:', result);
console.log('================================================================');

result = itemsLessThanGivenCalories(jsonData, 100);
console.log('items Less than 100 calories:', result);
console.log('================================================================');

result = itemsHighestToLowestProtein(jsonData);
console.log('items with highest protein to lowest content:', result);
console.log('================================================================');

result = itemsLowestToHighestCab(jsonData);
console.log('items with lowest Cab to highest:', result);
console.log('================================================================');
