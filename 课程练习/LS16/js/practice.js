//JS中的this


//1.全局函数,非严格模式下，this指向window对象。
//2.严格模式下，this是undefined
//3.this是谁，取决于函数调用的主体。
var x = 10;
console.log(window.x);//10
function thisText(){
	console.log(this);//window
	console.log(this === window);//true
}
thisText();

function thisText1(){
	'use strict';
	console.log(this);//undefined
	console.log(this === window);//false
	return this===undefined ? true : false;//判断this是否是严格模式。
}
thisText1();


/////////////////////////////////////////////////////////////////////////
var point = {
	x:0,
	y:0,
	moveTo:function(x,y){
		this.x = x;
		this.y = y;
	}
}
/*
	1.直接定义在对象下的方法，调用主体就是当前对象。
	2.前提是没有函数嵌套。
*/
point.moveTo(10,10);//moveTo方法定义在point下，指向point。


////////////////////////////////////////////////////////////////////


//构造函数中的this
function Point(x,y){
	//由new Point实例化的:
	this.x=x;
	this.y=y;
	//由实例化的对象调用实现:
	this.moveTo = function(){
		this.x=x;
		this.y=y;
	}
}
var p = new Point(10,10);
//this指向函数调用的主体
p.moveTo(15,15);

///////////////////////////////////////////////////////////////////////


//JS中切换上下文的call和apply方法
var objA = {name:"AA",x:1};
var objB = {name:"BB",x:2};
function test(){
	console.log(this.name);
	console.log(this.x);
}
objA.fun = test;
objA.fun();
objA.fun.call(objB);//相当于objB.fun()
//1.方法A.call（对象）,切换方法A的调用主体，this改变指向。


var objA = {name:"AA",x:1};
var objB = {name:"BB",x:2};
function test(m){
	console.log(this.name);
	this.x=m;
	console.log(this.x);
}
objA.fun = test;
objA.fun();
objA.fun.call(objB,100);
//2.方法A.call(对象,arg1，arg2),切换方法A的调用主体，this改变指向。


//3.方法B.apply(要切换的调用对象，[arg1,arg2,arg3]);

//////////////////////////////////////////////////////////////////////////

//有嵌套情况的函数this指向
var point = {
	x:0,
	y:0,
	moveTo:function(x,y){
		function moveToX(x){
			console.log(this);//window
			this.x=x;
		}
		function moveToY(y){
			console.log(this);//window
			this.y=y;
		}
		moveToX(x);
		moveToY(y);
	}
}
/*
	对象内部的函数，存在嵌套关系，内部函数的this指向window对象。
*/
point.moveTo(10,10);
console.log(point);//{x:0,y:0,moveTo:f...}


/*
	解决办法：
	1.软绑定
	嵌套函数，内部函数this指向window对象，不能指向调用的对象，但是外层函数指向
	调用的对象，因此通过一个变量转存，用var that=this，实现用that间接绑定外层
	函数指向。
*/
var point = {
	x:0,
	y:0,
	moveTo:function(x,y){
		var that = this;//通过that变量转存,软绑定。
		function moveToX(x){
			console.log(that);//window
			that.x=x;
		}
		function moveToY(y){
			console.log(that);//window
			that.y=y;
		}
		moveToX(x);
		moveToY(y);
	}
}
point.moveTo(10,10);
console.log(point);//{x:10,y:10,moveTo:f...}

//2.用call和apply改变函数指向
var point = {
	x:0,
	y:0,
	moveTo:function(x,y){
		function moveToX(x){
			console.log(this);//window
			this.x=x;
		}
		function moveToY(y){
			console.log(this);//window
			this.y=y;
		}
		/*
			切换moveToX函数的调用主体，并且执行moveToX;
		*/
		moveToX.call(this,x);
		moveToY.call(this,y);
	}
}
point.moveTo(10,10);
console.log(point);//{x:10,y:10,moveTo:f...}

//3.用bind硬绑定

var point = {
	x:0,
	y:0,
	moveTo:function(x,y){
		function moveToX(x){
			console.log(this);//window
			this.x=x;
		}
		function moveToY(y){
			console.log(this);//window
			this.y=y;
		}
		//moveToX.__proto__ == Function.prototype
		console.log(moveToX.bind(this));//moveToX函数本身
		moveToX.bind(this)(x);
		moveToY.bind(this)(y);
		/*
			函数.bind(对象)切换函数的调用主体
			生成了一个新的函数，并且是不会立即执行的。
			函数.bind(对象)()立即执行，即硬绑定。
		*/
	}
}
point.moveTo(10,10);
console.log(point);

/////////////////////////////////////////////////////////////////////////

