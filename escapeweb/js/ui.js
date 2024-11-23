// ui.js
const UI = {
    showGameStatus: function() {
        const gameStatus = document.getElementById('gameStatus');
        gameStatus.style.display = 'block';
    },
    hideGameStatus: function() {
        const gameStatus = document.getElementById('gameStatus');
        gameStatus.style.display = 'none';
    },
    updateSliderValue: function(id, value) {
        document.getElementById(id).textContent = value;
    },
    showSilenceIKillYou: function() {
        const popup = document.getElementById('silenceIKillYouPopup');
        popup.style.display = 'flex';
    },
    showEmeraldReset: function() {
        const emeraldResetPopup = document.getElementById('emeraldResetPopup');
        emeraldResetPopup.style.display = 'flex';
    },
};
