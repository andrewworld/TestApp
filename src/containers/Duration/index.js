import React from 'react'
import { Picker, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import { setDuration, setDurationMode } from '../../redux/actions/serviceFormActions'
import Constants from '../../utils/Constants'
import { minToString } from '../../utils/helper'
import styles from './styles'

@connect(
    state => ({
        items: state.dataState.services,
        duration: state.serviceFormState.duration,
        startDuration: state.serviceFormState.startDuration,
        processDuration: state.serviceFormState.processDuration,
        endDuration: state.serviceFormState.endDuration,
        durationMode: state.serviceFormState.durationMode,
    }),
    dispatch => ({
        setDuration: (duration, type) => dispatch(setDuration(duration, type)),
        setDurationMode: (mode) => dispatch(setDurationMode(mode)),
    }),
)
export default class DurationContainer extends React.Component {

    constructor (props) {
        super(props)

        this._onValueChange = this._onValueChange.bind(this)
    }

    get _service () {
        let index = this.props.items.findIndex(item => item.key === this.props.id)

        return this.props.items[index]
    }

    get _duration () {
        return this._service && this._service.duration
    }

    get _durationValue () {
        switch (this.props.durationMode) {
            case Constants.string.TOTAL_DURATION:
                return this.props.duration
            case Constants.string.START_DURATION:
                return this.props.startDuration
            case Constants.string.PROCESS_DURATION:
                return this.props.processDuration
            case Constants.string.END_DURATION:
                return this.props.endDuration
        }
    }

    _onValueChange (value) {
        let {setDuration} = this.props

        switch (this.props.durationMode) {
            case Constants.string.TOTAL_DURATION:
                setDuration(value, Constants.string.TOTAL_DURATION)
                setDuration(value, Constants.string.START_DURATION)
                setDuration(0, Constants.string.PROCESS_DURATION)
                setDuration(0, Constants.string.END_DURATION)
                break
            case Constants.string.START_DURATION:
                setDuration(value, Constants.string.START_DURATION)
                setDuration(value + this.props.processDuration + this.props.endDuration, Constants.string.TOTAL_DURATION)
                break
            case Constants.string.PROCESS_DURATION:
                setDuration(value, Constants.string.PROCESS_DURATION)
                setDuration(this.props.startDuration + value + this.props.endDuration, Constants.string.TOTAL_DURATION)
                break
            case Constants.string.END_DURATION:
                setDuration(value, Constants.string.END_DURATION)
                setDuration(this.props.startDuration + this.props.processDuration + value, Constants.string.TOTAL_DURATION)
                break
        }
    }

    static get _pickerValues () {
        let values = []
        for (let i = 0; i <= 480; i += 15) {
            values.push(i)
        }
        return values
    }

    componentDidMount () {
        if (this.props.id) {
            this.props.setDuration(this.props.duration || this._duration, Constants.string.TOTAL_DURATION)
            this.props.setDuration(this.props.startDuration || this._duration, Constants.string.START_DURATION)
        }
    }

    render () {
        let {durationMode, setDurationMode} = this.props

        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.switchContainer}>
                    <Text style={styles.switchTitle}>{'Add Processing Time'}</Text>
                    <Switch
                        value={durationMode !== Constants.string.TOTAL_DURATION}
                        onValueChange={(value) => setDurationMode(value ? Constants.string.START_DURATION : Constants.string.TOTAL_DURATION)}/>
                </View>
                <View style={styles.pickerContainer}>
                    {durationMode !== Constants.string.TOTAL_DURATION
                        ? (<View style={styles.tabsContainer}>
                            <TouchableOpacity onPress={() => setDurationMode(Constants.string.START_DURATION)}>
                                <Text style={[
                                    styles.tab,
                                    {
                                        backgroundColor: durationMode === Constants.string.START_DURATION ? '#F06292' : 'transparent',
                                        borderTopLeftRadius: 3,
                                        borderBottomLeftRadius: 3,
                                    }]}>{'Start'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setDurationMode(Constants.string.PROCESS_DURATION)}>
                                <Text style={[
                                    styles.tab,
                                    {
                                        backgroundColor: durationMode === Constants.string.PROCESS_DURATION ? '#F06292' : 'transparent',
                                    }]}>{'Process'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setDurationMode(Constants.string.END_DURATION)}>
                                <Text style={[
                                    styles.tab,
                                    {
                                        backgroundColor: durationMode === Constants.string.END_DURATION ? '#F06292' : 'transparent',
                                        borderTopRightRadius: 3,
                                        borderBottomRightRadius: 3,
                                    }]}>{'End'}</Text>
                            </TouchableOpacity>
                        </View>)
                        : null}
                    <Picker
                        itemStyle={{color: 'white'}}
                        style={[styles.picker, {marginTop: durationMode !== Constants.string.TOTAL_DURATION ? 12 : 0}]}
                        selectedValue={this._durationValue}
                        onValueChange={this._onValueChange}>
                        {DurationContainer._pickerValues.map(value => <Picker.Item key={`_id${value}`} label={minToString(value)} value={value}/>)}
                    </Picker>
                    {durationMode !== Constants.string.TOTAL_DURATION
                        ? <Text style={styles.totalDurationText}>{`Total Duration: ${minToString(this.props.duration)}`}</Text>
                        : null}
                </View>
                <Text style={styles.text}>{'We get it, some clients might need more time or less. Set how long the service usually lasts' +
                ' here and you can customize the duration for a client when editing and appointment.'}</Text>
            </ScrollView>
        )
    }
}