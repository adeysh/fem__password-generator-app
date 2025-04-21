import { copyButton, currentLength, generateButton, passwordText } from './constants';
import { calculateStrength } from './password-strength';

export const updateSliderBackground = (slider) => {

    const value = slider.value;
    const min = slider.min;
    const max = slider.max;
    const percent = ((value - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(to right, var(--Mint-Green) 0%, var(--Mint-Green) ${percent}%, var(--Baltic-Sea) ${percent}%, var(--Baltic-Sea) 100%)`;
};

export const updateLengthValue = (slider) => {
    currentLength.textContent = slider.value;
};

export const copyToClipboard = () => {
    navigator.clipboard.writeText(passwordText.textContent);
};

export const updateGenerateButtonState = () => {
    // console.log(calculateStrength());
    if (calculateStrength() > 0) return (generateButton.disabled = false);
    generateButton.disabled = true;
};

export const updateCopyButtonState = () => {
    console.log("copy button");
    copyButton.disabled = true;
}