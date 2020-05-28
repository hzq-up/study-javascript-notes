    // 全局对象Global
    
    //URI 编码方法
    var uri = "http://www.wrox.com/illegal value.htm#start";
    //"http://www.wrox.com/illegal%20value.htm#start"
    alert(encodeURI(uri));

    //"http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start"
    alert(encodeURIComponent(uri));
    /* 一般来说，我们使用 encodeURIComponent() 方法的时候要比使用
     encodeURI()更多，因为在实践中更常见的是对查询字符串参数而不是对基础 URI
     进行编码。
    */


    /*
    使用 encodeURI()编码后的结果是除了空格之外的其他字符都原封不动，只有空格被替换成了
    %20。而 encodeURIComponent()方法则会使用对应的编码替换所有非字母数字字符。这也正是可以
    对整个 URI 使用 encodeURI()，而只能对附加在现有 URI 后面的字符串使用 encodeURIComponent()
    的原因所在。
    */
    var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";
    //http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start
    alert(decodeURI(uri));

    //http://www.wrox.com/illegal value.htm#start
    alert(decodeURIComponent(uri));
    /* eval()方法
        它就像是一个完整的 ECMAScript 解析器它只接受一个参数，即要执行的 ECMAScript（或 JavaScript）
        字符串
    */

    // 此被执行的代码具有与该执行环境相同的作用域链
    //在eval()里面定义变量
    eval("alert('hi')");    //"hello world"

    //在eval()里面定义函数
    eval("function sayHi() { alert('hi'); }");
    sayHi();    //=>"hi"
    


