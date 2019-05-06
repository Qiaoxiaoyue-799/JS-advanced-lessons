
//Array是引用型，arr1和arr2在内存空间中的指向相同。
var arr1 = ['a','b','c','d'];
var arr2 = arr1;

arr1[0] = 'e';
console.log(arr2);// ["e", "b", "c", "d"]

//稀疏数组
var arr3 = [1,,2,4];
console.log(arr3.length);//4

for(var i in arr3){
	console.log(i,arr3[i]);
	//0  1
	//2  2
	//3  4
}


var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);
}

for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);

/*
	1、判断方法是静态方法还是原型方法。
	2、确定这个方法是用来做什么的：
		(1)是否会对原变量产生影响。
		(2)最终的作用效果是什么样的。
	3、判断方法的参数分别是什么:
		(1)如果是回调函数的形式，判断回调函数的参数是什么
		(2)如果是值类型参数，判断参数所代表的意义。
	4、确定方法调用的返回值。
*/

function compareNumbers(a,b){
	return a - b;
}

var arr4 = [4,3,2,1];
arr4.sort(compareNumbers);
console.log(arr4);

/*
	forEach(callback,thisArg);
	callback(element,index,arr);
		element遍历数组每次取到的数组元素值
		index遍历数组每次取到的数组元素的索引
		arr操作的数组
	thisArg可以指明回调函数内部this的指向
*/
var arr5 = ['a', 'b', 'c'];
arr5.forEach(function(element) {
  console.log(element);
});

var arr6 = ['a', 'b', 'c'];
arr6.forEach(function(element,index,arr7) {
  console.log(element,index,arr7);
  window.x = 10;
},window);


//判断Array每一个元素是否全部满足return的条件。
var arr8 = [10,20,30,40,50];
var result = arr8.every(function(value){
	return value>25;
});
console.log(result);//false


var arr9 = [1,2,3,4,5];
var arr10 = arr9.map(function(element){
	return element*2;
})
console.log(arr10);






