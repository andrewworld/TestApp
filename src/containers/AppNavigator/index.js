import React, { PureComponent } from 'react'
import { BackHandler } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import { goBack } from '../../redux/actions/navActions'
import AppNavigator from '../../navigators/AppNavigator/index'

@connect(
    (state) => ({
        navState: state.navState,
    }),
    (dispatch) => ({
        dispatch,
        goBack: () => dispatch(goBack()),
    }),
)
export default class AppNavigatorContainer extends PureComponent {

    constructor (props) {
        super(props)

        this._onBackPress = this._onBackPress.bind(this)
    }

    _onBackPress () {
        this.props.goBack()
        return true
    }

    componentDidMount () {
        BackHandler.addEventListener('hardwareBackPress', this._onBackPress)
    }

    componentWillUnmount () {
        BackHandler.removeEventListener('hardwareBackPress', this._onBackPress)
    }

    render () {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    state: this.props.navState,
                    dispatch: this.props.dispatch,
                })}/>
        )
    }
}