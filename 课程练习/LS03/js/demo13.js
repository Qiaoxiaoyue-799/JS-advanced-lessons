/**
 * Created by qile on 2017/8/14.
 */
//Number构造器属性（静态属性）
Number.MAX_VALUE
Number.MIN_VALUE
Number.NaN
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY

//Number原型方法(Number对象继承的方法）
// Number.prototype.toFixed();
// Number.prototype.toPrecision();
// Number.prototype.toString();
// Number.prototype.toExponential();

var n1 = 12345.6789;
console.log(n1.toFixed(2));//   12345.68  保留（n）个小数
console.log(n1.toPrecision(2));//   1.2e+4     1.2×10^4 精密度
console.log(n1.toPrecision(3));//   1.23e+4    1.23×10^4
console.log(n1.toPrecision(4));//	1.235e+4   1.235×10^4
console.log(n1.toPrecision(5));//	12346 
//将数字转化为一个字符串
console.log(n1.toString());//   12345.6789
//把对象的值转换成指数计数法
console.log(n1.toExponential(2));//   1.23e+4  

//
console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true
console.log(Math.floor(3.8));//3
console.log(Math.floor(-3.8));//-4
console.log(Math.ceil(3.2));//4
console.log(Math.ceil(-3.2));//-3
console.log(Math.round(-3.2));//-3
console.log(Math.round(-3.5));//-3
console.log(Math.round(-3.8));//-4

//其余部分参见《深入理解JS》第11章

