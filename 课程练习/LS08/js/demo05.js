/**
 * Created by qile on 2017/8/14.
 */

function foo(){}
console.log(foo); //ƒ foo(){}
console.log(typeof foo); //function
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true


console.log(typeof Function);//function
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object


//思考：
console.log(typeof new Function());// function 
console.log(typeof new Array());	 //  object
console.log(typeof new Date());	 //  object

//typeof区分基本数据类型，但是无法更细致来区分引用类型因此开始使用instanceof。

//补充思考：
//看这个对象能否用该构造函数实例化得到，能为true不能为false

//结构：  对象 instancceof 构造函数
//1.判断这个对象能否使用后面的构造函数实例化得到。
//返回值为 true 或 false
//2.判断能否在对象的原型链上找到构造函数的prototype
function Person(username,age){
	this.username = username;
	this.age = age;
}
var person = new Person("Zhangsan",10);
person instanceof Person;
person instanceof Object;
console.log(person);
console.log(person.__proto__ == Person.prototype);//true
//能否在person的原型链上找到Object构造函数的prototype
console.log(person instanceof Object);//true
console.log(person.__proto__.__proto__);





var arr2 = [];
var arr2 = new Array();
arr2 instanceof Array;


console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true

console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true

console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true

console.log(Math instanceof Function);//false    使用时不用实例化，因此不是构造函数。
console.log(Math instanceof Object);//true

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true

