//Part  1

// var username = "zhangsan";
// if(true){
// 	var username = "lisi";
// }
// console.log(username);//lisi

// let username = "zhangsan";
// if(true){
// 	let username = "lisi";
// }
// console.log(username);//zhangsan 

/*
	let声明变量会拥有块级作用域{}
*/


//Part  2
/*
	之前var声明变量的方式，只有一个全局变量i，所有的延迟执行都在共用一个i。

	let声明的方式，每次循环都会形成自己的一个独立作用域。
*/
// for(let i = 0;i < 10;i++){
// 	setTimeout(function(){
// 		console.log(new Date(),i);
// 	},i*1000)
// }


//Part  3
/*
	const声明的变量不可修改，const定义变量时必须进行初始化。
*/
// const PI = 3.1415926;
// PI = 3.12121;

// const sex;


//用let、const声明的变量，在声明前是不可用的。
// console.log(username);//Cannot access 'username' before initialization
let username = "lisi";
console.log(username);//lisi


function foo(){
	let x;
	let x;
}
foo();//报错，重定义。