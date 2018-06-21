/**
 * Created by Gaoqian on 2018/5/4.
 */
//we require a module from the node_module which is used to read information from the cmd line
var readline = require('readline');

//then we create interface by using this function.
var  rl = readline.createInterface(process.stdin, process.stdout);
//we can write some tips here.
rl.setPrompt('输入要验证的年份');
rl.prompt();//ready to read  information from command line.

//when you press enter in the command line ,the 'line' event occurs.
rl.on('line', function(line) {
    if(line.trim()==='close')
        rl.close();
    else
    {
        //read from the command line and save it in a variable
        let year=line.trim();
        //judge and get the result.
        if((year%4 == 0 && year%100 != 0) || year %400 == 0)
            console.log(year+" is a leap year!");
        else
        {
            console.log(year+" is not a leap year!");
        }
    }
    rl.prompt();
});

rl.on('close', function() {
    process.exit(0);
});