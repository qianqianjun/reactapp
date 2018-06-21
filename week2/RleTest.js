/**
 * Created by Gaoqian on 2018/5/4.
 */

function compress(str)
{
    let i=0;
    let head='';
    let num=0;
    let result='';
    while(i<str.length)
    {
        head=str[i];
        //compare the value of the head and the next character.get the amount of a character.
        while(str[i+1]===head)
        {
            //increase
            i++;
            num++;
        }
        i++;
        num++;
        //if a character only appear once,just add it to the result string without its amount '1';
        if(num===1)
        {
            result+=head;
        }
        //add amount and the character to the result string.
        else
        {
            result+=num;
            result+=head;
        }
        num=0;
    }
    return result;
}
function uncompress(s) {
    var i = 0;
    var result3 = '';
    while (i < s.length) {
        //judge if the parameter is a number.it return true if not.
        if (isNaN(s[i])) {
            result3 += s[i];
            //console.log(s[i]);
            i++;
        }
        else {
            let num = '';
            //to get the amount of a character.
            while (!isNaN(s[i])) {
                num += s[i];
                i++;
            }
            //use parseInt() to transform num from string to number.
            result3 += s[i].repeat(parseInt(num));
            //console.log(s[i].repeat(num));
            i++;
        }
    }
    return result3;
}
//declare a string variable.
var str="WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB";
//compress the string;
var result=compress(str);
console.log(result);

//解压

 var result2=uncompress(result);
 console.log(result2);

