//NaN(Not a Number)不是一个数，但是属于数字类型
//NaN与任何值都不相等,包括NaN本身
console.log(NaN == NaN); //false
//isNaN()判断数据是否“不是数值”,isNaN()会将某些不是数值直接转换成数值，转换不了则返回true
console.log(isNaN(NaN)); //true
console.log(isNaN(10)); //false (10是数值)
console.log(isNaN("10")); //false (被转换成数值10)
console.log(isNaN("blue")); //true (不能转换成数值)
console.log(isNaN(true)); //false (转换成数值1)
//数值转换的方法：Number()、parseInt()和parseFloat(),
/*
Number() 可用于任何数据类型
parseInt()、parseFloat()只能用于把字符串转成数值
*/
// Number()
var num1 = Number("Hello world!"); //NaN
var num2 = Number(""); //0
var num3 = Number("000011"); //11
var num4 = Number(true); //1 
/*
parseInt() 有两个参数，第二参数是进制
多数情况下，我们要解析的都是十进制数值，因此始终将 10 作为第二个参数是
非常必要的
*/
var num1 = parseInt("1234blue"); // 1234
var num2 = parseInt(""); // NaN
var num3 = parseInt("0xA"); // 10（十六进制数）
var num4 = parseInt(22.5); // 22
var num5 = parseInt("070"); // 56（八进制数）
var num6 = parseInt("70"); // 70（十进制数）
var num7 = parseInt("0xf"); // 15（十六进制数）
/* parseFloat() 只解析十进制值
如果字符串包含的是一个可解析为整数的数（没有小数点，或者小数点后
都是零），parseFloat()会返回整数
*/
var num1 = parseFloat("1234blue"); //1234 （整数）
var num2 = parseFloat("0xA"); //0
var num3 = parseFloat("22.5"); //22.5
var num4 = parseFloat("22.34.5"); //22.34
var num5 = parseFloat("0908.5"); //908.5
var num6 = parseFloat("3.125e7"); //31250000 