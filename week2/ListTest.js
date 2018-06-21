/*function List()
{
    var arr=new Array();
    this.data=arr;
    this.size=0;
    this.push=p1;
    this.pop=p2;
    this.unshift=u;
    this.shift=s;
    this.output=out;
    function p1(n)
    {
        this.data.push(n);
        this.size++;
    }
    function p2()
    {
        let elem=this.data.pop();
        this.size--;
        return elem;
    }
    function s()
    {
        let elem=this.data.shift();
        this.size--;
        return elem;
    }
    function u(n)
    {
        this.data.unshift(n);
        this.size++;
    }
    function out()
    {
        for(let i=0;i<this.size;i++)
            console.log(this.data[i]);
    }
}
var list =new List();
list.push(10);
list.push(9);
list.push(8);
list.push(7);
list.push(6);
list.pop();
list.unshift(20);
list.output();
list.shift();
list.output();
*/

//declare a class listnode to define the node of the list.
class listNode{
    constructor(value){
        this.value=value;
        this.next={};
        this.pre={};
    };
    setNext(next)
    {
        this.next=next;
    }
    setPre(pre)
    {
        this.pre=pre;
    }
};

//declare a class to description the list .
class List{
    constructor()
    {
        this.data=new Array();
    }
    // this function is used to add new node to the list.
    push(element)
    {
        this.data.push(element);
        let len=this.data.length;
        if(len==1)
        {
          this.data[0].setPre(this.data[0]);
          this.data[0].setNext(this.data[0]);
        }
        else
        {
          this.data[len-1].setPre(this.data[len-2]);
          this.data[len-2].setNext(this.data[len-1]);
        }
    }
    //this function is used to delete the bottom of the list.
    pop()
    {
        this.data.pop();
        let len=this.data.length;
        if(len>=1)
            this.data[len-1].setNext({});
    }
    //this function is used to insert a new node to the list.
    unShift(element)
    {
        this.data.unshift(element);
        if(this.data.length>=1)
        {
            this.data[0].setNext(this.data[1]);
            this.data[1].setPre(this.data[0]);
        }
    }
    //this function is used to delete the top of the list.
    shift()
    {
        this.data.shift();
        if(this.data.length>=1)
           this.data[0].setPre({});
    }

}

//declare a new variable l use class List;
let l=new List();

// we push five node to the list;
for(let i=0;i<5;i++)
{
    l.push(new listNode('node'+i))
}

for(let i=0;i<l.data.length;i++)
    console.log(l.data[i].value);
//we delete three node from the back;
for(let i=0;i<1;i++)
    l.pop();
//check the result:
for(let i=0;i<l.data.length;i++)
    console.log(l.data[i].value);
//we add an new node to the top of the list;
l.unShift(new listNode('newnode'));
//check the result:
for(let i=0;i<l.data.length;i++)
    console.log(l.data[i].value);
//we delete the top element;
l.shift();
//check the result:
for(let i=0;i<l.data.length;i++)
    console.log(l.data[i].value);

//check the link between the node
for(let i=0;i<l.data.length;i++)
{
    console.log(l.data[i].value+" next "+l.data[i].next.value);
}
for(let i=(l.data.length-1);i>=0;i--)
{
    console.log(l.data[i].value+" pre "+l.data[i].pre.value);
}




