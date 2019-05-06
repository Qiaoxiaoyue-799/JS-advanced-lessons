/**
 * Created by qile on 2017/8/14.
 */


//for ... in 遍历数组(不推荐)
var arr = [2,,"33"];
for(var i in arr){
    console.log(i,arr[i]);
}
//0 2
//2 33

//for ... in 遍历对象
var obj = {x:10,y:20,z:"30"};
for(var k in obj){
    console.log(k,obj[k],typeof obj[k]);
}
// x 10 number
// y 20 number
// z 30 string


var obj3 = {"username":"zhangsan","age":20};
obj3.__proto__.sex = "male";//添加新属性。
for(var o in obj3){
    console.log(o,obj3[o],typeof obj[o]);
}
//username zhangsan undefined
//age 20 undefined
//sex male string

var obj1 = {x:1};
var obj2 = Object.create(obj1);
obj2.y = 2;
obj2.z = 3;
for(var j in obj2){
    console.log(j,obj2[j]);
}
//y 2
//z 3
//x 1
//sex male