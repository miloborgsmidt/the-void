const WIDTH = 62;
const HEIGHT = 62;

const things = [
    { id: "player", symbol: "X", x: Math.floor(WIDTH / 2), y: Math.floor(HEIGHT / 2) },
    { id: "monster", symbol: "M", x: 5, y: 5 }
];

const gridElement = document.getElementById('grid');

// Create the initial empty grid
function renderGrid() {
    let output = '';
    yloop: for (let gridY = 0; gridY < HEIGHT; gridY++) {
        xloop: for (let gridX = 0; gridX < WIDTH; gridX++) {
            if (gridX === 0 || gridX === WIDTH - 1 || gridY === 0 || gridY === HEIGHT - 1) {
                output += '+'; // Border
                continue;
            }
            for (const { id, symbol, x, y } of things) {
                if (gridX === x && gridY === y) {
                    output += `<span class="player">${symbol}</span>`;
                    continue xloop;
                }
            }
            output += '·'; // Empty space (dot for subtle texture)
        }
        output += '\n';
    }

    gridElement.innerHTML = output;
}

// Initial render
renderGrid();

// Handle arrow key movement
document.addEventListener('keydown', (e) => {
    let moved = false;
    const player = things[0];
    switch (e.key) {
        case 'ArrowUp':
            if (player.y > 1) {
                player.y--;
                moved = true;
            }
            break;
        case 'ArrowDown':
            if (player.y < HEIGHT - 2) {
                player.y++;
                moved = true;
            }
            break;
        case 'ArrowLeft':
            if (player.x > 1) {
                player.x--;
                moved = true;
            }
            break;
        case 'ArrowRight':
            if (player.x < WIDTH - 2) {
                player.x++;
                moved = true;
            }
            break;
    }

    if (moved) {
        renderGrid();
    }
});

// Focus the page to capture key events
window.focus();
