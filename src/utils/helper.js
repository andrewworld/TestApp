export function generateId () {
    return '_' + Math.random().toString(36).substr(2, 9)
}

export function minToString (mins) {
    if (mins === 0) return `0m`

    let h = Math.floor(mins / 60)
    let m = mins % 60
    if (h === 0){
        return `${m}m`
    }
    else {
        if (m === 0) return `${h}hr`
        else return `${h}hr ${m}m`
    }
}