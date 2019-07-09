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
	var flag = true;
	var menuList = getMenuFromDB();
	var na = menuList.map(function(v){return v['id'];});
	barcodes.forEach(v =>{
		if(na.indexOf(v) == -1){
			flag = false;
		}
	});
	return flag;
}

function drawReceipt(barcodes){
	var menuList = getMenuFromDB();
	var na = menuList.map(function(v){return v['id'];});
	var total = 0;
	var order = new Array();
	var result = 'Receipts'+'\n'+'-----------------------------------------------'+'\n';
	barcodes.forEach(v =>{
		menuList.forEach(n=>{
			if(v == n['id']){
				var index = order.indexOf(n['name']);
				if(index > -1){
					order[index]['num']++;
					order[index]['total'] += n['price'];
				}else{
					order.push({'name':n['name'],'price':n['price'],'num':1});
				}
			}
		});
	});
	order.forEach(v=> {
		result += v['name']+'                    '+v['price']+'        '+v['num']+'\n';
		total += v['price'] * v['num'];
	});
	result += '-----------------------------------------------'+'\n'+'Price:'+total;
	return result;
}

function createReceipt(barcodes){
	if(!isBarcodeExist(barcodes)){
		return "[ERROR]:some barcodes doesn't exist!";
	}else{
		return drawReceipt(barcodes);
	}
}

module.exports = createReceipt;


