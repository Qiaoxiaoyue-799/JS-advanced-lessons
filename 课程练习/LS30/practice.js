/*
var obj = {
	objName:"obj1",
	showName:function(){
		//新增的箭头函数
		var intervalId = setTimeout(()=>{
			console.log(this.objName);//obj1
			console.log(this);//{objName: "obj1", showName: ƒ}
		},3000);
	}
}
console.log(obj.showName());
*/


/*
function fn1(x,y=2,z=3){
	return x+y+z;
}
console.log(fn1(1));//6   1+2+3
console.log(fn1(1,3));//7   1+3+3
console.log(fn1(1,3,4));//8   1+3+4
//1.如果有参数使用了默认值，则函数体内部不能出现和该参数名称一样的变量。
//2.具有默认值的参数，必须写到没有默认值的参数的后面。
*/


/*
function fn2(x,...rest){
	console.log(x);//1
	console.log(rest);//[2, 3, 4, 5]
}
console.log(fn2(1,2,3,4,5));
//添加了剩余操作符的参数，会得到一个数组，接受剩余的实参，写在其他参数后面。
*/

function fn3(x){
	console.log(x);
	console.log(arguments);
}

fn3(1,...[2,3]);
fn3(1,2,3);//与上式效果一样