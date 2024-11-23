
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const advancedButton = document.getElementById('advancedButton');
    const advancedControls = document.getElementById('advancedControls');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const escapeSound = document.getElementById('escapeSound');
    const startupSound = document.getElementById('startupSound');
    let gameTimeout, playCount = 0;

    advancedButton.addEventListener('click', () => {
        advancedControls.style.display = advancedControls.style.display === 'none' ? 'block' : 'none';
    });

    startButton.addEventListener('click', startGame);

    function startGame() {
        playCount = 0;
        startButton.style.display = 'none';
        UI.showGameStatus();
        startupSound.currentTime = 0;
        startupSound.play();

        startupSound.onended = () => {
            backgroundMusic.play();
            setTimeout(() => {
                playEscapeSound();
                scheduleNextEscape();
                scheduleEmeraldReset();
            }, parseInt(document.getElementById('firstEscapeDelay').value) * 60000);

            gameTimeout = setTimeout(() => {
                endGame();
            }, parseInt(document.getElementById('gameDuration').value) * 60000);
        };
    }

    function endGame() {
        clearTimeout(gameTimeout);
        backgroundMusic.pause();
        escapeSound.pause();
        backgroundMusic.currentTime = 0;
        escapeSound.currentTime = 0;
        UI.hideGameStatus();
        startButton.style.display = 'block';
        alert('Game Over!');
    }

    function playEscapeSound() {
        if (playCount < parseInt(document.getElementById('escapeCount').value)) {
            backgroundMusic.pause();
            escapeSound.currentTime = 0;
            escapeSound.play();

            setTimeout(() => {
                escapeSound.pause();
                escapeSound.currentTime = 0;
                backgroundMusic.play();
            }, parseInt(document.getElementById('escapeDuration').value) * 1000);

            playCount++;
        }
    }

    function scheduleNextEscape() {
        const nextPlayTime = Math.random() * (parseInt(document.getElementById('escapeDuration').value) * 1000) + 60000;
        setTimeout(() => {
            playEscapeSound();
        }, nextPlayTime);
    }

    function scheduleEmeraldReset() {
        const minDelay = parseInt(document.getElementById('firstEscapeDelay').value) * 60000;
        const maxDelay = parseInt(document.getElementById('gameDuration').value) * 60000;
        const randomTime = Math.random() * (maxDelay - minDelay) + minDelay;

        setTimeout(() => {
            checkEmeraldReset();
        }, randomTime);
    }

    function checkEmeraldReset() {
        const probability = parseInt(document.getElementById('probabilitySlider').value);
        if (Math.random() * 100 < probability) {
            UI.showEmeraldReset();
        }
    }
});