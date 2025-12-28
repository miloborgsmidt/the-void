const WIDTH = 62;
const HEIGHT = 62;

let playerX = Math.floor(WIDTH / 2);
let playerY = Math.floor(HEIGHT / 2);

const gridElement = document.getElementById('grid');

// Create the initial empty grid
function renderGrid() {
    let output = '';

    for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++) {
            if (x === 0 || x === WIDTH - 1 || y === 0 || y === HEIGHT - 1) {
                output += '+'; // Border
            } else if (x === playerX && y === playerY) {
                output += '<span class="player">X</span>';
            } else {
                output += '·'; // Empty space (dot for subtle texture)
            }
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

    switch (e.key) {
        case 'ArrowUp':
            if (playerY > 1) {
                playerY--;
                moved = true;
            }
            break;
        case 'ArrowDown':
            if (playerY < HEIGHT - 2) {
                playerY++;
                moved = true;
            }
            break;
        case 'ArrowLeft':
            if (playerX > 1) {
                playerX--;
                moved = true;
            }
            break;
        case 'ArrowRight':
            if (playerX < WIDTH - 2) {
                playerX++;
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
