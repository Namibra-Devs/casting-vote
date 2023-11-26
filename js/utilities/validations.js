
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


export const validatePassword = (password) => {
    const strength = passwordStrength(password);
    if (strength < 3) {
        throw new Error('Password is too weak');
    }
    return null;
}

export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
        throw new Error('Invalid email address');
    }
    return null;
}

export const validateRequiredFields = (formValues, requiredFields) => {
    for (const field of requiredFields) {
        if (formValues[field] === "") {
            throw new Error(`${field} is required`);
        }
    }
    return null;
}

export const validateForm = (formValues, requiredFields, options = {
    validatePassword: true,
    validateEmail: true
}) => {
    validateRequiredFields(formValues, requiredFields);
    if (options.validateEmail) validateEmail(formValues.email);
    if (options.validatePassword) validatePassword(formValues.password);
}