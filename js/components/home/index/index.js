import React, { Component } from "react";
import { View, StatusBar, ScrollView, SampleText } from "react-native";
import { connect } from 'react-redux'
import { NavigationActions, TabNavigator } from "react-navigation";
import { Container, Button, H3, Text, Footer, Image, Thumbnail, FooterTab, Content, Badge, Icon, Header, Tabs, Tab, Title, Body, Left, Right } from "native-base";
import { userLogin } from '../../../reducers/user/userAction'

const launchscreenBg = require("../../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../../img/logo-kitchen-sink.png");

class indexTab extends React.Component {
    static navigationOptions = {
        tabBarLabel: '首页',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    };

    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content" />
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}
                        >
                            <Thumbnail small source={launchscreenBg} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>首页</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>
                        首页
					</Text>
                </Content>

            </Container>
        );
    }
}
export default indexTab;