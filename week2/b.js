/**
 * Created by Gaoqian on 2018/5/4.
 */

for(var i=0;i<10;i++)
{
    console.log("*");
}
console.log(i);

for(let j=0;j<10;j++);
//throw exception:
//console.log(j);

//you can not change the value and type after you declare a variable by using const

const a=100;
//a=99;  it is wrong;
//you must give the value when you declare a const variable;


//using let or var keyword to declare a immutable variable ,it can be change easily;

//the var keyword was widely used in ES5 syntax. but in ES6 ,we use let to replace with;
var b=100;
b=b+1;
console.log(b);

let c=10;
c++;
console.log(c);


//
