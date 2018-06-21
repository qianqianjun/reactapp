/**
 * Created by Gaoqian on 2018/5/4.
 */

//a object function is a function declare inside a object

const BUCTer={
    account:"2016014302",
    sex:"纯爷们",
    age:"21",
    getage:function() {
        console.log(this.age);
    }
}

BUCTer.getage();
