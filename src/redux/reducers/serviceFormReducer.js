import Constants from '../../utils/Constants'

const initialState = {
    name: '',
    price: '',
    description: '',
    duration: 0,
    startDuration: 0,
    processDuration: 0,
    endDuration: 0,
    image: 'https://semantic-ui.com/images/wireframe/image.png', //TODO-andrew tmp image
    priceVaries: false,
    durationMode: Constants.string.TOTAL_DURATION,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Constants.action.SET_NAME:
            return {...state, name: action.payload}
        case Constants.action.SET_PRICE:
            return {...state, price: action.payload}
        case Constants.action.SET_IMAGE:
            return {...state, image: action.payload}
        case Constants.action.SET_DESCRIPTION:
            return {...state, description: action.payload}
        case Constants.action.SET_DURATION:
            switch (action.payload.type) {
                case Constants.string.START_DURATION:
                    return {...state, startDuration: action.payload.duration}
                case Constants.string.PROCESS_DURATION:
                    return {...state, processDuration: action.payload.duration}
                case Constants.string.END_DURATION:
                    return {...state, endDuration: action.payload.duration}
                case Constants.string.TOTAL_DURATION:
                default:
                    return {...state, duration: action.payload.duration}
            }
        case Constants.action.SET_PRICE_VARIES:
            return {...state, priceVaries: action.payload}
        case Constants.action.SET_DURATION_MODE:
            return {...state, durationMode: action.payload}
        case Constants.action.RESET_STATE:
            return initialState
        default:
            return state
    }
}