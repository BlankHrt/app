import React, { Component } from "react";
import { View, Text, StatusBar, ScrollView, SampleText } from "react-native";
import { connect } from 'react-redux'
import { NavigationActions, TabNavigator } from "react-navigation";

GLOBAL = require('../../Globals');
import styles from "./styles";

class profileTab extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        tabBarLabel: '我的',
    };

    render() {
        return (
            <View>
                <Text> 我的</Text>
            </View>
        );
    }
}
export default profileTab;
