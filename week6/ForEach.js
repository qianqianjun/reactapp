/**
 * Created by Gaoqian on 2018/6/7.
 */

/**
 * define the foreach function
 */
const ForEach=(arr,visitor)=>{
    let value;
    for(let i=0;i<arr.length;i++)
        value=visitor(arr[i],i);
    return value;
};

/*
define a array
 */
let arr=[];
for(let i=0;i<10;i++)
    arr.push(i);
//define the visitor function which return the square of the origin element.
const Visitor=(currentElem)=>{
    currentElem=currentElem*currentElem;
    console.log(currentElem);
};
//get the square of the array element.
ForEach(arr,Visitor);
//判断函数
const predicate=(currentElem)=>{
    if(currentElem>5)
        return true;
    return false;
};
//判断是否存在大于5的元素.
const Some=(arr,predicate)=>
{
    if(ForEach(arr,predicate))
        return true;
};
//判断是否所有元素都是大于5的.
const Every=(arr,predicate)=>{
    if(!ForEach(arr,predicate))
        return false;
};
if(Some(arr,predicate))
    console.log("some return true");
if(!Every(arr,predicate))
    console.log("every return false");
