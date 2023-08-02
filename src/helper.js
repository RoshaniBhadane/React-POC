const staticEmail = "roshani@gmail.com"
const staticPassword = "test123"

const validateEmail = (email, error) => {
    let regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email && regex.test(email) === false) {
        return true
    }
    return false
}
const validatePassword = (password, error) => {
    if (password && password.length < 5) {
        return true
    }
    return false
}

const validateCredentials = (email, password) => {
    if (email === staticEmail && password === staticPassword) {
        return true
    }
    return false
}

export { validateEmail, validatePassword, validateCredentials }