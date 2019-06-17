var jsObject = {
	"username":"zhangsan",
	"age":20,
	"address":{"add":"shi","address":113}
}
var jsonStr = JSON.stringify(jsObject);
console.log(jsonStr);
console.log(typeof jsonStr);//string

//··············································································

var jsObject = {
	"username":"zhangsan",
	"age":20,
	"address":{"add":"shi","address":113}
}
//将对象转换成字符串形式
var jsonStr = JSON.stringify(jsObject,function(k,v){
	if(typeof v == "number"){
		return undefined;//如果变量value值为数字类型则忽略掉。
	}
	return v;
});
console.log(jsonStr);
console.log(typeof jsonStr);//string
//再转换回来
var jsObject2 = JSON.parse(jsonStr);
console.log(jsObject2);
console.log(typeof jsObject2);


//···············································································
/*
	JSON.stringify(js对象)
	可以将js对象数组、结构转化为json字符串

	1.作为前后端交互时，数据传输
	2.作为数据存储
*/
var jsObject = {
	"username":"zhangsan",
	"age":20,
	"address":{"add":"shi","address":113}
}
//将对象转换成字符串形式
var jsonStr = JSON.stringify(jsObject,function(k,v){
	if(typeof v == "number"){
		return v*2;//如果变量value值为数字类型则忽略掉。
	}
	return v;
});
console.log(jsonStr);
console.log(typeof jsonStr);//string
//再转换回来
var jsObject2 = JSON.parse(jsonStr,function(k,v){
	console.log(k,v)
});
console.log(jsObject2);
console.log(typeof jsObject2);


//····························································································
//json在线验证http://www.bejson.com/
{	
	"username":"zhangsan",
	"age":20,
	"address":{"add":"shi","addcode":111}
}

{
	{
		"imgUrl":"images/upload/1.jpg",
		"linkUrl":"http://www.baidu.com",
		"description":"校运会"
	},
}
{
	{
		"imgUrl":"images/upload/1.jpg",
		"linkUrl":"http://www.baidu.com",
		"description":"校运会"
	},
}
{
	{
		"imgUrl":"images/upload/1.jpg",
		"linkUrl":"http://www.baidu.com",
		"description":"校运会"
	},
}



/*
	jQuery.min.js 压缩版的，一般用于生产环境
	jquery.js 未压缩，一般用于开发环境
*/
/*
	$(jquery选择器)
	
*/
$("body").css("background","red");