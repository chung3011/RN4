import React, { Component } from 'react';
import {
    Text, FlatList, Dimensions, StyleSheet, Image,
    View, Button, ActivityIndicator
} from 'react-native';
import Item from '../components/Item';

import axios from 'axios'
import Swiper from 'react-native-swiper'

class ListScreen extends Component {
    state = {
        data: [],
        loading: true
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=a5753dd20d8bf169dbcdff9e7d730148`)
            .then(res =>
                this.setState({
                    data: res.data.results,
                    loading: false
                })
            )
            .catch(err => console.log(err))
    }
    renderItem = ({ item }) => {
        return <Item
            film={item}
            navigation={this.props.navigation} />
    }

    render() {
        return (
            <View>
                {this.state.loading
                    ? <ActivityIndicator></ActivityIndicator>
                    : <View style={{backgroundColor:'#FAF6EA'}}>
                        <View style={styles.box} >
                            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
                                <View style={styles.slide1}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: 'https://previews.123rf.com/images/worsan/worsan1710/worsan171000052/88077972-movie-theater-with-row-of-red-seats-popcorn-and-tickets-premiere-event-template-super-show-design-.jpg' }}
                                        resizeMode={'stretch'}
                                    />
                                </View>
                                <View style={styles.slide2}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: 'https://dantricdn.com/thumb_w/640/2017/cgv-1510733859865.jpg' }}
                                        resizeMode={'stretch'}
                                    />
                                </View>
                                <View style={styles.slide3}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: 'https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/01/cgv_bp_grand_opening-desktop-0004.jpg' }}
                                        resizeMode={'stretch'}
                                    />
                                </View>
                            </Swiper>
                        </View>
                        <View style={{marginTop:10}}>
                            <FlatList
                                data={this.state.data}
                                renderItem={this.renderItem}
                                numColumns={2}
                                keyExtractor={(item) => item.id.toString()}
                            />
                        </View>

                    </View>

                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
    },
    box: {
        height: Dimensions.get('window').height * 0.3
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        height: 50,
        width: Dimensions.get('window').width,
    }
})
export default ListScreen;