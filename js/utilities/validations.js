
export const passwordStrength = (password) => {
    let strength = 0;

    if (password.match(/[a-z]+/)) {
        strength += 1;
    }

    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }

    if (password.match(/[0-9]+/)) {
        strength += 1;
    }

    if (password.match(/[!@#$%^&*()]+/)) {
        strength += 2;
    }

    if (password.length > 8) {
        strength += 3;
    }

    if (!charsRepeated(password)) {
        strength -= 2;
    }

    return strength;
};


const charsRepeated = (password) => {
    const chars = password.split('');
    let repeated = 0;
    chars.forEach((char, index) => {
        if (char === chars[index + 1]) {
            repeated += 1;
        }
    });
    return repeated > 0;
}