const shortestPath = (edges, src, dst) => {
    const graph = buildGraph(edges)
    const queue = [ [src, 0] ];
    const visited = new Set([src]);
    
    while (queue.length > 0) {
        const [current, distance] = queue.shift();
        
        if (current === dst) return distance
        for (let neighbor of graph[current]) {
            if (!visited.has(neighbor)) {  
                visited.add(neighbor)
                queue.push([neighbor, distance + 1])
            }
        }
        
    }
    return -1
}

const buildGraph = (edges) => {
    const graph = {}
    for (let edge of edges) {
        const [a,b] = edge
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph 
}


edges = [
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v'],
]
console.log(buildGraph(edges))
console.log(shortestPath(edges, 'w', 'z'))