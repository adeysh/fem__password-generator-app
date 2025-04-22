import { checkboxOptions, lengthValue, setStrengthValue, strengthValue, strengthConfigValue, strengthBars } from './constants';

const passwordStrength = [
    {
        value: 0,
        color: "var(--Cinder)",
        text: null,
    },
    {
        value: 1,
        color: "var(--Carnation)",
        text: "Very Weak",
    },
    {
        value: 2,
        color: "var(--Coral)",
        text: "Weak",
    },
    {
        value: 3,
        color: "var(--Cream-Can)",
        text: "Medium",
    },
    {
        value: 4,
        color: "var(--Mint-Green)",
        text: "Strong",
    },
]

export const calculateStrength = () => {
    setStrengthValue(checkboxOptions.filter((input) => input.checked).length);
    if (lengthValue < 12) return strengthValue - 1;
    if (lengthValue > 16 && strengthValue > 0) return strengthValue + 1;

    return strengthValue;
};

export const updateStrengthBars = (strengthValue) => {
    const strengthIndex = Math.max(0, Math.min(4, strengthValue));
    const strength = passwordStrength[strengthIndex];

    strengthConfigValue.textContent = strength.text;

    strengthBars.forEach((bar, index) => {
        if (index < strengthValue) {
            bar.style.backgroundColor = strength.color;
            bar.style.borderColor = strength.color;
        } else {
            bar.style.backgroundColor = "transparent";
            bar.style.borderColor = "var(--Mischka)";
        }
    });
};