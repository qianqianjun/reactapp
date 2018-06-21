
/**In your own words, explain what is meant by the functional paradigm in computer programming?
 * What are the perceived advantages of this programming paradigm?
 * **/

/*Functional means computation by pure function calls that avoid any global mutable state
or side-effects

 The benefit is the resultant composition can implement potentially complex transformations
 in a very readable and maintainable way.The functional expression of a problem is often
 more obvious and easier to reason about
*/

/**
 * List five features of the Javascript language which allows it to support functional programming
 */

/*
 JS supports Higher-Order Function, Function Closure, Curried Function, Lazy Evaluation and
 Immutability
 */

/**
 * In functional programming, what is meant by the term functor?
 * In your answer show, using Javascript code, an example of a functor
 */

/*
 A functor is a data object can hold elements of any data type and which implements the map operation
 */

/*let app=['123','345','456'];
let app1=app.map(s=> parseInt(s));
let app2=app1.map(s=>s/10);
for(let i=0;i<app2.length;i++)
    console.log(app2[i]);*/

/**
 * What is the visitor pattern? Describe how the visitor pattern is implemented on Javascript arrays
 */

/*
a visitor pattern is some operation on some data structure,such as the array.

 Commonly, developers take a non-mutating, functional
 approach to array processing building on the visitor
 pattern
 */

/**
 * Explain the difference between the map operation and the reduce operation,
 * illustrating your answer with Javascript code
 */
/*
 Reduce calls a given function on each of the elements of
 an array returning a new accumulated value according
 to an initial seed value and some user-defined operation

 Map calls a given function on each of the elements of
 an array returning a new array of the same size with the
 corresponding mapped elements
 */


/*let number= [4, 9, 16, 25];
let temp=number.map(x=>Math.sqrt(x));
for(let i=0;i<temp.length;i++)
    console.log(temp[i]);

let result=number.reduce((x,y)=>x+y,0);
console.log(result);*/



