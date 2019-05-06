/*
//闭包：通过返回函数（fn1）内部定义的函数（fn2）来访问fn1内部的局部变量（x）。
function fn1(){
	var x = 1;
	function fn2(){
		return ++x;
	}
	return fn2;
}
var fn3=fn1();
console.log(fn3());//2
console.log(fn3());//3

function fn1(){
	var x = 1;
	function fn2(){
		return ++x;
	}
	return fn2();
}
var fn3=fn1();
console.log(fn3);//2
console.log(fn3);//2

//闭包：函数（addNum）内部定义的函数（return 匿名函数）与其相关作用域中的变量（start）形成的实体。
//闭包的构成：外部定义的函数，内部定义的函数，作用域中的变量。
//非闭包函数运行完start会被释放掉，闭包函数start会一直存在于内存中。
function addNum(start){
	return function(step){//匿名函数
		start += step;
		return start;
	}
}
var fn3 = addNum(10);
fn3(1);//11
fn3(1);//12
fn3(1);//13


function foo(){
	var i = 0;//i不会被释放掉
	function bar(){
		console.log(++i);
	}
	return bar;
}
var fn1 = foo();
var fn2 = foo();
//外层函数foo每执行一次，会形成一个闭包。
fn1();//1
fn2();//1
fn1();//2
fn2();//2



//	闭包带来的改变（作用）：
//		1.闭包可以访问到函数内部定义的局部变量。
//		2.闭包让关联作用域中的特定变量保持在内存中，不会被释放。
//		3.关联变量：外部定义的变量，内部使用这个变量，就叫做关联变量。

function foo(x){
	var tmp = 10;
	return function(y){
		console.log(x+y,++tmp);
	}
}
var fee = foo(10);
fee(10);
fee(10);
//闭包的相关联变量为 x 和 tmp 

var tmp = 10;
function foo(x){
	return function(y){
		console.log(x+y,++tmp);
	}
}
var fee = foo(10);
fee(10);
fee(10);
//闭包的相关联变量为 x

function foo(x){
	var tmp = 3;
	return function(y){
		x.count = x.count ? x.count + 1 : 1
		console.log(x+y+tmp,x.count);
	}
}
var age = new Number(2);
var bar = foo(age);
bar(10);
bar(10);
//闭包相关联变量为tmp: 3 和 x: Number {2}

*/
function counter(){
	var n = 0;
	return{
		count:function(){return ++n;},//闭包的相关联变量为 n
		reset:function(){n = 0;return n;}//闭包的相关联变量为 n
	}
}
var c = counter(),d = counter();
console.log(c.count());//1
console.log(d.count());//1
console.log(c.reset());//0
console.log(c.count());//1
console.log(d.count());//2






















