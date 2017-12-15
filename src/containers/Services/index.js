import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import List from '../../components/List'
import { deleteService } from '../../redux/actions/dataActions'
import { openServiceForm } from '../../redux/actions/navActions'
import styles from './styles'

@connect(
    (state, ownProps) => ({
        items: state.dataState.services.filter(item => item.name.toLowerCase().includes(ownProps.searchText.toLowerCase())),
    }),
    dispatch => ({
        onPressItem: ({key}) => dispatch(openServiceForm({key})),
        onLongPressItem: ({key}) => dispatch(deleteService(key)), //TODO-andrew tmp delete on long press, no screenshot for this
    }),
)
export default class ServicesContainer extends React.Component {

    constructor (props) {
        super(props)

        this._renderItem = this._renderItem.bind(this)
    }

    _renderItem ({item}) {
        return (
            <TouchableOpacity
                onPress={() => this.props.onPressItem(item)}
                onLongPress={() => this.props.onLongPressItem(item)}>
                <View style={styles.itemContainer}>
                    <View style={styles.itemView}/>
                    <Image
                        source={{uri: item.image}}
                        style={styles.itemImage}/>
                    <View style={styles.itemTextContainer}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text
                            numberOfLines={1}
                            style={styles.itemDescription}>
                            {`${item.duration} \u2022 $${item.price} \u2022 ${item.description}`}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    static _renderSeparator () {
        return (
            <View style={styles.listSeparator}>
                <View style={styles.listSeparatorLeft}/>
                <View style={styles.listSeparatorRight}/>
            </View>
        )
    }

    render () {
        return (
            <List
                keyExtractor={item => item.key}
                data={this.props.items}
                renderItem={this._renderItem}
                ItemSeparatorComponent={ServicesContainer._renderSeparator}/>
        )
    }
}