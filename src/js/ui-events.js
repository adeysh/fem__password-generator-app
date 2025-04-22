import { slider, copyButton, form, generateButton, setLengthValue, checkboxOptions } from './constants';
import { updateSliderBackground, updateLengthValue, copyToClipboard, updateGenerateButtonState, updateCopyButtonState } from './dom-events';
import { handlePasswordGeneration } from './password-generator';
import { calculateStrength, updateStrengthBars } from './password-strength';

const updateUI = () => {
    setLengthValue(slider.value);
    updateSliderBackground(slider);
    updateLengthValue(slider);
    updateStrengthBars(calculateStrength());
    updateGenerateButtonState();
}

export const setupEventListeners = () => {
    window.addEventListener("load", () => {
        updateUI();
        updateCopyButtonState();
    });

    slider.addEventListener("input", updateUI);

    checkboxOptions.forEach((option) => {
        option.addEventListener("change", () => {
            updateStrengthBars(calculateStrength());
            updateGenerateButtonState();
        })
    });

    form.addEventListener("submit", e => e.preventDefault());
    generateButton.addEventListener("click", handlePasswordGeneration);
    copyButton.addEventListener("click", copyToClipboard);
}