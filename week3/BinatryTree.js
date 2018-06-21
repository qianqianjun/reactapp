class BinaryTree {
    constructor () {
        this.root = null;
    }
    Node(value){
        return {
            value: value,
            left: null,
            right: null,
        }
    }
    insertNode(node, new_node) {
        if(new_node.value < node.value)
        {
            if(!node.left)
            {
                node.left = new_node;
            }
            else
            {
                this.insertNode(node.left, new_node);
            }
        }
        else
        {
            if(!node.right)
            {
                node.right = new_node;
            }
            else
            {
                this.insertNode(node.right, new_node);
            }
        }
    }
    insert(node)
    {
        var newNode = this.Node(node);
        if(!this.root)
        {
            this.root = newNode;
        }
        else
        {
            this.insertNode(this.root, newNode)
        }
    }
    find(node)
    {
        if(!this.root)
        {
            return false;
        }
        else
        {
            return this.findValue(this.root,node);
        }
    }
    findValue(tree,node)
    {
        if(tree===null)
            return false;
        if(tree.value===node)
            return true;
        else
        {
            if(tree.value>node)
            {
                return this.findValue(tree.left,node);
            }
            else
            {
                return this.findValue(tree.right,node);
            }
        }
    }
    //In order traversal
    inOrder(node)
    {
        if(node !== null)
        {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
}
bt =new BinaryTree();
let readline=require("readline");
rl=readline.createInterface(process.stdin,process.stdout);
rl.on("line",function(line){
    if(line.trim()!=="#")
    {
        let temp=line.trim();
        bt.insert(temp);
    }
    else
    {
        rl.close();
    }
});
rl.on("close",function(){
    console.log("create finished ,now you can insert a new node to the tree");
    rl2=readline.createInterface(process.stdin,process.stdout);
    rl2.on("line",function(reader){
        bt.insert(reader.trim());
        console.log("the tree is:");
        bt.inOrder(bt.root);
        rl2.close();
    });
    rl2.on("close",function(){
        rl3=readline.createInterface(process.stdin,process.stdout);
        console.log("you can find a value in the tree");
        rl3.on("line",function(r){
            if(bt.find(r.trim()))
            {
                console.log("find it in the tree");
            }
            else
            {
                console.log("can not find it");
            }
        });
    })
});