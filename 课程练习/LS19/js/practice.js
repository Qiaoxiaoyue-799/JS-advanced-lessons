// 日期实例化
//方法一：
var date1 = new Date();
var year = date1.getFullYear();
var month = date1.getMonth();
var date2 = new Date(year,month);
console.log(date2);
//方法二：
var date3 = new Date("2019-05-05");//参数为字符串类型
console.log(date3);
//方法三：
var date4 = new Date(Date.now());//参数为数字类型，单位为毫秒。
console.log(date4);
//方法四：new Date(year,month,date?,hours?,minutes?,seconds?,milliseconds?)
var date5 = new Date(2010,6,5,5,4,2,10);
console.log(date5);

/*
	本地时间：当前所处时区的标准时间
	世界标准时间：UTC（格林威治时间）  GMT
*/
//1:初始化 
var date6 = Date.parse("01 Oct 2001 00:00:00 GMT");
console.log(date6);
//2:应用，比较日期大小
var a = Date.parse("2019-05-05");
console.log(a);
var date7 = new Date(a);
console.log(date7);

var date8 = new Date();
var a2 = Date.parse(date8);
console.log(date8);
console.log(a>a2);


