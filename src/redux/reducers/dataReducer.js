import Constants from '../../utils/Constants'
import { generateId } from '../../utils/helper'

const initialState = {
    services: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Constants.action.ADD_SERVICE: {
            let services = state.services.slice()

            services.unshift({
                key: generateId(),
                ...action.payload,
            })
            return {...state, services}
        }
        case Constants.action.DELETE_SERVICE: {
            return {...state, services: state.services.filter(item => item.key !== action.payload)}
        }
        case Constants.action.UPDATE_SERVICE: {
            let services = state.services.slice()
            let index = services.findIndex(item => item.key === action.payload.key)

            services[index] = {...action.payload}
            return {...state, services}
        }
        default:
            return state
    }
}