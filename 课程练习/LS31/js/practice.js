/*
//Symbol生成唯一值，不用new。
let s1 = Symbol("s1");
let s2 = Symbol("s2");
let s3 = Symbol("s1");
console.log(s1 == s3);0
/*



/*
//Symbol作为对象的属性名，永远不会重复(覆盖)
//对象[symbol]
// {
// 	[symbol]:属性值
// }
let obj = {};
obj[s1] = "hello";
// obj.s1 = "world";
let obj1 = {
	[s1]:"world"
}
*/



/*
//Symbol.for() 首先查看是否存在该描述信息的Symbol变量，存在的话直接获取，不存在再创建一个symbol。
let s1 = Symbol("foo");
console.log(Symbol.for("foo") == s1);//false
*/



/*
//Set中不会打印重复值,去重。
let s1 = new Set([1,2,3,4,5,6,1,2,3]);
console.log(s1);//{1,2,3,4,5,6}
for(var i of s1){
	console.log(i);
}
*/



//Map是更加灵活的数据类型。
let m1 = new Map([
	["username","zhangsan"],
	["age",20],
	["sex","male"]
]);
console.log(m1.size);//3
for(let i of m1){
	console.log(i);
}
console.log(m1.keys());//3
for(let j of m1.keys()){
	console.log(j);//获取键值。
}
m1.set("weight","60kg");//设置属性
m1.get("username");//获取属性
m1.delete("username");//删除属性
m1.has("sex");//判断是否有该属性
