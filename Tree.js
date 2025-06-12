class MyNode {
  constructor(content, nearNodes) {
    this.content = content;
    this.nearNodes = nearNodes;
  }

  addNode(node) {
    this.nearNodes.push(node);
  }

  static connect(node1, node2) {
    node1.addNode(node2);
    node2.addNode(node1);
  }

  static visitBreadthFirst(root, callback = () => {}) {
    //this array remembers what node has been visited
    const nuovo = {};
    const queue = [];
    const graph = [];
    queue.push(root);

    while (queue.length !== 0) {
      let temp = queue.shift();
      callback(temp);
      graph.push(temp);

      nuovo[temp.content] = 1;

      for (let t of temp.nearNodes) {
        if (nuovo[t.content]) {
          continue
        } else {
          queue.push(t);
          nuovo[t.content] = 1;
        }
      }
    }
    return graph;
  }

  visitDepthFirst(callback = () => {}){
    const root = this;
    const seen = {};
    const stack = [];
    const graph = [];

    seen[root.content] = 1;
    stack.unshift(root);

    while(stack.length !== 0){
      let temp = stack.shift();
      graph.push(temp);
      callback(temp);
      for(let t of temp.nearNodes){
        if(seen[t.content]){
          continue
        }else{
          stack.unshift(t);
          seen[t.content] = 1;
        }
      }
    }  
    return graph;
  }

}

const s = new MyNode(`s`, []);
const a = new MyNode(`a`, []);
const b = new MyNode(`b`, []);
const c = new MyNode(`c`, []);
const d = new MyNode(`d`, []);
const e = new MyNode(`e`, []);
const f = new MyNode(`f`, []);
const g = new MyNode(`g`, []);
const h = new MyNode(`h`, []);

MyNode.connect(s, b);
MyNode.connect(s, d);
MyNode.connect(s, e);
MyNode.connect(b, a);
MyNode.connect(b, c);
MyNode.connect(c, d);
MyNode.connect(e, f);
MyNode.connect(e, g);
MyNode.connect(g, f);
MyNode.connect(g, h);

let graph = MyNode.visitBreadthFirst(s);

let n = performance.now();
console.log(graph);
let n1 = performance.now();

console.log(`${n1- n}ms`)


graph = s.visitDepthFirst();
n = performance.now();
console.log(graph);
n1 = performance.now();

console.log(`${n1- n}ms`)