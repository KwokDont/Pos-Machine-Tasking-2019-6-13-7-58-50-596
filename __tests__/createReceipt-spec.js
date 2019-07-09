const createReceipt = require('../js-workspace/createReceipt');

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

// it('should be false when invoke isBarcodeExist given ["0001","0002"]',()=>{
// 	//given
// 	const arr = ['0001','0002'];
// 	//when
// 	const result = isBarcodeExist(arr);
// 	//then
// 	expect(result).toBe(true);
// })

// it('should return receipt when invoke drawReceipt given ["0001","0005"]',()=>{
// 	//given
// 	const arr = ['0001','0005'];
// 	//when
// 	const result = drawReceipt(arr);
// 	//then
// 	expect(result).toBe('Receipts\n-----------------------------------------------\nCoca Cola                    3        1\nDr Pepper                    7        1\n-----------------------------------------------\nPrice:10');
// })

it('should return receipt when invoke createReceipt given ["0001","0005"]',()=>{
	//given
	const arr = ['0001','0005'];
	//when
	const result = createReceipt(arr);
	//then
	expect(result).toBe('Receipts\n-----------------------------------------------\nCoca Cola                    3        1\nDr Pepper                    7        1\n-----------------------------------------------\nPrice:10');
})

it('should return error when invoke createReceipt given ["0001","asdw"]',()=>{
	//given
	const arr = ['0001','asdw'];
	//when
	const result = createReceipt(arr);
	//then
	expect(result).toBe("[ERROR]:some barcodes doesn't exist!");
})