import React, { Component } from 'react';
import {
  Text, Image, Dimensions,
  View,
} from 'react-native';

class AutoScaleImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fixedW: Dimensions.get('window').width,
      fixedH: 0,
      unmounted: false,
    }
    console.log('constructor')
  }
  
  componentWillMount() {
  console.log('componentWillMount')
  }
  

  render() {
    console.log('render')
    return (
      <Image style={{
        width: this.state.fixedW,
        height: this.state.fixedH
      }}
        source={{ uri: this.props.uriImage }} />
    );
  }

  componentDidMount() {
    console.log('componentDidMount')
    Image.getSize(this.props.uriImage,
      (realW, realH) => !this.state.unmounted && this.setState(
        { fixedH: this.state.fixedW * realH / realW }
      ),()=>console.log('setState done'))

  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    this.setState({unmounted: true})
  }

}

export default AutoScaleImage;
