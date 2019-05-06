/*
	
	obj.__proto__ == Object.prototype
	对象的原型

	Object.prototype.__proto__ == null

*/

/*
	JavaScript是基于对象的继承方式
*/
//方式一：
var obj = {
	num:1,
	str:"hi",
	sayHi:function(){
		console.log(this.str);
	}
};

//方式二：
var newObj = Object.create(obj);//newObj.__proto__ == obj
console.log(newObj.__proto__.__proto__.__proto__);//null
console.log(newObj.__proto__.__proto__);//Object.prototype
console.log(obj.__proto__ == Object.prototype);//true
console.log(newObj.__proto__ == obj);//true
console.log(newObj.num);//1
//继承属性和方法
newObj.z;
newObj.sayHi();


//方式三：(构造函数)
function Person(username,age){
	this.username = username;
	this.age = age;
}
Person.prototype.sayHi=function(){
	console.log(this.username);
}//共用同一方法，这样写比在构造函数中写要节省空间。

var person1 = new Person('zhangsan',20);
var person2 = new Person('lisi',21);
console.log(person1.__proto__ == person2.__proto__);//true
console.log(person1.__proto__ == Person.prototype);//true
person1.sayHi();
person2.sayHi();


//只能操作当前对象的属性，不能操作原型链上的属性。
var proObj = {
z:3
};
var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;
console.log(obj.x); //1
console.log(obj.y); //2
console.log(obj.z); //3
"z" in obj; //true
obj.hasOwnProperty("z"); //false
obj.z = 5;
obj.z = 8;
obj.z; // 8
delete obj.z; // true
obj.z; 
delete obj.z; // true
obj.z; //  3




function Person(username,age){
	this.username = username;
	this.age = age;
}
Person.prototype.sayHi=function(){
	console.log(this.username);
}//共用同一方法，这样写比在构造函数中写要节省空间。

var person = new Person('zhangsan',20);

/*
	Person.prototype == person.__proto__
	Person.prototype.constructor == Person
	Person.prototype.__proto__ == Object.prototype
	Object.prototype.constructor == Object
	Object.prototype.__proto__ == null
*/


//定义一个车的对象，height，width，weight
//创建一个小轿车的对象，继承车相关的属性，自己具有color、seatNum、create方法，以及构造函数的形式。
var car = {
	height:150,
	width:200,
	weight:2000
}
//用Object创建
var littleCar = Object.create(car);
littleCar.color = "red";
littleCar.seatNum = 4;

//构造函数
function createLittleCar(color,seatNum){
	this.color = color;
	this.seatNum = seatNum;
}
createLittleCar.prototype = car;//继承car

var car1 = new createLittleCar('red',4);


/*10-17比较重要
	11.
	立即执行函数总结：
		1.防止变量污染
		(function(){
		
		})()
		2.防止变量的非期望共享。
		for(var i = 0;i < 3; i++){
			//1.给元素绑定事件，回调函数
			//2.延迟执行、定时执行
			(function(j){
	
			})(i)
		}
	12.
	闭包总结：
		1.JavaScript存在的代码运行机制，外层函数fn1，内层函数fn2。
		function fn1(){
			var x = 0;
			function fn2(){
				return ++x;
			}
			return fn2;
		}
		var result = fn1();
		result();
		result();



