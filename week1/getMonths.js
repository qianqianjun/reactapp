
/**
 * Created by Gaoqian on 2018/5/1.
 */

var month=(new Date()).toLocaleString("zh-Hans",{month:"long"});

var currentMonth;

switch(month.substr(1,2))
{
    case  '01':currentMonth="一月";break;
    case  '02':currentMonth="二月";break;
    case  '03':currentMonth="三月";break;
    case  '04':currentMonth="四月";break;
    case  '05':currentMonth="五月";break;
    case  '06':currentMonth="六月";break;
    case  '07':currentMonth="七月";break;
    case  '08':currentMonth="八月";break;
    case  '09':currentMonth="九月";break;
    case  '10':currentMonth="十月";break;
    case  '11':currentMonth="十月";break;
    case  '12':currentMonth="十二月";break;
}
console.log("This is "+currentMonth);