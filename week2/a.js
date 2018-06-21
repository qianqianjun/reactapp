/**
 * Created by Gaoqian on 2018/5/4.
 */

console.log("a.Distinguish between the different primitive variable types \
in Javascript. Give examples of when you would use each type");

console.log("* ".repeat(20));
console.log("javascript has five different kinds of variables,they are 字符串（String）、\
数字(Number)、布尔(Boolean)、数组(Array)、对象(Object)、空（Null）、未定义（Undefined）。");

//number
console.log("Number");
var a=10;
var b=20;
console.log("10+20="+(a+b));

console.log("String");
var str1="Hello ";
var str2="World";
console.log(str1+str2);

console.log("Boolean");
var value=true;
var value2=false;
if(value)
{
    console.log("the value is true!");
}
if(!value2)
{
    console.log("the value2 is false!");
}

console.log("Undefine");
console.log("when you use a variable which is not define");

console.log("array");
var arr=new Array();
for(let i=0;i<7;i++)
{
    arr[i]=i;
}
for(let j=0;j<arr.length;j++)
    console.log(arr[j]);

console.log("Object");
var newObj={'1':'星期一','2':'星期二'};
console.log(newObj[1]);

