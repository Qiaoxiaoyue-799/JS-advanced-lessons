//正则表达式的创建
/*
	/正则表达式文本部分/正则表达式的标识符
	[xyz] 指的匹配中括号中任意的字符
	标识符：
	g全局的检索(有g为全局检索，无g仅获取第一个匹配项)
	i表示是否忽略大小写(有i忽略大小写)
*/
//reg1不易更新，reg2、reg3方便动态更新。
//变量定义
var reg1 = /[bcf]at/g;//gi是标识符   g为全局，i为忽略大小写  m为包含换行
//构造函数定义
var reg2 = new RegExp("[bcf]at","gi");
var reg3 = new RegExp(/[bcf]at/,"gi");

var str1 = "fat  Fat bat cat   jdkfdj  llo";
// match方法检索返回一个字符串匹配正则表达式的的结果
console.log(str1.match(reg1));



var str2 = "abcdef adf kil ad ";
var reg4 = /adf/gi;
console.log(str2.match(reg4));

var reg5 = /adf*/gi;
console.log(str2.match(reg5));

//   .表示任意单个字符
var reg6 = /a.c/gi;
console.log(str2.match(reg6));

/*
	字符类别：
		\d表示的是任意的阿拉伯数字[0-9]
		\D表示在特定的位置上不是一个阿拉伯数字 [0-9]
		\s表示空格
		\w [A-Za-z0-9_]
*/
var reg7 = /a\dc/gi;
var reg7_2 = /a\Dc/gi;
var str3 = "a2c a3c a4c";
console.log(str3.match(reg7));
console.log(str3.match(reg7_2));


var str4 = "atf btf ktf";
var reg8 = /^[abc]/gi;
console.log(str4.match(str4));

/*
	[xyz]从中括号的字符集合当中任取一个字符
	[^xyz]排除中括号字符集合中的字符
*/

var reg9 = /^a[0-9]/gi;
var str5 = "a1b2c3";
console.log(str5.match(reg9));

//返回以z结尾的字符串
//match是定义在字符串上的，test是定义在正则表达式上的。
var reg10 = /[0-9]z$/gi;
var str6 = "abcd9z";
var str6_2 = "bcfbdfdfd9";
console.log(str6.match(reg10));
console.log(str6_2.match(reg10));
console.log(reg10.test(str6));

/*
	数量词：
	a*	字符出现0次  多次
	a?表示之前的字符出现0次或者1次
	a+表示之前的字符出现1次或者多次
	x{m,n} m为最少n为最多出现可替代的次数。
*/
var reg11 = /abc?/gi;
var str7 = "abc ab kkk";
console.log(str7.replace(reg11,"x"));


var reg12 = /abc+/gi;
var str8 = "abc abccc abcccc ab";
console.log(str8.replace(reg12,"x"));


var reg13 = /abc{1,3}/gi;
var str9 = "abc abcc abccc abcccc";
console.log(str9.replace(reg13,"x"));


/*
	^a 以特定字符起始
	b$ 以特定字符结束
*/



/*
	分组可以看作当前正则表达式的子规则，分组匹配得到的内容，可以在exec方法调用的返回结果中查看。
*/
var reg14 = /(abc)\d/gi;
var str10 = "abc1efg2";
console.log(reg14.exec(str10));// ["abc1", "abc", index: 0, input: "abc1efg2", groups: undefined]


/*
	反向引用，通过 \数字  来引用前面出现的分组
	数字表示从左往右数第几个字符
*/
var reg15 = /(\d)a\1/gi;
var reg16 = /(\d)a(\d)/gi;

var str11 = "2a1sss";
var result1 = str11.replace(reg15,"x");
var result2 = str11.replace(reg16,"x");
console.log(result1);
console.log(result2);


/*
	String.prototype
		str.replace(正则表达式,"替换成的内容")
		str.match(正则表达式)
			返回值是一个数组或者是null
			[整个正则匹配到的内容，分组匹配到的内容，开始匹配位置的索引]
		str.search(正则表达式)
			在str当中检索符合正则表达式规则的内容，如果检索到了，返回其第一个字符出现的位置，如果没有返回-1。
	RegExp.prototype
		reg.text(字符串)
			验证字符串是否符合正则表达式规则，符合返回true，不符合返回false。
		
*/

var reg17 = /(ss)abc\d/gi;
var str12 = "kkafd ssabc2";
var result3 = str12.match(reg17);
console.log(result3);

/*验证压缩文件格式*/
var reg18 = /(.*)\.(rar|zip|7zip|tgz)$/;
/*
	(.+)  压缩文件的名字
	\.	  对.进行转义，表示普通字符。
	(rar|zip|7zip|tgz) 从其中任意取一个类型
	$  	  表示以前面的分组来结尾
*/


var reg19 = /^#[a-fA-F0-9]{6}$/;
/*
	^#表示的是以#开头
	[a-fA-F0-9]表示集合，从其中任取一个字符a-f A-F 0-9
	{6}表示之前的字符出现6次
	$必须要以前面的字符结尾
*/














