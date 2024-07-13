document.addEventListener("DOMContentLoaded", () => {
    let score = 0;
    const ball = document.getElementById('ball');
    const scoreDisplay = document.getElementById('score');
    const gameArea = document.getElementById('gameArea');
    const gameOverText = document.getElementById('gameOver');
    let gameOver = false;

    ball.addEventListener('click', () => {
        if (!gameOver) {
            score++;
            scoreDisplay.textContent = score;
            moveBall();
        }
    });

    gameArea.addEventListener('click', (event) => {
        if (event.target !== ball && !gameOver) {
            gameOver = true;
            gameOverText.style.display = 'block';
            ball.style.display = 'none';
        }
    });

    function moveBall() {
        const gameAreaRect = gameArea.getBoundingClientRect();
        const ballSize = 50; // ball size is 50x50px
        const maxLeft = gameAreaRect.width - ballSize;
        const maxTop = gameAreaRect.height - ballSize;
        
        const newLeft = Math.random() * maxLeft;
        const newTop = Math.random() * maxTop;
        
        ball.style.left = `${newLeft}px`;
        ball.style.top = `${newTop}px`;
    }

    moveBall(); // initial move
});
