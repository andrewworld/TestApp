import Constants from '../../utils/Constants'

export function setName (name) {
    return {
        type: Constants.action.SET_NAME,
        payload: name,
    }
}

export function setPrice (price) {
    return {
        type: Constants.action.SET_PRICE,
        payload: price,
    }
}

export function setImage (image) {
    return {
        type: Constants.action.SET_IMAGE,
        payload: image,
    }
}

export function setDescription (description) {
    return {
        type: Constants.action.SET_DESCRIPTION,
        payload: description,
    }
}

export function setPriceVaries (value) {
    return {
        type: Constants.action.SET_PRICE_VARIES,
        payload: value,
    }
}

export function resetState () {
    return {
        type: Constants.action.RESET_STATE
    }
}