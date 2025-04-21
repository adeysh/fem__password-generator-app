export const slider = document.getElementById("config-slider");
export const currentLength = document.getElementById("length-config-value");
export const copyButton = document.getElementById("copy-btn");
export const passwordText = document.getElementById("password-text");
export const form = document.getElementById("generator-form");
export const generateButton = document.getElementById("generate-btn");

export const optionUppercase = document.getElementById("option-uppercase");
export const optionLowercase = document.getElementById("option-lowercase");
export const optionNumbers = document.getElementById("option-numbers");
export const optionSymbols = document.getElementById("option-symbols");
export const checkboxOptions = [optionUppercase, optionLowercase, optionNumbers, optionSymbols];

export const strengthConfigValue = document.getElementById("strength-config-value");
export const strengthBars = document.querySelectorAll(".password-generator__strength-config-bar");

export let lengthValue = null;
export const setLengthValue = (value) => lengthValue = value;

export let strengthValue = null;
export const setStrengthValue = (value) => strengthValue = value;