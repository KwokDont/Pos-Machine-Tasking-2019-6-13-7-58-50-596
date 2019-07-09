const isBarcodeExist = require('../js-workspace/createReceipt');

// it('should return the menu collection when invoke getMenuFromDB',()=>{
// 	//given
// 	//when
// 	//then
// 	expect(getMenuFromDB()).toStrictEqual([
//     {"id": "0001", "name" : "Coca Cola", "price": 3},
//     {"id": "0002", "name" : "Diet Coke", "price": 4},
//     {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
//     {"id": "0004", "name" : "Mountain Dew", "price": 6},
//     {"id": "0005", "name" : "Dr Pepper", "price": 7},
//     {"id": "0006", "name" : "Sprite", "price": 8},
//     {"id": "0007", "name" : "Diet Pepsi", "price": 9},
//     {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
//     {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
//     {"id": "0010", "name" : "Fanta", "price": 12}
// ]);
// })

it('should be false when invoke isBarcodeExist given ["001","002"]',()=>{
	//given
	const arr = ['0001','0002'];
	//when
	const result = isBarcodeExist(arr);
	//then
	expect(result).toBe(true);
})