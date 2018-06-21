/**
 * Created by gaoQian on 2018/5/4.
 */

function outPut(arr)
{
    for(let j=0;j<arr.length;j++)
        console.log(arr[j]);
}
var arr=new Array();

//1.append element in the array


arr.push('apple');
arr.push('banana');
arr.push('money');
arr.push('power');
arr.push('beautifulGirl');
/*
outPut(arr);

//2.return a new array with the select element
//ArrayObject.slice(start,end); do not contain the end element

const newArr=arr.slice(0,2);
outPut(newArr)*/


//delete operator : splice(start,number)
/*
arr.splice(2,2);
outPut(arr);
*/

//concat(arr1,arr2)  connect two or more array
/*
var arr1=new Array('first');
var arr2=new Array('second');
arr1.concat(arr2);
outPut(arr1);
outPut(arr1.concat(arr2));*/
/*
concat()	连接两个或更多的数组，并返回结果。
join()	把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。  arr.join(",") 以都好分隔
pop()	删除并返回数组的最后一个元素
push()	向数组的末尾添加一个或更多元素，并返回新的长度。
reverse()	颠倒数组中元素的顺序。  (change the original array)
shift()	删除并返回数组的第一个元素
slice()	从某个已有的数组返回选定的元素
sort()	对数组的元素进行排序
splice()	删除元素，并向数组添加新元素。
toSource()	返回该对象的源代码。
toString()	把数组转换为字符串，并返回结果。
toLocaleString()	把数组转换为本地数组，并返回结果。
unshift()	向数组的开头添加一个或更多元素，并返回新的长度。
valueOf()	返回数组对象的原始值
*/