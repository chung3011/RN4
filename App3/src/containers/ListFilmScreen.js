import React, { Component } from 'react';
import {
    Text, FlatList,
    View, Button, ActivityIndicator
} from 'react-native';
import Item from '../components/Item';
import { connect } from 'react-redux'


class ListFilmScreen extends Component {
    state = {}

    renderItem = ({ item }) => {
        return <Item
            films={item}
            navigation={this.props.navigation} />
    }

    render() {
        return (
            <View>
                {this.state.loading
                    ? <ActivityIndicator></ActivityIndicator>
                    : <FlatList
                        data={this.state.films}
                        renderItem={this.renderItem}
                        numColumns={2}
                    />
                }
            </View>
        );
    }
}

//export default ListFilmScreen;
const mapStateToProps = ({films})=> ({films})

export default connect(mapStateToProps)(ListFilmScreen);