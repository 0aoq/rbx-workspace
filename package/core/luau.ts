export function print(data) {
    return console.log(data)
}

export function warn(data) {
    return console.warn(data)
}

export function error(data) {
    return console.error(data)
}

export default {
    print,
    warn,
    error
}