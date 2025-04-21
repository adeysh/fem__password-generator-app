import { checkboxOptions, copyButton, lengthValue, passwordText } from "./constants";

const generatePassword = () => {
    const charsets = [
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        "abcdefghijklmnopqrstuvwxyz",
        "0123456789",
        "!@#$%^&*()_+-=[]{}|;:,.<>?/",
    ];
    let guaranteedChars = "";
    const selectedCharsets = [];

    checkboxOptions.forEach((input, index) => {
        if (input.checked) {
            const charset = charsets[index];
            const randomChar = charset[Math.floor(Math.random() * charset.length)];
            guaranteedChars += randomChar;

            selectedCharsets.push(charset);
        }
    });

    const combinedCharset = selectedCharsets.join("");
    const remainingLength = lengthValue - guaranteedChars.length;
    let password = guaranteedChars;

    for (let i = 0; i < remainingLength; i++) {
        password += combinedCharset[Math.floor(Math.random() * combinedCharset.length)];
    }

    password = password.split("").sort(() => Math.random() - 0.5).join("");
    return password;
};

export const handlePasswordGeneration = () => {
    const password = generatePassword();
    passwordText.textContent = password;
    passwordText.style.opacity = "1";
    copyButton.disabled = false;
};