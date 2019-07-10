const createReceipt = require('../js-workspace/createReceipt');

it('should return receipt when invoke createReceipt given ["0001","0005","0001"]',()=>{
	//given
	const arr = ['0001','0005','0001'];
	//when
	const result = createReceipt(arr);
	//then
	expect(result).toBe('Receipts\n-----------------------------------------------\nCoca Cola                    3        2\nDr Pepper                    7        1\n-----------------------------------------------\nPrice:13');
})

it('should return error when invoke createReceipt given ["0001","asdw"]',()=>{
	//given
	const arr = ['0001','asdw'];
	//when
	const result = createReceipt(arr);
	//then
	expect(result).toBe("[ERROR]:some barcodes doesn't exist!");
})