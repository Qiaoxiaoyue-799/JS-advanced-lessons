var objProto = {z:3};
var obj = Object.create(objProto);
console.log(obj);
obj.x = 1;
obj.y = 2;
console.log(obj.x,obj.y,obj.z);
console.log(obj.__proto__ == objProto);
console.log(obj.toString);
//对象里面，某些属性和方法是没有办法被遍历到的,例如方法toString()
for (var i in obj) {
	console.log(i);//属性名
	console.log(obj[i]);//属性值
}


var obj = {x:1};
Object.defineProperty(obj,'y',{enumerable:false})//在obj上定义一个y的属性
//{enumerable:false}作用：使新定义属性不可枚举。
console.log(obj);
for(var i in obj){
	console.log(i);//x
	console.log(obj[i]);//1
}//没有输出y

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//不可写
    configurable:false,//不可配置
    enumerable:true,//可枚举
    value:"Mike"//属性值为Mike
});
console.log(person.name);//Mike
person.name = "Lucy";
console.log(person.name);//Mike
delete person.name;
console.log(person.name);//Mike
for(var i in person){
	console.log(i);
	console.log(person[i]);
}


//Part 1
var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}

//Part 2

var obj = {
    x:1,
    y:2
};
//直接添加的属性，其所有特性默认都是true
obj.z = 3;

//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false
Object.defineProperty(obj,"w",{value:456,configurable:true});//writable,enumerable没有指定，所以默认为false
for(var k in obj){
    console.log(k,obj[k]);
}
//console.log(obj.w);//有w，但上边for...in遍历不到,因为enumerable默认为false，不可枚举。


//访问器属性访问
var obj = {
	_name:"Jack"
}
Object.defineProperty(obj,"name",{
	configurable:true,
	enumerable:true,
	get(){
		return this._name;
	},
	set(val){
		this._name = val;
	}
})
console.log(obj.name);//Jack


var person = {
	_name:"Jack"
};
Object.defineProperty(person,"name",{
    configurable:true,
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name);//Jack
person.name = "Lucy";
console.log(person.name);//Lucy
delete person.name;//delete person.name;
console.log(person.name);//undefined

// 属性特性描述符

var person = {
	_name:"Jack"
};
Object.defineProperty(person,"name",{
    configurable:false,
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name);//Jack
person.name = "Lucy";
console.log(person.name);//Lucy
delete person.name;//delete person.name;
console.log(person.name);//Lucy




var obj = {x:0};
Object.defineProperty(obj,"y",{
    value:1,
    enumerable:true,//枚举
    writable:true,//可写
    configurable:true//可配置
})
//获取特定对象、特定属性的属性描述符。
Object.getOwnPropertyDescriptor(obj,'y');


//给多个属性设置特性
var obj = {_x:1};
Object.defineProperties(obj,{
    y:{value:2,writable:true,enumerable:true},
    z:{value:2,writable:true,enumerable:true},
    x:{
        get:function(){return this._x;},
        set:function(val){
            this._x = val;
        }
    }
});

//属性的继承
var o1 = {};
Object.defineProperty(o1,"x",{
    value:1,
    writable:true,//可写
})

var o2 = Object.create(o1);
console.log(o2.__proto__ == o1);//o2的原型链是o1
console.log(o2.x);//当前对象没有的属性去原型链上找。

delete o2.x;
//delete删除属性时，只能删除自身所具有的属性，删除不了原型链上的属性。

//修改原型链上的属性：
o2.__proto__.x = 3;
console.log(o2.x);
console.log(o1.x);
