/*

//Part  1  数组、对象的解构赋值

let[one,two,third] = [1,2,3];
console.log(third);//3


let[head,...tail]=[1,2,3,4];
console.log(head);//1
console.log(...tail);//2 3 4
//...理解为剩余运算符，其他元素匹配完成后剩余下的元素。


let[d,e,...f] = ['a'];
console.log(d,e,f);//'a' undefined []
//当左侧结构元素个数大于右侧时，未匹配的变量会是undefined，...跟的变量未匹配元素[]空数组。


let {bar,foo,other} = {foo:"foo1",bar:"bar1",third:"third"};
console.log(bar,foo,other);//foo1  bar1  undefined
//对象结构赋值，根据键名来进行匹配，然后完成赋值。


*/

/*

//Part  2  字符串、数字的解构赋值
let str = new String("abcdef");
let [a,b,c,d] = str;
console.log(a,b,c,d);

//该形式与上面形式效果一样，进行了String的自动装箱。
let[e,f] = "ef"
console.log(e,f);

//number
let num = new Number(5);
console.log(num.toString);//ƒ toString() { [native code] }
let {toString:s1} = num;
console.log(s1);//ƒ toString() { [native code] }
*/


/*

//Part  3  函数参数的解构赋值
function fn1({x=0,y=0} = {}){
	return [x,y];
}
console.log(fn1());

*/


//Part  4  解构赋值的常见应用及注意事项
//交换变量
var [x,y] = ['a','b'];
[y,x] = [x,y];
console.log(x,y);//b a

//从函数中返回多个值
function example(){
	return [1,2,3];
}
let [a,b,c] = example();
console.log(a,b,c);//1 2 3 

//
let json1 = {
	"username":"zhangsan",
	"courseList":["高等数学","大学英语"],
	"age":20
}
//JSON MATH都是对象，没有构造函数。
//JSON.parse()
let jsonStr = JSON.stringify(json1);
console.log(jsonStr);//{"username":"zhangsan","courseList":["é«˜ç­‰æ•°å­¦","å¤§å­¦è‹±è¯­"],"age":20}
json1 = JSON.parse(jsonStr);


let{username} = json1;
console.log(username);//zhangsan




