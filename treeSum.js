class Node {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
/*
Depth First Traversal:
const treeSum = (root) => {
    if (root === null) return 0;
    return root.val + treeSum(root.left) + treeSum(root.right)
}
*/

const treeSum = (root) => {
    if (root == null) return 0;
    const queue = [ root ];
    let sum = 0;
    while (queue.length > 0) {
        const current = queue.shift();
        sum += current.val;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return sum;
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

console.log(treeSum(a));