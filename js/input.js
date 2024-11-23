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
});
