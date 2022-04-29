class Node {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/*
BFS:
const treeMin = (root) => {
    const queue = [ root ];
    let min = root.val;
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val < min) min = current.val;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return min;
}
*/

// DFS:
const treeMin = (root) => {
    if (root == null) return Infinity;
    const leftMin = treeMin(root.left);
    const rightMin = treeMin(root.right);
    return Math.min(root.val, leftMin, rightMin);
} 

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(8);
const e = new Node(2);
const f = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(treeMin(a));