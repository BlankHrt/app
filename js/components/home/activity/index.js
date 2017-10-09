import React, { Component } from "react";
import { View, StatusBar, ScrollView, SampleText } from "react-native";
import { connect } from 'react-redux'
import { NavigationActions, TabNavigator } from "react-navigation";
import { Container, Button, H3, Text, Footer, Image, Thumbnail, FooterTab, Content, Badge, Icon, Header, Tabs, Tab, Title, Body, Left, Right } from "native-base";
import { userLogin } from '../../../reducers/user/action'

class activityTab extends React.Component {
    static navigationOptions = {
        tabBarLabel: '活动',
    };

    render() {
        return (
            <Container>
                <Content>
                    <Text>
                        活动
					</Text>
                </Content>

            </Container>
        );
    }
}
export default activityTab;