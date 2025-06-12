class MyBinNode {
  constructor(content = 0, right = null, left = null){
    this.content = content;
    this.right = right;
    this.left = left;
  }
  
  levelTraversal(callback = () => {}){
    const root = this;
    const queue = [];
    const graph = [];

    queue.push(root);

    while(queue.length !== 0){
      let temp = queue.shift();
      callback(temp);
      graph.push(temp);
      if(temp.right){queue.push(temp.right)}
      if(temp.left){queue.push(temp.left)}
    }
    return graph
  }
  
}



const a = new MyBinNode("a");
const b = new MyBinNode("b");
const c = new MyBinNode("c");
const d = new MyBinNode("d");
const e = new MyBinNode("e");
const f = new MyBinNode("f");
const g = new MyBinNode("g");

a.right = b;
a.left = c;
b.right = d;
b.left = e;
c.right = f;
c.left = g;

console.log(a.levelTraversal());