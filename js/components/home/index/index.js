import React, { Component } from "react";
import { View, StatusBar, ScrollView, SampleText } from "react-native";
import { connect } from 'react-redux'
import { NavigationActions, TabNavigator } from "react-navigation";
import { Container, Button, H3, Card, Grid, Col, CardItem, Text, Footer, Image, Thumbnail, FooterTab, Content, Badge, Icon, Header, Tabs, Tab, Title, Body, Left, Right } from "native-base";
import { userLogin } from '../../../reducers/user/userAction'

const launchscreenBg = require("../../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../../img/logo-kitchen-sink.png");
GLOBAL = require('../../../Globals');
import styles from "./styles";

class indexTab extends React.Component {
    static navigationOptions = {
        tabBarLabel: '首页',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    };
    queryPhone() {
        let body = 'phone=15301150155'
        fetch(GLOBAL.BASE_URL + '/ali/shoujiguishudi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Accept': 'application/json, text/plain, */*'
            },
            body: body
        })
            .then(this.handleRes)
            .then((data) => {
                console.log(data);
            })
    }
    query() {
        alert(1);
    }
    handleRes(response) {
        return response.text().then(function (text) {
            return text ? JSON.parse(text) : {}
        })
    }

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
                    {/* <Card>
                        <CardItem>
                            <Body>
                                <Button onPress={this.query}>
                                    <Text>手机归属地查询 </Text>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card> */}
                    <Grid style={styles.grid}>
                        <Col style={styles.col}>
                            <Button transparent vertical onPress={this.query}>
                                <Icon name='home' />
                                <Text>Apps</Text>
                            </Button>
                        </Col>
                        <Col style={styles.col}>
                            <Button transparent vertical onPress={this.query}>
                                <Icon name='camera' />
                                <Text>Apps</Text>
                            </Button>
                        </Col>
                        <Col style={styles.col}>
                            <Button transparent vertical onPress={this.query}>
                                <Icon name='bicycle' />
                                <Text>Apps</Text>
                            </Button>
                        </Col>
                        <Col style={styles.col}>
                            <Button transparent vertical onPress={this.query}>
                                <Icon name='logo-apple' />
                                <Text>Apps</Text>
                            </Button>
                        </Col>
                    </Grid>
                </Content>

            </Container >
        );
    }
}
export default indexTab;