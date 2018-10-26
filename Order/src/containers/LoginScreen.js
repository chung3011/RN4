import React, { Component } from 'react';
import {
  Text, Platform,
  View, StyleSheet, Image, TextInput
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles'

class LoginScreen extends Component {
  state = {}
  renderLogo = () => (
    <Image
      style={styles.logo}
      resizeMode='contain'
      source={require('../../image/logo_app.jpg')}
    ></Image>
  )
  renderEmailInput = () => (
    <View style={{ marginBottom: 10 }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.icon}
          resizeMode='contain'
          source={require('../../image/ic_email.png')}
        />
        <Text style={styles.textTitle}>Email</Text>

      </View>
      <TextInput
        style={styles.input}
        keyboardType={'email-address'}
        underlineColorAndroid={'rgba(0,0,0,0)'}
      />
    </View>
  )

  renderPasswordInput = () => (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.icon}
          resizeMode='contain'
          source={require('../../image/ic_password.png')}
        />
        <Text style={styles.textTitle} >Password</Text>

      </View>
      <TextInput
        style={styles.input}
        keyboardType={'visible-password'}
        underlineColorAndroid={'rgba(0,0,0,0)'}

      />
    </View>
  )
  renderButtons = () => (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          title="Sign Up"
          buttonStyle={{
            backgroundColor: primaryColorGreen ,
            width: 100,
            height: 40,
            borderRadius: 20
          }}
          containerStyle={{ marginTop: 20 }}
        />
        <Button
          title="Sign In"
          buttonStyle={{
            backgroundColor: primaryColorRed,
            width: 100,
            height: 40,
            borderRadius: 20
          }}
          containerStyle={{ marginTop: 20 }}
        />

      </View>
    </View>
  )
  renderError = () => (
    <Text style={styles.error}>ERROR...</Text>
  )

  render() {
    return (
      <View style={styles.container}>
        {this.renderLogo()}
        {this.renderEmailInput()}
        {this.renderPasswordInput()}
        {this.renderError()}
        {this.renderButtons()}
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center'
  },
  icon: {
    width: 16,
    height: 16,
  },
  textTitle: {
    marginStart: 5,
    color: primaryColorBrown,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: primaryColorBrown,
    paddingVertical: Platform.OS === 'ios' ? 5 : 0,
    paddingHorizontal: 0
  },
  error: {
    color: 'red',
    marginTop:10
  }

})
export default LoginScreen;