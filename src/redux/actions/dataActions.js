import Constants from '../../utils/Constants'

export function addService (name, price, image, description, duration) {
    return {
        type: Constants.action.ADD_SERVICE,
        payload: {name, price, image, description, duration},
    }
}

export function deleteService (key) {
    return {
        type: Constants.action.DELETE_SERVICE,
        payload: key,
    }
}

export function updateService (key, name, price, image, description, duration) {
    return {
        type: Constants.action.UPDATE_SERVICE,
        payload: {key, name, price, image, description, duration},
    }
}