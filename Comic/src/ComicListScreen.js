import React, { Component } from 'react';
import {
  Text, FlatList,
  View, Button,ActivityIndicator
} from 'react-native';
import ComicItem from './ComicItem';

//import { data } from './database.json'
import axios from 'axios'
import ModalSelector from 'react-native-modal-selector'

class ComicListScreen extends Component {
  state = {
    data: [],
    loading: true
  }

  componentDidMount() {
    this.loadList('Tất cả')
  }
  // renderItem = ({ item }) => <ComicItem comic={item} />
  renderItem = (data) => {
    //console.log('data:.......')
    //console.log(data)
    return <ComicItem
      comic={data.item}
      navigation={this.props.navigation} />
  }

  loadList(category) {
    this.setState({loading: true})
    category === 'Tất cả'
    ?axios.get('https://api.techkids.vn/reactnative/api/comics')
      .then(res => this.setState({ data: res.data.comics , loading : false}))
      .catch(err => console.log(err))
    :axios.get(`https://api.techkids.vn/reactnative/api/comics?category=${category}`)
      .then(res =>this.setState({ data: res.data.comics.comics , loading : false }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <View>
        <ModalSelector
          data={[
            { key: 0, label: 'Tất cả' },
            { key: 1, label: 'Thiên nhiên' },
            { key: 2, label: 'Con người - Tâm lý học - Hành vi' },
            { key: 3, label: 'Văn hoá - Lịch sử - Xã hội' },
            { key: 4, label: 'Sức khoẻ' },
          ]}
          initValue='Tất cả'
          onChange={(option) => { this.loadList(option.label) }}
        />

        {this.state.loading
          ? <ActivityIndicator></ActivityIndicator>
          : <FlatList
          //1. data?
          data={this.state.data}
          //2. item?
          renderItem={this.renderItem}
          // renderItem={this.renderItem}
          numColumns={2}
          // keyExtractor={(item) => item.id.toString()}
          keyExtractor={(item) => {
            //console.log('key:.......')
            //console.log(item)
            return item._id
          }}
        />
        }

        
        {/* <Button
          title='Press me'
          onPress={() => this.props.navigation.navigate('ComicDetail')} /> */}
      </View>
    );
  }
}

export default ComicListScreen;
