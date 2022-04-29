class Node {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
/*
Breadth First Traversal:
const treeIncludes = (root, tgt) => {
    if (root === null) return [];
    const queue = [ root ];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val === tgt) return true;
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return false;
}
*/

// Depth First Traversal:
const treeIncludes = (root, tgt) => {
    if (root === null) return false;
    if (root.val === tgt) return true;
    return treeIncludes(root.left, tgt) || treeIncludes(root.right, tgt)
}


const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(treeIncludes(a,'e'));