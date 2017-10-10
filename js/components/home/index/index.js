import React, { Component } from "react";
import { View, StatusBar, ScrollView, SampleText } from "react-native";
import { connect } from 'react-redux'
import { NavigationActions, TabNavigator } from "react-navigation";
import { Container, Button, H3, Card, Grid, Col, CardItem, Text, Footer, Image, Thumbnail, FooterTab, Content, Badge, Icon, Header, Tabs, Tab, Title, Body, Left, Right } from "native-base";

const launchscreenBg = require("../../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../../img/logo-kitchen-sink.png");
GLOBAL = require('../../../Globals');
import styles from "./styles";

class indexTab extends React.Component {
    constructor(props) {
        super(props);
    }
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

    render() {
        return (
            <Container>
                <Content>
                    <Grid style={styles.grid}>
                        <Col style={styles.col}>
                            <Button transparent vertical onPress={this.query}>
                                <Icon name='home' />
                                <Text>教务</Text>
                            </Button>
                        </Col>
                        <Col style={styles.col}>
                            <Button transparent vertical onPress={this.query}>
                                <Icon name='camera' />
                                <Text>快递</Text>
                            </Button>
                        </Col>
                        <Col style={styles.col}>
                            <Button transparent vertical onPress={this.query}>
                                <Icon name='bicycle' />
                                <Text>教材</Text>
                            </Button>
                        </Col>
                        <Col style={styles.col}>
                            <Button transparent vertical onPress={this.query}>
                                <Icon name='logo-apple' />
                                <Text>交友</Text>
                            </Button>
                        </Col>
                    </Grid>
                </Content>
              
            </Container>
        );
    }
  }
export default indexTab;
