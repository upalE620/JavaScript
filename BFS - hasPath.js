const hasPath = (graph, src, dst) => {
    const queue = [src]
    while (queue.length > 0) {
        current = queue.shift()
        if (current === dst) return true
        for (let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
    return false
}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

console.log(hasPath(graph, 'a', 'f'))