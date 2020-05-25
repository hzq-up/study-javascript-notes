/*最好在JavaScript和HTML代码中各自使用独立的引号风格。
在JavaScript表达式中使用单引号表示字符串，而在HTML事件处理程序的属性中
则使用双引号表示字符串:
<button onclick="alert('Thank you')">Click Me</button>
*/


/*
    转义字符
    反斜杠(\)后加一个字符会转义
    转义字符        含义
    \0              NUL字符
    \b              退格符
    \t              水平制表符
    \n              换行符
    \v              垂直制表符
    \f              换页符
    \r              回车符
    \"              双引号
    \'              撤号或者单引号
    \\              反斜杠
*/

/*

*/
// var a = "123456789"
// alert(a.length)

// console.log(a.charAt(0))
// console.log(a.charAt(a.length-1))
/*
字符串可以当作只读数组，除了charAt()方法，
也可以使用方括号来访问字符串中的单个字符
*/
// s = "hello, hzq_up";
// console.log(s[0])   // => "h"
// console.log(s[s.length-1])  // => "p"