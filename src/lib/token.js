// async data function database
function getToken() {
    const local = localStorage.getItem('token')
    const localstorage = JSON.parse(local)
    const level = localstorage.username
    return level
}

const Midleware = () => {
    const local = localStorage.getItem('token')
    const localstorage = JSON.parse(local)
    const level = localstorage.level
    const token = level
    return token
}
export { getToken, Midleware }