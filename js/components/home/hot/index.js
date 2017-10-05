import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { connect } from 'react-redux'
import { NavigationActions, TabNavigator } from "react-navigation";
import { Container, Button, List, ListItem, H3, Input, Text, Item, Footer, Image, Thumbnail, Content, Icon, Header, CardItem, Card, Tabs, Tab, Title, Body, Left, Right } from "native-base";
import { userLogin } from '../../../reducers/user/userAction'

const launchscreenBg = require("../../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../../img/logo-kitchen-sink.png");
import styles from "./styles";

class HotTab extends React.Component {
    static navigationOptions = {
        tabBarLabel: '七号驿站',
    };

    constructor(props) {
        super(props);
        this.state = {
            hotList: []
        }
    }

    componentDidMount() {
        /* if (this.props.list == null) {
            this.props.fetch();
        } */
        console.log(this.props.user);
        const { user, isLogin, token } = this.props.user;
        this.getHotByPage(1, 5, false, null);
    }

    getHotByPage(page, type, isLogin, userID) {
        console.log(page, type, isLogin, userID);
        let body = 'startPage=' + page + '&articleType=' + type + '&isLogin=' + isLogin + '&userID=' + userID;
        fetch(GLOBAL.BASE_URL + '/article/getArticleByPage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Accept': 'application/json, text/plain, */*'
            },
            body: body
        })
            .then(this.handleRes)
            .then((data) => {
                console.log(data)
                this.setState({ hotList: data });
            })
            .catch((error) => {
                console.error(error);
            })
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
                    <View searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="搜索你想要的话题" />
                            <Button transparent>
                                <Text>搜索</Text>
                            </Button>
                        </Item>
                    </View>
                    {
                        this.state.hotList.map((item, index) => {
                            return (
                                <Card key={index}>
                                    <CardItem>
                                        <View>
                                            <Text>{item.title}</Text>
                                        </View>
                                    </CardItem>
                                </Card>
                            )
                        })
                    }
                </Content>

            </Container>
        );
    }
}


const mapStateToProps = state => ({
    user: state.userReducer
})
export default HotTab = connect(mapStateToProps)(HotTab);;