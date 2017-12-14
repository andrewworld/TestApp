import { BackHandler } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { DESCRIPTION, SERVICE_FORM } from '../../navigators/AppNavigator'

export function goBack () {
    return async (dispatch, getState) => {
        const state = getState().navState
        if (state.index) {
            dispatch(NavigationActions.back())
        } else {
            BackHandler.exitApp()
        }
    }
}

export function openServiceForm (params) {
    return NavigationActions.navigate({
        routeName: SERVICE_FORM,
        params,
    })
}

export function openDescription (params) {
    return NavigationActions.navigate({
        routeName: DESCRIPTION,
        params,
    })
}