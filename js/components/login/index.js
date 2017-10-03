import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";
import PropTypes from 'prop-types';
GLOBAL = require('../../Globals');
import { Container, Button, Label, Text, Form, Grid, Item, Col, Input, Content, Icon, Header, Title, Body, Left, Right } from "native-base";
import { NavigationActions } from 'react-navigation'
import { isSignedIn } from "../../Auth";

import styles from "./styles";

class Login extends Component {
    // eslint-disable-line
    constructor(props) {
        super(props);
        this.state = {
            phone: null,
            password: null,
            showError: false
        }
    }

    validatePassword(password) {
        this.setState({
            password: password
        })
    }

    validatePhone(text) {
        let newText = '';
        let numbers = '0123456789';
        if (text === '') {
            this.setState({ phone: null });
        } else {
            for (var i = 0; i < text.length; i++) {
                if (numbers.indexOf(text[i]) > -1) {
                    newText = newText + text[i];
                    this.setState({ phone: newText });
                }
            }
        }
    }

    login() {
        if (this.state.phone && this.state.password) {
            let body = 'username=' + this.state.phone + '&password=' + this.state.password
            fetch(GLOBAL.BASE_URL + '/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                    'Accept': 'application/json, text/plain, */*'
                },
                body: body
            })
                .then(this.handleRes)
                .then((responseJson) => {
                    if (responseJson.user && responseJson.user.id) {
                        this.setState({ showError: false })
                        global.storage.save({
                            key: 'loginState',  // 注意:请不要在key中使用_下划线符号!
                            id: '1000',   // 注意:请不要在id中使用_下划线符号!
                            data: {
                                user: responseJson.user,
                                token: responseJson.token,
                                isLogin: true
                            },
                            expires: 1000 * 60 *10
                        })
                        this.props.navigation.navigate('Drawer')
                    } else {
                        this.setState({ showError: true })
                    }
                })
                .catch((error) => {
                    console.error(error);
                })
        }
    }

    handleRes(response) {
        return response.text().then(function (text) {
            return text ? JSON.parse(text) : {}
        })
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>登录</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form style={{ margin: 15, marginTop: 50 }}>
                        <Item inlineLabel success={true} error={false} >
                            <Label>手机号:</Label>
                            <Input value={this.state.phone} keyboardType="numeric" onChangeText={(e) => this.validatePhone(e)} maxLength={11} />
                            <Icon name='checkmark-circle' />
                            <Icon name='close-circle' />
                        </Item>
                        <Item inlineLabel last>
                            <Label>密    码:</Label>
                            <Input value={this.state.password} onChangeText={(e) => this.validatePassword(e)} secureTextEntry={true} />
                        </Item>
                        {
                            this.state.showError ?
                                <Item>
                                    <Text style={styles.error}>
                                        用户名密码错误
                                    </Text>
                                </Item> : null
                        }

                    </Form>
                    <Button block style={styles.button} onPress={() => this.login()}>
                        <Text>登录</Text>
                    </Button>
                    <Grid style={styles.grid}>
                        <Col style={styles.forgetPass}>
                            <Text>忘记密码?</Text>
                        </Col>
                        <Col style={styles.register}>
                            <Text>新用户注册</Text>
                        </Col>
                    </Grid>
                </Content>
            </Container >
        );
    }
}

export default Login;
