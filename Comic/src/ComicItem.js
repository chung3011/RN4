import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

class ComicItem extends Component {
  state = {}
  render() {
    // console.log(this.props.comic)
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.navigation.navigate('ComicDetail', {
          comic: this.props.comic
        })}
      >
        <Image
          style={styles.img}
          source={{ uri: this.props.comic.photos[0] }}
        />
        <Text style={styles.text} numberOfLines={2}>{this.props.comic.title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: 210,
    width: Dimensions.get('window').width / 2,
    padding: 10,
  },
  img: {
    height: 150
  },
  text: {
    fontSize: 15,
    marginTop: 5
  },
});
export default ComicItem;
