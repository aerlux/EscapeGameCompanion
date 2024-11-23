const TestConfig = {
    enable: 0
};

if (TestConfig.enable) {
    document.addEventListener('DOMContentLoaded', () => {
        const testSilenceButton = document.getElementById('testSilenceEvent');
        const testEmeraldResetButton = document.getElementById('testEmeraldReset');

        if (testSilenceButton) {
            testSilenceButton.addEventListener('click', () => {
                UI.showSilenceIKillYou();
            });
        }

        if (testEmeraldResetButton) {
            testEmeraldResetButton.addEventListener('click', () => {
                UI.showEmeraldReset();
            });
        }
    });
}
