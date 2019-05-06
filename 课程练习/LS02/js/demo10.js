/**
 * Created by qile on 2017/8/14.
 */
//包装对象
var a = 123;
var b = new Number(a);

console.log(a == b);//true  值相同
console.log(a === b);//false 值相同，但是数据类型不同。

//临时包装对象
var str = "abcde";
console.log(str.length);//5 临时包装成了String对象
str.length = 1;
console.log(str.length,str);//5 "abcde" 临时包装对象并不影响原始值
var t = str.length;
console.log(t);
//临时对象是什么时候释放的？
//每次调用str的属性和方法都有一次包装，释放的过程，一个console.log临时包装完str后立即释放，输出为5，
//第二个console.log是第二次临时包装，因此不受前一句赋值的影响。

//引用数据类型本身即为对象，不用临时包装，因此不释放，可以赋值后继续使用。
var arr = [1,2,3,4];
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1 [1]