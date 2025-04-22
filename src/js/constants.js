export const form = document.getElementById("generator-form");

// Slider
export const slider = document.getElementById("config-slider");
export const currentLength = document.getElementById("length-config-value");
export let lengthValue = null;
export const setLengthValue = (value) => lengthValue = value;

// Buttons and Password Display
export const copyButton = document.getElementById("copy-btn");
export const passwordText = document.getElementById("password-text");
export const generateButton = document.getElementById("generate-btn");

// Checkboxes
export const optionUppercase = document.getElementById("option-uppercase");
export const optionLowercase = document.getElementById("option-lowercase");
export const optionNumbers = document.getElementById("option-numbers");
export const optionSymbols = document.getElementById("option-symbols");
export const checkboxOptions = [optionUppercase, optionLowercase, optionNumbers, optionSymbols];

// Password Strength
export let strengthValue = null;
export const setStrengthValue = (value) => strengthValue = value;

// Strength Display
export const strengthConfigValue = document.getElementById("strength-config-value");
export const strengthBars = document.querySelectorAll(".password-generator__strength-config-bar");

