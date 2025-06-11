class MyNode{
  constructor(content, nearNodes){
    this.content = content;
    this.nearNodes = nearNodes;
  }

  addNode(node){
    this.nearNodes.push(node);
  }

  static connect(node1, node2){
    node1.addNode(node2);
    node2.addNode(node1);
  }
}

const graph = [];
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



