const Menu = [{"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}];

function getMenuFromDB(){
	return Menu;
}

function isBarcodeExist(barcodes){
	let flag = true;
	const menuList = getMenuFromDB();
	const idList = menuList.map(function(menuItem){return menuItem['id'];});
	barcodes.forEach(barcode => {
		if(idList.indexOf(barcode) == -1){
			flag = false;
		}
	});
	return flag;
}

function drawReceipt(barcodes){
	const menuList = getMenuFromDB();
	let total = 0;
	let result = 'Receipts\n' + '-----------------------------------------------\n';
	let order = getOrderList(barcodes,menuList);
	order.forEach(orderItem => {
		result += orderItem['name'] + '                    ' + orderItem['price'] + '        ' + orderItem['num'] + '\n';
		total += orderItem['price'] * orderItem['num'];
	});
	result += '-----------------------------------------------\n' + 'Price:' + total;
	return result;
}

function getOrderList(barcodes,menuList){
	let order = new Array();
	barcodes.forEach(barcode => {
		menuList.forEach(menuItem => {
			if(barcode == menuItem['id']){
				let index = order.indexOf(menuItem['name']);
				if(index > -1){
					order[index]['num']++;
					order[index]['total'] += menuItem['price'];
				}else{
					order.push({'name':menuItem['name'],'price':menuItem['price'],'num':1});
				}
			}
		});
	});
	return order;
}

function createReceipt(barcodes){
	if(!isBarcodeExist(barcodes)){
		return "[ERROR]:some barcodes doesn't exist!";
	}else{
		return drawReceipt(barcodes);
	}
}

module.exports = createReceipt;


