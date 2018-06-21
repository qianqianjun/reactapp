/**
 * Created by Gaoqian on 2018/5/4.
 */
//declare a string.
let str="Deal with the faults of others as gently as your own.";
let normal =(function(){
    let result;
    //get a string only have low case character.
    result=str.toLowerCase();
    //delete the space from the string.
    result = result.replace(/\s+/g, "");
    // delete all the character which are not letter by using regular expression.
    result=result.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"");
    return result;
})();

// after calling the function ,there are no space and non-letter character in the string.
str=normal;
let arr;
let square=(function(){
    let row=Math.floor(Math.sqrt(str.length));
    //square:
    let col;
    if(row*row===str.length)
    {
        col=row;
    }
    else
    {
        col=row+1;
    }
    let arr=new Array();
    for(let i=0;i<row;i++)
    {
        arr[i]=str.substr(i*col,col);
    }
    return arr;
})();
arr=square;
let row=arr.length;
let col=arr[0].length;

newarr=new Array();

//Transpose the square.
for(let i=0;i<col;i++)
{
    newarr[i]='';
    for(let j=0;j<row;j++)
    {
        newarr[i]+=arr[j][i];
    }
}
//transpose
let result='';
console.log("*".repeat(5)+'the square is'+'*'.repeat(5));
for(let i=0;i<row;i++)
{
    result+=newarr[i];
    console.log(newarr[i]);
    result+=' ';
}
console.log("*".repeat(5)+'the new string is'+'*'.repeat(5));
console.log(result);

