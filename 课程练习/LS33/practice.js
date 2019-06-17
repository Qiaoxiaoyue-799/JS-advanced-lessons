function createIterator(arr){
	var i=0;
	return{
		next:function(){
			return i<arr.length?
			{value:arr[i++],done:true}:
			{value:undefined,done:false}
		}
	}
}
var iterator=createIterator([1,2,3,4]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



let arr1=[1,2,3,4,5];
for(let i of arr1){
	console.log(arr1[i]);
}

let m1=new Map([1,2,3,4,5]);
for(let i of m1){
	console.log(m1[i]);
}


//判断数据结构能否被遍历器所遍历
let arr2=[1,2,3,4,5];
console.log(arr2[Symbol.iterator])


let person={"name":"zhangsan"}
//不可以直接对一个对象使用遍历器，可以把对象转换成map再用遍历器



function* helloGenerator(){
	yield "hello";
	yield "world";
	return "ending"
}
var iterator=helloGenerator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



//Generator可以用于给元素添加Iterator 接口
let obj={}
obj[Symbol.iterator]=function*(){
	yield 1;
	yield 2;
}
for(let i of obj){
	console.log(i);
}


let str="abcdefg";
for(let i of str){
	console.log(i);
}



//promise将异步的代码写成同步的方式进行执行
setTimeout(function(){
	console.log("时间到");
},3000);
console.log("同步代码1");
console.log("同步代码1");
/*new Promise(function(resolve,reject){
	异步操作
	resolve();//resolve是异步操作成功时的回调函数
	reject();//reject是异步操作失败时的回调函数
}).then(function(){
	其实就是resolve的函数的定义
}，function(){
	其实就是reject的函数的定义
})*/
new Promise(function(resolve,reject){
	setTimeout(function(){
		console.log("时间到");
		resolve();//resolve是异步操作成功时的回调函数
	},3000);
}).then(function(val){
	console.log(val);
},function(){

}).catch(function(){
	//用来捕获异常
}).finally(function(){
	//无论如何都会执行
}).done()
