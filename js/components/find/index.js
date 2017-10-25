import React, { Component } from "react";
import { View, Text, StatusBar, ScrollView, SampleText } from "react-native";
import { connect } from 'react-redux'
import { NavigationActions, TabNavigator } from "react-navigation";

GLOBAL = require('../../Globals');
import styles from "./styles";

class findTab extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        tabBarLabel: '发现',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    };
    
    render() {
        return (
            <View>
                <Text> 发现</Text>
            </View>
        );
    }
}
export default findTab;
