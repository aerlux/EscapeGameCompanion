const Audio = {
    playStartupSound: function() {
        const startupSound = document.getElementById('startupSound');
        startupSound.play();
        startupSound.onended = () => {
            this.playBackgroundMusic();
        };
    },
    playBackgroundMusic: function() {
        const backgroundMusic = document.getElementById('backgroundMusic');
        backgroundMusic.play();
    },
    stopAllSounds: function() {
        const sounds = ['backgroundMusic', 'escapeSound', 'startupSound'];
        sounds.forEach(soundId => {
            const sound = document.getElementById(soundId);
            if (sound) {
                sound.pause();
                sound.currentTime = 0;
            }
        });
    }
};
