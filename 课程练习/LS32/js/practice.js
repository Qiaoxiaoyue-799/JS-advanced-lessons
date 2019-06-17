/*
//class 类名{}
//类名首字母大写
class Point{
	constructor(){
		this.x = 1;
		this.y = 1;
	}
	show(){
		console.log(this.x);
	}
	showy(){
		console.log(this.y);
	}
}

console.log(typeof Point);//function
let p1 = new Point();
let p2 = new Point();
console.log(p1.__proto__ == p2.__proto__);//true
p1.show();//1
*/



/*
// 使用static方法来添加静态方法
// 静态方法通过类来调用
// 静态方法内部的this指向类本身
class Point{
	constructor(){
		this.x = 1;
	}
	static showPoint(){
		console.log(this);
	}
}
Point.showPoint();
*/



/*
//继承的实现方式
let obj1 = {"x":1};
let obj2 = Object.create(obj1);
console.log(obj2.x);


let obj3 = {"y":2};
obj4.__proto__ = obj3;


function fn1(){
	this.x = 1;
}
fn1.prototype.show = function(){
	console.log(this.x);
}
let obj5 = new fn1();
*/



/*
function Child(x,y){
	this.x = x;
	this.y = y;
}
function Parent(x,y,z){
	Child.call(this,x,y);
	this.z = z;
}
let p1 = new Parent(1,2,3);
console.log(p1);
*/


//子类继承父类  extends
//在子类的构造函数里面super 指向父类的构造函数
//继承的子类构造函数中，必须得在super()调用后才能使用this
//super在子类的原型方法中，指向父类的prototype。
class Parent{
	constructor(x,y){
		this.x = x;
		this.y = y;
	}
	parentshow(){
		console.log("hello");
	}
}
class Child extends Parent{
	constructor(x,y,z){
		super(x,y);
		this.z = z;
	}
	show(){
		super.parentshow();
		console.log(this);
	}
}
let c1 = new Child(1,2,3);
console.log(c1);