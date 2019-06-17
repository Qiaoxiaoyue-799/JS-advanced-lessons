/*
// 字符串的遍历接口
let str = "abcdef";
for(let i of str){
	console.log(i);
}
console.log(str.repeat(4));
*/


/*
// 对RegExp的扩展
let reg1 = /xyz/gi;
let reg2 = new RegExp("xyz",'gi');
let reg3 = new RegExp(/xyz/gi);
let reg4 = new RegExp(/xyz/gi,'i');
//正则表达式对象.flags获取到正则表达式修饰符
console.log(reg1.flags);

let str = "aaa_aa_a";
let reg5 = /aa+/g;
let reg6 = /a+/y;
console.log(reg5.exec(str));//["aaa", index: 0, input: "aaa_aa_a", groups: undefined]
console.log(reg5.exec(str));//["aa", index: 4, input: "aaa_aa_a", groups: undefined]
console.log(reg5.exec(str));//null

console.log(reg6.exec(str));
//上一次匹配结果的索引位置
console.log(reg6.lastIndex);//3
console.log(reg6.exec(str));//null
//可以根据正则对象.sticky属性判断是否设置了y
*/


/*
//定义在Array上的静态方法，Array.from()将类数组结构化为数组
console.log(Array.from("abcdef"));//["a", "b", "c", "d", "e", "f"]
function fn1(){
	console.log(Array.from(arguments));// [1, 2, 3]
}
console.log(fn1(1,2,3));

//定义在Array上的静态方法，Array.of()将零散的数据元素，组成一个数组。
console.log(Array.of(1,2,3));//[1,2,3]
*/



//定义在prototype上的方法：
/*
//复制数组里面的元素到数组的特定位置上。
//arr1.copyWithin(target,start,end);
//target：复制的目标位置
//start：复制元素的起始位置
//end：复制元素的结束位置
var arr1 = [1,2,3,4,5,6];
console.log(arr1.copyWithin(0,4,5));//[5, 2, 3, 4, 5, 6]
console.log(arr1.copyWithin(0,3,5));//[4, 5, 3, 4, 5, 6]
*/


/*
//Array.find遍历数组中的元素，验证是否满足回调函数的验证条件(回调函数的返回值)，返回满足条件的第一个值。
//Array.findIndex同上，返回满足条件的第一个值的索引值。
let arr1 = [10,15,20,30,40];
let e1 = arr1.find(function(element){
	return element > 19;
})
console.log(e1);//20

let e1Index = arr1.findIndex(function(element){
	return element > 29;
})
console.log(e1Index);//3

//fill(value,start,end)向指定的位置填充value
*/


//对Object的扩展
let username = "lily";

let obj = {
	username,//ES6简化，对象的结构可以不写键值对。
	fn1(){
		console.log(this.username);
	}
}

let bar = "foo";
let obj1 = {
	bar:"male"
}
console.log(obj1);//{bar: "male"}

let obj2 = {username:"zhangsan"};
let obj3 = {age:20};
console.log(Object.assign(obj2,obj3));//{username: "zhangsan", age: 20}
console.log(Object.keys(obj));//["username", "fn1"]
console.log(obj.valueOf());//{username: "lily", fn1: ƒ}
console.log(Object.entries(obj));// [Array(2), Array(2)]

