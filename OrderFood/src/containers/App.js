import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'

const store = createStore(rootReducer)

import LoginScreen from './Loginscreen';
import SplashScreen from './SplashScreen'
import TabMenu from './TabMenu';
import TabOrder from './TabOrder';
import TabInfo from './TabInfo';
import TabHistory from './TabHistory';
import { primaryColorGreen } from '../styles'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const BottomTabNavigator = createBottomTabNavigator({
  Menu: TabMenu,
  Order: TabOrder,
  Info: TabInfo,
  History: TabHistory
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Menu') {
          iconName = `cutlery`;
        } else if (routeName === 'Order') {
          iconName = `shopping-cart`;
        } else if (routeName === 'History') {
          iconName = `history`;
        } else if (routeName === 'Info') {
          iconName = `info-circle`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        // return <Icon name={iconName} size={25} color={tintColor} />;
        return <View>
          <Icon name={iconName} size={25} color={tintColor} />
          {routeName === 'Order' &&
            <View style={{borderRadius: 20, position: 'absolute', backgroundColor: 'red', width: 20, height: 20, justifyContent: 'center', alignItems:'center',left:18,bottom:7}}>
              <Text style={{color:'white', fontSize: 12}}>2</Text>
            </View>
          }
        </View>
      },
    }),
    tabBarOptions: {
      activeTintColor: primaryColorGreen,
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white'
      }
    },
  }

)

const SwitchNavigation = createSwitchNavigator({
  HomeScreen: BottomTabNavigator,

  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
})


export default class App extends Component {

  render() {
    return (
      <Provider store ={store}>
        <SwitchNavigation />
      </Provider>
      
    );
  }
}
