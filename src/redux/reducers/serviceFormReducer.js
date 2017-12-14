import Constants from '../../utils/Constants'

const initialState = {
    name: '',
    price: '',
    description: '',
    image: 'https://semantic-ui.com/images/wireframe/image.png',
    priceVaries: false //TODO-andrew not using in creation and update
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
        case Constants.action.SET_PRICE_VARIES:
            return {...state, priceVaries: action.payload}
        case Constants.action.RESET_STATE:
            return initialState
        default:
            return state
    }
}