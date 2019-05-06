/**
 * Created by qile on 2017/8/14.
 */
//Part 1
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(1));//true
console.log(Boolean(""));
console.log(Boolean("abc"));//true
console.log(Boolean({}));//true

if(new Boolean(false)){
    console.log("执行");
}
//执行

//true+1    2

//Part 2
console.log(Number(undefined));//NAN
console.log(Number(null));//0
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(""));//0
console.log(Number("abc"));//NAN
console.log(Number("123.345xx"));//NAN
console.log(Number("32343,345xx"));//NAN
console.log(Number({x:1,y:2}));//NAN

console.log(parseFloat("123.345xx"));//123.345
console.log(parseFloat("32343,345xx"));//32343
console.log(parseInt("123.345xx"));//123
console.log(parseInt("32343,345xx"));//32343

//Part 3
console.log(String(undefined));//undefined
console.log(String(null));//null
console.log(String(true));//true
console.log(String(false));//false
console.log(String(0));//0
console.log(String(234));//234
console.log(String({x:1,y:2}));//[object Object]