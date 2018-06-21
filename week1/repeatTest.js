/**
 * Created by Gaoqian on 2018/5/1.
 */

var str1="hello";
var str2="worlds";
console.log("The length of the string 'hello' is "+str1.length);

console.log("The length of the string 'worlds' is "+str2.length);

var str3=str1.repeat(20);
var str4=str2.repeat(20);
console.log(str3);
console.log("The length of the result of the str1.repeat(20) is "+str3.length);

console.log("The length of the result of the str1.repeat(20) is "+str4.length);


console.log("The conclusition is the result of the str.repeat(num).length equals num*str.length ");