/**
 * Created by qile on 2017/8/14.
 */
if(true){
    var i = 0;
}

function foo(){
    console.log("j:",j);//undefined
    var j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错

//上边代码等价于
var i;
if(true){
    i = 0;
}

function foo(){
    var j;
    console.log("j:",j);//undefined
    j = 10;
    console.log("j:",j);//10
}
foo();

console.log("i:",i);//0
console.log("j:",j);//报错

//变量与函数的作用域(共三个作用域，全局作用域，fn1作用域，fn2作用域)
var a = 1;
function fn1(){
	console.log(a);//1
	var b = 2;
	var c = 3;
	function fn2(){
		var c = 30;
		var d = 4;
		console.log(c);//30
	}
	fn2();
	console.log(c);//3
	console.log(d);//undefined
}
fn2();//报错，fn2的作用域在fn1中，在fn1外无法调用。
fn1();

function fn1(){
	function fn2(){
		var d;
	};
	var b;
	var c;
	b = 2;
	c = 3;
}

var username = "jack";
//函数和变量定义完成后，作用域已经决定，与调用形式无关。
function foo(){
	username = "bill";
	console.log(username);//bill
}
function bar(){
	var username = "mike";
	foo();
	console.log(username);//mike
}
bar();


var username = "jack";
function foo(){
	console.log(username);//jack
}
function bar(){
	var username = "mike";
	foo();
	console.log(username);//mike
}
bar();

//new function 特殊情况
var scope = "global";
function checkScope(){
	var scope = "local";
	return function(){
		return scope;
	}
}
console.log(checkScope);//local

var scope = "global";
function checkScope(){
	var scope = "local";
	return new Function("return scope;");
}
console.log(checkScope);//global

//ES5 没有块级作用域，只有函数的局部作用域。
if(true){
	var a = 3;
	console.log(a);
}

if(true){
	var a = 3;
}
console.log(a);

//ES6
if(true){
	let b = 3;
	console.log(b);
}

if(true){
	let b = 3;
}
console.log(b);


//ES5没有块级作用域带来的变量污染
var userId = 5;
document.onclick = function(){
	console.log(userId);
	userId = 10;
}
if(true){
	var userId = 30;
}

//立即执行
(function(){
	if(true){
	var userId = 30;
	}
})()
