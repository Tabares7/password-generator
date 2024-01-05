const canvas = document.getElementById('canvas');


const password = document.getElementById('password');


const length = document.getElementById('length');
const upper = document.getElementById('uppercase');
const lower = document.getElementById('lowercase');
const num = document.getElementById('numbers');
const sym = document.getElementById('symbols');
const generate = document.getElementById('generate');
const copy = document.getElementById('copy');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";


const passwordGenerator = () => {
    const len = length.value;
    const upperChecked = upper.checked;
    const lowerChecked = lower.checked;
    const numChecked = num.checked;
    const symChecked = sym.checked;

    password.innerHTML = generatePassword(len, upperChecked, lowerChecked, numChecked, symChecked);
}

const generatePassword = (len, upperChecked, lowerChecked, numChecked, symChecked) => {
    let password = "";
    let characters = "";
    if (upperChecked) {
        characters += upperLetters;
    }
    if (lowerChecked) {
        characters += lowerLetters;
    }
    if (numChecked) {
        characters += numbers;
    }
    if (symChecked) {
        characters += symbols;
    }

    for (let i = 0; i < len; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}

generate.addEventListener('click', passwordGenerator);

copy.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = password.innerHTML;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
}   );