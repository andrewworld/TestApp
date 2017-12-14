import React from 'react'
import { ScrollView, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { setDescription } from '../../redux/actions/serviceFormActions'
import styles from './styles'

@connect(
    state => ({
        items: state.dataState.services,
        description: state.serviceFormState.description,
    }),
    dispatch => ({
        setDescription: (description) => dispatch(setDescription(description)),
    }),
)
export default class DescriptionContainer extends React.Component {

    get _service () {
        let index = this.props.items.findIndex(item => item.key === this.props.id)

        return this.props.items[index]
    }

    get _description () {
        return this._service && this._service.description
    }

    componentDidMount () {
        this.props.setDescription(this.props.description || this._description)
    }

    render () {
        return (
            <ScrollView style={styles.scrollView}>
                <TextInput
                    value={this.props.description}
                    keyboardType={'default'}
                    multiline={true}
                    maxLength={140}
                    selectionColor={'#cbcbcb'}
                    underlineColorAndroid={'transparent'}
                    placeholderTextColor={'#373737'}
                    placeholder={'e.g., Includes full-face makeup'}
                    onChangeText={this.props.setDescription}
                    style={styles.textInput}/>
                <Text style={styles.text}>{'Enter in the description of the service. we recommend keeping it short so clients can easily read it when ' +
                'viewing your personal website. 140 character limit max.'}</Text>
            </ScrollView>
        )
    }
}