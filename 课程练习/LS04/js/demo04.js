/**
 * Created by qile on 2017/8/14.
 */

// 严格模式的目的：
// 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为
// 消除代码运行的一些不安全之处，保证代码运行的安全

//如果变量不使用var声明，会自动提升为全局变量。
function fn1() {
    username = "zhangsan";
}
fn1();
console.log(username);//zhangsan



// 严格模式使用方式
"use strict"//全局使用

function foo() {
    //函数内部代码使用严格模式
    "use strict"
    username = "zhangsan";
}
foo();
console.log(username);//报错 demo04.js:24 Uncaught ReferenceError: username is not defined

function fn2() {
	"use strict"
    console.log(this);
}
fn2();//undefined

function fn3(){
	var result = (this === undefined ? true : false);
	return result;
}
console.log(fn3());//false
//因为非严格模式下this为window。


function fn3(){
	"use strict"
	var result = (this === undefined ? true : false);
	return result;
}
console.log(fn3());//true
//因为严格模式下this为undefined。





