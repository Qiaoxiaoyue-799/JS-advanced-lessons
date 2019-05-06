/**
 * Created by qile on 2017/8/14.
 */

//Part 000000000

//charAt(index)方法返回特定索引位置的字符
var a = "abcde".charAt(2);
console.log(a);//c

//字符串比较
console.log("A" > "a");//false
console.log("B".localeCompare("A")); 
//1	  考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("A"));
 //0   考虑本地化的字符排序，返回0或非0
console.log("A".localeCompare("B")); //-1

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;

//Part 111111111 字符串提取
//String.prototype.charAt(pos);//使用unicode值返回特定编码
//String.prototype.charCodeAt(pos);
//String.prototype.slice(start,end?);
//String.prototype.substr(start,length?)
//String.prototype.substring(start,end?);
//String.prototype.split(separator?,limit?);

//字符串常用方法，字符串的方法源于String.prototype
//截取  （起始位置，结束位置）
var str2 = "abcdef".slice(2);//cdef
var str3 = "abcdef".slice(2,5);//cde
var str4 = "abcdef".slice(-2);//ef
var str5 = "abcdef".slice(2,-2);//cd




//split(特定的字符)将字符串以特定的字符分割，将字符串作为数组元素生成数组。
var arr6 = "abcdef".split("c");//返回数组  ["ab", "def"]
var arr7 = "abcdef".split("c",1);//["ab"]
var arr8 = "abcdef".split("c",2);
//区分：
var arr9 = "abcdef".split("");//["a", "b", "c", "d", "e", "f"]
var arr10 = "abcdef".split(" ");//["abcdef"]


var str9 = "abcdef".charAt(2)//返回特定索引位置的字符;
var str10 = "abcdef".charCodeAt(3);//返回特定索引位置的字符的unicode码
var str11 = "abcdefabcdef".indexOf("d",1);
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找




//substr 与 substring的区别
//截取 （起始位置，长度）
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度  "cdefg"
console.log(str13,str14);//abcdefghijklmn cdefg   (str13 未受到破坏)

//截取（字符串起始位置，结束位置）
//起始值>结束值  互换位置
//如果有超出索引位置   0 - str.length - 1 自动截断
var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//abcdefghijklmn cde    (str13 未受到破坏 )
var str15 = str13.substring(0,3);//abc
var str15 = str13.substring(3,0);//abc



//str.trim()去掉字符串两边的空格。
var str = "   abc   d   e   	";
console.log(str.trim());//abc   d   e//
//Part 222222222 字符串变换
//String.prototype.trim( );
//String.prototype.concat(str1?,str2?);
//String.prototype.toLowerCase( );
//String.prototype.toLocaleLowerCase( );
//String.prototype.toUpperCase( );
//String.prototype.toLocaleUpperCase( );
var str16 = "aaa".concat("bbb");//返回字符串
var str17 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str18 = "abcDEF".toLowerCase();
var str19 = "abcDEF".toUpperCase();

//Part 333333333 检索和比较
//String.prototype.indexOf(searchingString,position?);
//String.prototype.lastIndexOf(searchingString,position?);
//String.prototype.localeCompare(other);
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");

//Part 444444444 与正则相关的方法 详细内容参见正则表达式章节
//String.prototype.search(regexp);//查找特殊字符
//String.prototype.match(regexp);//查找指定位置
//String.prototype.replace(regexp);//倒序查找

//其余部分参见《深入理解JS》第12章