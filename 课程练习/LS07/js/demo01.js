/**
 * Created by qile on 2017/8/14.
 */
//一、二的执行效率高，三需要实例化对象。


//一、  函数定义 函数声明方式
//函数名声明（两种效果一致）
//1.
function max(a,b){
    return a>b?a:b;
}
max(2,3);
//2.（变量提升，可以正常使用。）
max(2,3);
function max(a,b){
    return a>b?a:b;
}



//二、  函数定义 函数表达式方式 
//等号右侧可以是匿名函数也可以是非匿名函数
//1.
var max = function (a,b){ //匿名函数
    return a>b?a:b;
};
max(2,3);


//2.
max(2,3);
var max = function (a,b){ //匿名函数
    return a>b?a:b;
};

//匿名
window.onload = function(){
	alert("加载失败s");
}


//三、  函数定义 Function构造函数方式
var max = new Function("a","b","return a>b?a:b");//函数实例化
max(2,3);

//理解 new Function





/*
//略讲：非匿名函数便于调用栈追踪 测试使用匿名和非匿名函数的区别
var foo = function max(a,b){
    console.trace();
    return console.log(a>b?a:b);
};
foo(2,3);

foo = function min(a,b){
    console.trace();
    return console.log(a>b?b:a);
};
foo(2,3);
*/