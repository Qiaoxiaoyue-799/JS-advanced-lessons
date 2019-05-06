/**
 * Created by qile on 2017/8/14.
 */

//避免闭包中非期望的变量共享问题，如下例子
// var tabs = document.getElementsByClassName('tabs')[0].children;
// var contents = document.getElementsByClassName('show')[0];

// for(var i=0;i<tabs.length;i++) {
            //变量污染，点击时循环已经结束，将都是导航4内容
//         tabs[i].onclick=function(){
//             for (var j = 0; j < tabs.length; j++) {
//                 tabs[j].className = '';
//             }
//             this.className = "active";
//             contents.innerHTML = "导航" + i + "内容";
//         };

// }


var tabs = document.getElementsByClassName('tabs')[0].children;
var contents = document.getElementsByClassName('show')[0];

for(var i=0;i<tabs.length;i++) {
    //避免变量污染，形成一个独立的空间。
    (function(j){
        tabs[j].onclick=function(){
            contents.innerHTML = "导航" + j + "内容";
        }
    })(i)
}

//解决方案 IIFE 重新打开index09.html页面测试
// var tabs = document.getElementsByClassName('tabs')[0].children;
// var contents = document.getElementsByClassName('show')[0];

// for(var i=0;i<tabs.length;i++) {
//     (function (i) { 	//IIFE start
//         tabs[i].onclick=function(){
//             for (var j = 0; j < tabs.length; j++) {
//                 tabs[j].className = '';
//             }
//             this.className = "active";
//             contents.innerHTML = "导航" + i + "内容";
//         };
//     }(i));			//IIFE end
// }

