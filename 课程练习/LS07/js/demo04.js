/**
 * Created by qile on 2017/8/14.
 */

//值传递
var a = 1;
function foo(x) {
    console.trace("a:",a," x:",x);
    x = 2;//step 2222
    console.trace("a:",a," x:",x);//step 3333
}

console.trace("a:",a);
foo(a);// step 1111
console.trace("a:",a); // step 4444  a仍为1



//引用传递
var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x);// 1   1
    o.x = 3;// step 2222
    console.trace("obj.x :",obj.x," o.x :",o.x);// 3   3   step3333
}

console.trace("obj.x :",obj.x);// 1
fee(obj);// step 1111
console.trace("obj.x :",obj.x);//obj.x被改写为3    step 4444  

//打开index.html 学习chrome的Sources调试
document.onclick = function () {//测试Event Listener Breakpoints
    alert("click");
    //var body =  document.getElementsByName("body");
};


//定义一个函数完成对变量的复制过程，生成新的变量并返回。引用数据类型时，数组、对象。
//自写：
var obj = {"username":"zhangsan","age":20};
function copyarr(arr){
	var arr1 = new Array(arr);
	console.log(arr1);
}
copyarr(obj);

//老师写的：
var obj = {"username":"zhangsan","age":20};
function copyArg(arg1){
	var copy;
	switch(true){
		case (arg1 instanceof String):
			copy = arg1;
			break;
		case (arg1 instanceof Number):
			copy = arg1;
			break;
		case (arg1 instanceof Boolean):
			copy = arg1;
			break;
		case (arg1 instanceof Array):
			copy = [];
			//遍历
			for (var i = 0; i <= arg1.length; i++) {
				copy[i] = arg1[i];	
			}
			break;
	}
}

copyArg(obj);