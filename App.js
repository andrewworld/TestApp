import React from 'react'
import { AsyncStorage } from 'react-native'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import AppNavigatorContainer from './src/containers/AppNavigator'
import dataReducer from './src/redux/reducers/dataReducer'
import navReducer from './src/redux/reducers/navReducer'
import serviceFormReducer from './src/redux/reducers/serviceFormReducer'

const reducer = combineReducers({
    dataState: persistReducer({key: 'data', storage: AsyncStorage}, dataReducer),
    navState: navReducer,
    serviceFormState: serviceFormReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))
persistStore(store)

export default class App extends React.PureComponent {

    render () {
        return (
            <Provider store={store}>
                <AppNavigatorContainer/>
            </Provider>
        )
    }
}
