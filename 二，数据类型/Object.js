// 创建 Object 实例的方式有两种

//用new操作符
var person = new Object();
person.name = "Nicholas";
person.age = 29; 


// 使用对象字面量
var person = {
    name : "Nicholas",
    age : 29
   }; 


//获取属性值：1.通过"."操作符，2.通过方括号+属性名组合方式

/*   用方括号+属性名组合方式获取属性值的有点：
        1.如果属性名中包含会导致语法错误的字符，或者属性名使用的是关键字或保留字，可以使用方括
    号表示法；
        2.当属性里面空格时，只能通过这种方法获取了
*/
   //1.通过"."操作符
   console.log(person.name) // =>"Nicholas"
   //2.通过方括号+属性名组合方式
   console.log(person["name"])    // =>"Nicholas"

//    第二种方法的优点
    person["first name"] = "Nicholas";
    alert(person["first name"]) //=> "Nicholas"

    /*注意：用方括号语法时，应该将要访问的属性
    以字符串的形式放在方括号中
    */
   
