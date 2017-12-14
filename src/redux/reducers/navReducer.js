import { NavigationActions } from 'react-navigation'
import AppNavigator, { SERVICES } from '../../navigators/AppNavigator'

const initialState = {
    ...AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName: SERVICES}))
}

export default function appReducer (state = initialState, action) {
    const newState = AppNavigator.router.getStateForAction(action, state) || state
    switch (action.type) {
        case NavigationActions.BACK:
        case NavigationActions.INIT:
        case NavigationActions.NAVIGATE:
        case NavigationActions.RESET:
        case NavigationActions.SET_PARAMS:
        case NavigationActions.URI:
            if (state && newState) {
                const data = AppNavigator.router.getPathAndParamsForState(state)
                const newData = AppNavigator.router.getPathAndParamsForState(newState)
                if (data.path === newData.path &&
                    JSON.stringify(data.params) === JSON.stringify(newData.params)) {
                    return state
                }
            }
    }
    return newState
}