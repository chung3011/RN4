import React, { Component } from 'react';
import {
    Text, StyleSheet,
    View, FlatList,
} from 'react-native';
import { commonStyles, primaryColorGreen, primaryColorBrown, primaryColorRed } from '../styles'
import Accordion from 'react-native-collapsible/Accordion'
import Icon from 'react-native-vector-icons/FontAwesome';
import OrderItem from '../components/orderItem';
import firebase from 'react-native-firebase'

class TapHistory extends Component {
    state = {
        activeSections: [],
        history: [{
            "date": "Sat Aug 11 2018 12:58:29 ",
            "onGoing": false,
            "orders": [{
                "amount": 3,
                "dish": "Crispy onion rings cheese",
                "key": 100,
                "unitPrice": 20
            }, {
                "amount": 1,
                "dish": "Beef with hummus and french-fried onion",
                "key": 101,
                "unitPrice": 17
            }]
        }, {
            "date": "Tue Aug 14 2018 10:09:19 ",
            "onGoing": true,
            "orders": [{
                "amount": 3,
                "dish": "Margherita maison",
                "key": 200,
                "unitPrice": 25
            }, {
                "amount": 2,
                "dish": "Cheese & pepperoni",
                "key": 203,
                "unitPrice": 22
            }]
        }],
        data: [],
    }
    componentDidMount() {
        this.loadData()
    }
    loadData() {
        firebase.database().ref(`/users`)
            .child(firebase.auth().currentUser.uid)
            .child('history')
            .on('value', res => this.setState({
                
                // data: res._value.filter(order => order.onGoing == true),
            }))

    }

    renderHeader(sections) {
        const total = sections.orders
            .reduce((acc, curV) => acc + curV.amount * curV.unitPrice, 0)
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 15 }}>
                <Text style={{ flex: 1, color: primaryColorBrown, fontSize: 15 }}>{sections.date}</Text>
                <Text style={{ color: primaryColorRed, fontWeight: 'bold', fontSize: 15 }}>{`${total}$`}</Text>
                <Icon
                    style={{ marginHorizontal: 5 }}
                    name='angle-down'
                    size={20}
                    color={primaryColorBrown}
                />
            </View>
        )
    }

    renderContent(sections) {
        return (
            <FlatList
                style={{ flexGrow: 0, }}
                data={sections.orders}
                renderItem={({ item }) => <OrderItem item={item} historyMode={true}></OrderItem>}
                keyExtractor={(item) => item.name}
            />
        )

    }


    renderOnGoing() {
        return (
            <View>
                <Text style={styles.title}>On going</Text>
                <Accordion
                    underlayColor={'white'}
                    activeSections={this.state.activeSections}
                    sections={this.state.history}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContent}
                    onChange={(activeSections) => this.setState({ activeSections })}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={commonStyles.screenContainer}>
                <Text style={commonStyles.screenTitle}>History</Text>
                {this.renderOnGoing()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: primaryColorGreen,
        margin: 7,
        fontWeight: 'bold'

    }
})
export default TapHistory;