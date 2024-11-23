// input.js
document.addEventListener('DOMContentLoaded', () => {
    const sliders = [
        'gameDuration', 'escapeDuration', 'escapeCount',
        'firstEscapeDelay', 'probabilitySlider'
    ];

    sliders.forEach(sliderId => {
        const slider = document.getElementById(sliderId);
        slider.oninput = function() {
            const valueElement = document.getElementById(`${sliderId}Value`);
            valueElement.textContent = this.value;
        };
    });

    // Event listener for probabilitySlider
    const probabilitySlider = document.getElementById('probabilitySlider');
    probabilitySlider.oninput = function() {
        const probabilityValueElement = document.getElementById('probabilityValue');
        probabilityValueElement.textContent = this.value;
    };

    // Enable test buttons based on TestConfig
    if (TestConfig.enable) {
        const container = document.querySelector('.container');

        // Create Test Silence Button
        const testSilenceButton = document.createElement('button');
        testSilenceButton.id = 'testSilenceEvent';
        testSilenceButton.className = 'btn btn-info';
        testSilenceButton.textContent = 'Test Silence I Kill You';
        container.appendChild(testSilenceButton);

        // Create Test Emerald Reset Button
        const testEmeraldResetButton = document.createElement('button');
        testEmeraldResetButton.id = 'testEmeraldReset';
        testEmeraldResetButton.className = 'btn btn-warning';
        testEmeraldResetButton.textContent = 'Test Emerald Reset';
        container.appendChild(testEmeraldResetButton);

        // Add event listeners for the test buttons
        testSilenceButton.addEventListener('click', () => {
            UI.showSilenceIKillYou();
        });

        testEmeraldResetButton.addEventListener('click', () => {
            UI.showEmeraldReset();
        });
    }
});
