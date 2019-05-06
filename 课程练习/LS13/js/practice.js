/*
	对象 instanceof 构造函数
	1.判断对象能否使用该构造函数实例化得到
	2.判断对象的原型链上能够找到该构造函数的原型
	对象.__proto__.proto__ (长度不确定)== 构造函数.prototype

*/

console.log(Object instanceof Function);//true
//原因：
//var o = new Object();
//console.log(Object.__proto__ == Function.prototype); // true

console.log(Object instanceof Object);//true  
//原因：object是最顶层对象，任何对象.instanceof Object 都为true

console.log(Boolean instanceof Function);//true  
console.log(Boolean instanceof Object);//true
console.log(String instanceof Function);//true
console.log(String instanceof Object);//true
console.log(Number instanceof Function);//true
console.log(Number instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true



function Person(username,age){
	this.username = username;
	this.age = age;
}
var p = new Person("zhangsan",20);
console.log(p.__proto__ == Person.prototype);//true
//注：只有构造函数才有prototype属性，只有对象才有__proto__属性。


var o = {
	_x : 1,
	get x(){
		return this._x;  //不能省略this.
	},
	set x(val){
		this._x = val;
	}
}
o.x = 10;//通过方法赋值
console.log(o._x);//10   通过属性访问
console.log(o.x);//10	通过方法访问


//1.通过对象字面量的方式直接创建对象
var obj = {
	"x":1,
	"y":2
}
var z = "age";
obj.z = 20;
console.log(obj);//{x: 1, y: 2, z: 20}
console.log(obj.x);
console.log(obj['y']);

var obj = {
	"x":1,
	"y":2
}
var z = "age";
obj[z] = 20;
console.log(obj);//{x: 1, y: 2, age: 20}

//2.通过Object的create静态方法创建对象
var obj = {
	"username":"zhangsan",
	"age":20
};
var obj1 = Object.create(obj);//以obj为原型，创建一个新的对象。
console.log(obj1);

//3.通过构造函数的方式创建对象
//一
function Person(username,age){
	this.username = username;
	this.age = age;
	this.sayHi = function(){
		console.log(this.username);
	}
}
var person1 = new Person("zhangsan",20);
var person2 = new Person("lisi",18);
person1.sayHi();
person2.sayHi();
//二
function Person(username,age){
	this.username = username;
	this.age = age;
}
Person.prototype.sayHi = function(){
	console.log(this.username);
}
var person1 = new Person("zhangsan",20);
console.log(person1.__proto__ == Person.prototype);
var person2 = new Person("lisi",18);
person1.sayHi();
person2.sayHi();
/*
	1.
	var obj1 = {
		属性名：属性值，
		方法名：方法
	}
	
	2.
	var obj1 = {};
	var obj2 = Object.create(obj1);//以obj为原型，创建一个新的对象,obj2可以访问到obj1上的方法。

	3.
	function Person(){};
	var person1 = new Person();
*/