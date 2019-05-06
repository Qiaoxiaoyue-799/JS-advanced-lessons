/**
 * Created by qile on 2017/8/21.
 */

var sum = function(x,y,z){
	console.log(x,y,z);//undefined undefined undefined
    x=x;
    y=y;
    z=z;
    return x+y+z;
};
console.log(sum());//NaN

var sum = function(x,y,z){
	console.log(x,y,z);//undefined undefined undefined
    x=x||1;
    y=y||2;
    z=z||3;
    return x+y+z;
};
console.log(sum());//6


var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
// console.log(sum(1,0,0));

//ES6中设置函数默认值
function sum(x,y=2,z=3){

	return x+y+z;
}
sum();//NaN
sum(1);//6

//优化改造版本
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
console.log(sum(1,0,0));