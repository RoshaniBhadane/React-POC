const staticEmail = "roshani@gmail.com"
const staticPassword = "test123"

const validateEmail = (email, error) => {
    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !!(email && regex.test(email) === false);
}
const validatePassword = (password, error) => {
    return !!(password && password.length < 5);
}

const validateCredentials = (email, password) => {
    return !!(email === staticEmail && password === staticPassword);
}

export { validateEmail, validatePassword, validateCredentials }