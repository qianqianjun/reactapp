/**
 * Created by Gaoqian on 2018/5/4.
 */

//we can get the global variable inside the function.
/*
var x=100;
(function(){
    console.log(x);
})();*/

//but we cannot get the variable which declare inside the function.

/*
function setx()
{
    var X=100;
}
console.log(X);*/
//ReferenceError: X is not defined


//sometimes we should get a local variable inside a function ,such as a interval;
/*
function adder()
{
    var number =0;
    return number++;
}*/


/*
var adder=(function (){
    var number=0;

    return function(){
        console.log(number);
        number++;
    }
})();
setInterval(adder,1000);*/

//closure is a function which can get the local variable;