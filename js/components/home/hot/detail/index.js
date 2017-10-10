import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { connect } from 'react-redux'
import { NavigationActions, TabNavigator } from "react-navigation";
import { Container, Fab, Button, List, ListItem, H3, Input, Text, Item, Footer, Image, Thumbnail, Content, Icon, Header, CardItem, Card, Tabs, Tab, Title, Body, Left, Right } from "native-base";

class HotDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hot: this.props.navigation.state.params.hot
        }

    }

    componentDidMount() {
        const { user, isLogin, token } = this.props.user;
    }

    handleRes(response) {
        return response.text().then(function (text) {
            return text ? JSON.parse(text) : {}
        })
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>活动详情</Text>
                </Content>
            </Container>
        );
    }
}


const mapStateToProps = state => ({
    user: state.userReducer
})
export default HotDetail = connect(mapStateToProps)(HotDetail);;