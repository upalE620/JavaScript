const hasPath = (graph, src, dst) => {
    if (src === dst) return true
    for (let neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dst) === true) return true
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