import React from 'react'
import { StatusBar, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import { Header, StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import DescriptionContainer from '../../containers/Description'
import DurationContainer from '../../containers/Duration'
import ServiceFormContainer from '../../containers/ServiceForm'
import ServicesContainer from '../../containers/Services'
import { addService, updateService } from '../../redux/actions/dataActions'
import { goBack, openServiceForm } from '../../redux/actions/navActions'
import styles from './styles'

export const SERVICES = 'Services'
export const SERVICE_FORM = 'ServiceForm'
export const DESCRIPTION = 'Description'
export const DURATION = 'Duration'

//TODO-andrew tmp plus, better use vector icons
export default StackNavigator(
    {
        [SERVICES]: {
            screen: ({navigation}) => (<ServicesContainer searchText={navigation.state.params && navigation.state.params.searchText || ''}/>),
            navigationOptions: ({navigation}) => ({
                title: 'Services',
                headerTintColor: 'white',
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle,
                headerLeft: (<View style={{width: 64}}/>),
                headerRight: (
                    <TouchableOpacity onPress={() => navigation.dispatch(openServiceForm())}>
                        <Text style={styles.headerPlusButton}>{'+'}</Text>
                    </TouchableOpacity>),
                header: (props) => (
                    <View>
                        <StatusBar
                            barStyle={'light-content'}
                            backgroundColor={'#222222'}/>
                        <Header {...props}/>
                        <TextInput
                            selectionColor={'#cbcbcb'}
                            underlineColorAndroid={'transparent'}
                            placeholderTextColor={'#a5a5a5'}
                            placeholder={'Search Services & Categories'}
                            onChangeText={(searchText) => navigation.setParams({searchText})}
                            style={styles.searchBar}/>
                    </View>
                ),
            }),
        },
        [SERVICE_FORM]: {
            screen: ({navigation}) => (<ServiceFormContainer id={navigation.state.params && navigation.state.params.key}/>),
            navigationOptions: ({navigation}) => ({
                title: navigation.state.params && navigation.state.params.key ? 'Edit Service' : 'New Service',
                headerTintColor: 'white',
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle,
                headerRight: (<HeaderRight id={navigation.state.params && navigation.state.params.key}/>),
                headerLeft: (
                    <TouchableOpacity onPress={() => navigation.dispatch(goBack())}>
                        <Text style={styles.headerTextButton}>{'Cancel'}</Text>
                    </TouchableOpacity>),
                header: (props) => (
                    <View>
                        <StatusBar
                            barStyle={'light-content'}
                            backgroundColor={'#222222'}/>
                        <Header {...props}/>
                    </View>
                ),
            }),
        },
        [DESCRIPTION]: {
            screen: ({navigation}) => (<DescriptionContainer id={navigation.state.params && navigation.state.params.key}/>),
            navigationOptions: ({navigation}) => ({
                title: 'Optional Details',
                headerTintColor: 'white',
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle,
                headerRight: (<View style={{width: 64}}/>),
                headerLeft: (
                    <TouchableOpacity onPress={() => navigation.dispatch(goBack())}>
                        <Text style={styles.headerTextButton}>{'< Back'}</Text>
                    </TouchableOpacity>),
                header: (props) => (
                    <View>
                        <StatusBar
                            barStyle={'light-content'}
                            backgroundColor={'#222222'}/>
                        <Header {...props}/>
                    </View>
                )
            })
        },
        [DURATION]: {
            screen: ({navigation}) => (<DurationContainer id={navigation.state.params && navigation.state.params.key}/>),
            navigationOptions: ({navigation}) => ({
                title: 'Service Duration',
                headerTintColor: 'white',
                headerStyle: styles.header,
                headerTitleStyle: styles.headerTitle,
                headerRight: (<View style={{width: 64}}/>),
                headerLeft: (
                    <TouchableOpacity onPress={() => navigation.dispatch(goBack())}>
                        <Text style={styles.headerTextButton}>{'< Back'}</Text>
                    </TouchableOpacity>),
                header: (props) => (
                    <View>
                        <StatusBar
                            barStyle={'light-content'}
                            backgroundColor={'#222222'}/>
                        <Header {...props}/>
                    </View>
                )
            })
        }
    },
    {
        cardStyle: styles.cardStyle,
    },
)

@connect(
    (state) => ({
        name: state.serviceFormState.name,
        price: state.serviceFormState.price,
        description: state.serviceFormState.description,
        duration: state.serviceFormState.duration,
        image: state.serviceFormState.image,
    }),
    (dispatch) => ({
        addService: (name, price, image, description, duration) => dispatch(addService(name, price, image, description, duration)),
        updateService: (key, name, price, image, description, duration) => dispatch(updateService(key, name, price, image, description, duration)),
        goBack: () => dispatch(goBack()),
    }),
)
class HeaderRight extends React.Component {

    constructor (props) {
        super(props)

        this._onPress = this._onPress.bind(this)
    }

    _onPress () {
        if (!this.props.id) this.props.addService(this.props.name, this.props.price, this.props.image, this.props.description, this.props.duration)
        else this.props.updateService(this.props.id, this.props.name, this.props.price, this.props.image, this.props.description, this.props.duration)
        this.props.goBack()
    }

    render () {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <Text style={styles.headerTextButton}>{this.props.id ? 'Save' : 'Create'}</Text>
            </TouchableOpacity>
        )
    }
}