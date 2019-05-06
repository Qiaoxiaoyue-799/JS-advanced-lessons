 // JS对象-对象原型继承

// 1.对象-对象的继承·········································································································
var superObj = {
	x:1,
	y:2
};

var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x=5;//修改superObj为5
console.log(subObj_Second.x);//5    本身没有，通过__proto__去上一级寻找。

var superObj = {
	x:1,
	y:2
};

var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.x=5;
console.log(subObj_Second.x);//1


// 2.构造函数实现的对象-对象的原型继承的原型共享问题·············································································
function Person(name) {
	this.name = name;
}
Person.prototype.age = 20;
Person.prototype.showname = function(){
	console.log(this.name);
}

function Student(id){
	this.id = id;
}

/*
	Person name属性Mike,person.__proto__.age
	person.__proto__.showName
*/

//用Student实例化得到的对象继承Person的相关属性和方法。
Student.prototype = new Person("Mike");//Student.prototype = person   person.__proto == Person.prototype


var s1 = new Student(2017001);//s1.__proto__ == Student.prototype
var s2 = new Student(2017002);

/*
	s1自身上没有age，s1.__proto__ == Student.prototype
	Student.prototype = new Person("Mike");即Student.prototype = person;
	person对象上没有age属性
	s1.__proto__.__proto__ == person.__proto__
	person.__proto__ == Person.prototype	
*/

console.log(s1.id,s2.id);//2017001 2017002
//console.log(s1.age.s2.age);//报错


// 3.模拟类-类继承的形式 一··································································································
function Person(name,age){
	this.name = name;
	this.age = age;
};

Person.prototype.showName = function(){
	console.log(this.name);
};

function Student(name,age,id){
	/*	
		Person.call 切换了Person函数内部this的指向
		直接调用Person方法，是this在调用Perosn方法，name，age是传入的两个参数。
		等效于 this.Person（name，age）
	*/
    Person.call(this,name,age);
    this.id = id;
}

Student.prototype.__proto__ == Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);

console.log(s1);//Student {name: "xxx", age: 22, id: 2017001}
console.log(s1.__proto__ == Student.prototype);//true

var s3 = new Student("zhang",20,2017123);
s3.showName();
console.log(s3);
console.log(s3.showName());



// 4.模拟类-类继承的形式 二····································································································

function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}

/*
	var p1 = Object.create(Person.prototype);
	Student.prototype = p1;
*/

Student.prototype = Object.create(Person.prototype);//创建了一个新对象

console.log(Person.prototype.constructor); //
console.log(Student.prototype.constructor); //

Student.prototype.constructor = Student;//覆盖构造函数原型上的constructor

console.log(Person.prototype.constructor); //
console.log(Student.prototype.constructor); //
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);


// 直接定义在构造函数上的静态方法
function BaseClass(){

}
BaseClass.fn1 = function(){
	console.log("静态方法");
}
BaseClass.fn1();

//原型方法
BaseClass.prototype.fn2 = function(){
	console.log("原型方法");
}

var base = new BaseClass();
console.log(base.__proto__ == BaseClass.prototype);
base.fn2();

//··································································································································

function Person(username,age){
	this.username = username;
	this.age = age;
}
Person.prototype.constructor == Person;

var person = new Person("zhangsan",20);
person.constructor == Person;


var obj = new Object();
obj.constructor == Object;

