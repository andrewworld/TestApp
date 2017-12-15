import React from 'react'
import { Image, SectionList, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { connect } from 'react-redux'
import { openDescription } from '../../redux/actions/navActions'
import { resetState, setDescription, setImage, setName, setPrice, setPriceVaries } from '../../redux/actions/serviceFormActions'
import styles from './styles'

@connect(
    state => ({
        items: state.dataState.services,
        name: state.serviceFormState.name,
        price: state.serviceFormState.price,
        description: state.serviceFormState.description,
        image: state.serviceFormState.image,
        priceVaries: state.serviceFormState.priceVaries,
    }),
    dispatch => ({
        setName: (name) => dispatch(setName(name)),
        setPrice: (price) => dispatch(setPrice(price)),
        setImage: (image) => dispatch(setImage(image)),
        setDescription: (description) => dispatch(setDescription(description)),
        setPriceVaries: (value) => dispatch(setPriceVaries(value)),
        resetState: () => dispatch(resetState()),
        openDescription: (key) => dispatch(openDescription({key})),
    }),
)
export default class ServiceFormContainer extends React.Component {

    constructor (props) {
        super(props)

        this._renderHeader = this._renderHeader.bind(this)
        this._onHeaderPress = this._onHeaderPress.bind(this)
    }

    get _service () {
        let index = this.props.items.findIndex(item => item.key === this.props.id)

        return this.props.items[index]
    }

    get _serviceName () {
        return this._service && this._service.name
    }

    get _serviceImage () {
        return this._service && this._service.image
    }

    get _servicePrice () {
        return this._service && this._service.price
    }

    get _serviceDescription () {
        return this._service && this._service.description
    }

    get _serviceDuration () {
        return this._service && this._service.duration
    }

    get _sections () {
        return [
            {
                data: [
                    {
                        title: 'Service Name',
                        value: this.props.name,
                        placeholder: 'e.g. Smokey eye makeup',
                        onChangeText: this.props.setName,
                    },
                    {
                        title: 'Total Duration',
                        value: this._serviceDuration,
                        nearArrow: true,
                        onPress: () => {},
                    },
                    {
                        title: 'Price',
                        value: `${this.props.price}`,
                        placeholder: 'e.g. $100',
                        isNumber: true,
                        onChangeText: this.props.setPrice,
                    },
                    {
                        title: 'Price Varies',
                        value: this.props.priceVaries,
                        onValueChange: this.props.setPriceVaries,
                    }],
            },
            {
                data: [
                    {
                        title: 'Description',
                        value: this.props.description,
                        onPress: () => this.props.openDescription(this.props.id),
                    },
                    {
                        title: 'Category',
                        onPress: () => {},
                    },
                ],
                title: 'Your online booking site will indicate this is a starting price.',
            },
        ]
    }

    _renderHeader () {
        return (
            <View style={styles.header}>
                <Image
                    source={{uri: this.props.image}}
                    style={styles.headerImage}/>
                <TouchableOpacity onPress={this._onHeaderPress}>
                    <Text style={styles.headerText}>{'Add Service Image'}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _onHeaderPress () {
        let options = {
            title: 'Select Image',
            quality: 0.5,
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        }

        ImagePicker.showImagePicker(
            options,
            (response) => {
                if (response.didCancel) console.warn('Canceled by user')
                else if (response.error) console.warn(response.error)
                else this.props.setImage('data:image/jpeg;base64,' + response.data)
            })
    }

    static _renderSeparator () {
        return (
            <View style={styles.listSeparator}>
                <View style={styles.listSeparatorLeft}/>
                <View style={styles.listSeparatorRight}/>
            </View>
        )
    }

    static _renderSectionHeader ({section}) {
        if (!section.title) return null

        return (
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
        )
    }

    static _renderItem ({item}) {
        if (item.onChangeText) {
            return (
                <View style={styles.itemInput}>
                    <Text style={styles.itemInputTitle}>{item.title}</Text>
                    <TextInput
                        value={item.value}
                        keyboardType={item.isNumber ? 'numeric' : 'default'}
                        selectionColor={'#cbcbcb'}
                        underlineColorAndroid={'transparent'}
                        placeholderTextColor={'#373737'}
                        placeholder={item.placeholder}
                        onChangeText={item.onChangeText}
                        style={styles.itemInputValue}/>
                </View>
            )
        } else {
            //TODO-andrew tmp arrow, better use vector icons
            return (
                <TouchableOpacity
                    disabled={!item.onPress}
                    onPress={item.onPress}>
                    <View style={styles.itemButton}>
                        <View style={styles.itemButtonTextContainer}>
                            <Text style={styles.itemButtonTitle}>{item.title}</Text>
                            {item.value && !item.nearArrow
                                ? <Text
                                    numberOfLines={1}
                                    style={{color: 'grey', fontSize: 12}}>
                                    {item.value}
                                </Text>
                                : null}
                        </View>
                        {(item.onValueChange)
                            ? (<Switch
                                value={item.value}
                                onValueChange={item.onValueChange}/>)
                            : (<View style={styles.itemButtonValueContainer}>
                                {item.value && item.nearArrow ? <Text style={styles.itemButtonValue}>{`${item.value || 0}hr`}</Text> : null}
                                <Text style={styles.itemButtonArrow}>{'>'}</Text>
                            </View>)}
                    </View>
                </TouchableOpacity>
            )
        }
    }

    componentDidMount () {
        if (this.props.id) {
            this.props.setName(this._serviceName)
            this.props.setPrice(this._servicePrice)
            this.props.setDescription(this._serviceDescription)
            this.props.setImage(this._serviceImage)
        }
    }

    componentWillUnmount () {
        this.props.resetState()
    }

    render () {
        return (
            <SectionList
                keyExtractor={(item, index) => index}
                sections={this._sections}
                ListHeaderComponent={this._renderHeader}
                renderSectionHeader={ServiceFormContainer._renderSectionHeader}
                ItemSeparatorComponent={ServiceFormContainer._renderSeparator}
                renderItem={ServiceFormContainer._renderItem}
                contentContainerStyle={styles.listContent}
                style={styles.list}/>
        )
    }
}