import React, { Component } from "react";
import { View, StatusBar, ScrollView, SampleText } from "react-native";
import { connect } from 'react-redux'
import { NavigationActions, TabNavigator } from "react-navigation";
import { Container, Button, H3, Text, Footer, Image, Thumbnail, FooterTab, Content, Badge, Icon, Header, Tabs, Tab, Title, Body, Left, Right } from "native-base";
import { userLogin } from '../../../reducers/user/userAction'

const launchscreenBg = require("../../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../../img/logo-kitchen-sink.png");

class hotTab extends React.Component {
    static navigationOptions = {
        tabBarLabel: '七号驿站',
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
                        <Title>七号驿站</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>
                    七号驿站
					</Text>
                </Content>

            </Container>
        );
    }
}
export default hotTab;