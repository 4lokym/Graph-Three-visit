class MyBinNode {
  constructor(content = 0, right = null, left = null) {
    this.content = content;
    this.right = right;
    this.left = left;
  }

  levelTraversal(callback = () => {}) {
    const root = this;
    const queue = [];
    const graph = [];

    queue.push(root);

    while (queue.length !== 0) {
      let temp = queue.shift();
      callback(temp);
      graph.push(temp);
      if (temp.right) {
        queue.push(temp.right);
      }
      if (temp.left) {
        queue.push(temp.left);
      }
    }
    return graph;
  }

  preorder(callback = () => {}) {
    const root = this;
    const stack = [];
    const graph = [];

    stack.unshift(root);
    while (stack.length !== 0) {
      let temp = stack.shift(root);
      callback(temp);
      graph.push(temp);

      if (temp.left) {
        stack.unshift(temp.left);
      }
      if (temp.right) {
        stack.unshift(temp.right);
      }
    }
    return graph;
  }

  postorder(callback = () => {}) {
    const stack = [];
    const stackb = [];
    const graph = [];
    stack[0] = this;
    stackb[0] = true;

    while (stack.length !== 0){
      let temp = stack.shift();
      let b = stackb.shift();

      if(b){
        stack.unshift(temp);
        stackb.unshift(false);
        if (temp.left) {
          stack.unshift(temp.left);
          stackb.unshift(true);
        }
        if (temp.right) {
          stack.unshift(temp.right);
          stackb.unshift(true);
        }
      }else{
        callback(temp);
        graph.push(temp);
      }
    }
    return graph;
  }

  inorder(callback = () =>{}){
    const grap = [];
    const stack = [];
    const root = this;

    stack.unshift(root);
    
    while(stack.length !== 0){
      let temp = stack.shift();

      while(temp){
        stack.unshift(temp);
        temp = temp.left;
      }
      if(stack.length !== 0){
        temp = stack.shift();
        callback(temp);
        grap.push(temp);
        stack.unshift(temp.right);
      }

    }
    return grap;
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

console.log(a.inorder());
