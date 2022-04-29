const minIslandCount = (grid) => {
    const visited = new Set();
    let min = grid.length * grid[0].length
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            const islandCount = explore(grid, r, c, visited)
            if(islandCount > 0 && islandCount < min) {
                min = islandCount;
            } 
        }
    }
    return min
}

const explore = (grid, r, c, visited) => {
    const rowbounds = 0 <= r && r < grid.length
    const colbounds = 0 <= c && c < grid[0].length
    if (!colbounds || !rowbounds) return 0;
    if (grid[r][c] === "W") return 0
    const pos = r + ',' + c
    if (visited.has(pos)) return 0
    visited.add(pos)
    let count = 1
    count += explore (grid, r - 1, c, visited)
    count += explore (grid, r + 1, c, visited)
    count += explore (grid, r, c + 1, visited)
    count += explore (grid, r, c - 1, visited)
    return count
}
const grid = [
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','W'],
]

console.log(minIslandCount(grid))