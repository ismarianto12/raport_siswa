// async data function database
function getToken() {
    const local = localStorage.getItem('token')
    const localstorage = JSON.parse(local)
    const level = localstorage.username
    return level
}

async function Midleware() {
    const local = await localStorage.getItem('token')
    const localstorage = JSON.parse(local)
    const level = localstorage.level
    const token = level
    if (token === '') {
        return
    } else {
        // redirect auth page
    }
}
export { getToken, Midleware }