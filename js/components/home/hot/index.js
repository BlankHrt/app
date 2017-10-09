import React, { Component } from "react";
import { View, Alert, RefreshControl, ScrollView, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'
import { NavigationActions, TabNavigator } from "react-navigation";
import { Container, Fab, Button, Spinner, List, ListItem, H3, Input, Text, Item, Footer, Image, Thumbnail, Content, Icon, Header, CardItem, Card, Tabs, Tab, Title, Body, Left, Right } from "native-base";
const defaultHeadUrl = require("../../../../img/drawer-cover.png");
import TimeAgo from '../../../util/TimeAgo';

import styles from "./styles";

class HotTab extends React.Component {
    static navigationOptions = {
        tabBarLabel: '七号驿站',
    };

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            isRefreshing: false,
            startPage: 1
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.getHot(this.state.startPage, 5, this.props.isLogin, this.props.user.id)
    }

    onRefresh() {
        let body = `startPage=${1}&articleType=${5}&isLogin=${this.props.isLogin}&userID=${this.props.user.id}`;
        this.props.onRefresh(body);
    }

    onScroll(e) {
        /*  this.setState({ startPage: this.state.startPage + 1, lastScrollPos: e.nativeEvent.contentOffset.y }, () => {
             this.getHot(this.state.startPage, 5, this.props.user.isLogin, this.props.user.user.id)
         }) */
    }

    getHot(page, type, isLogin, userID) {
        let body = `startPage=${page}&articleType=${type}&isLogin=${isLogin}&userID=${userID}`;
        this.props.getByPage(body)
    }

    support(hot, index) {
        if (this.props.isLogin) {
            this.setState((prevState, props) => ({
                hotList: [
                    ...prevState.hotList.slice(0, index),
                    { ...hot, supportNumber: hot.supportNumber++ },
                    ...prevState.hotList.slice(index + 1),
                ],
            }));
            let body = `id=${hot.id}&userID=${this.props.user.id}`;
        } else {
            Alert.alert(
                '您尚未登录',
                '是否跳转登录页面',
                [
                    { text: '是', onPress: () => this.props.navigation.navigate('Login') },
                    { text: '否', onPress: () => { } },
                ],
                { cancelable: true }
            )
        }
    }

    gotoDetail(hot) {
        this.props.navigation.navigate('hotDetail', { hot })
    }

    render() {
        return (
            <Container>
                <ScrollView
                    style={styles.scrollview}
                    onScroll={(e) => this.onScroll(e)}
                    scrollEventThrottle={16}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onRefresh()}
                            title="正在加载"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                        />
                    }>
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
                        {this.props.isFetching && <Spinner color='red' />}
                        {
                            this.props.hotList && this.props.hotList.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => this.gotoDetail(item)}>
                                        <Card >
                                            <CardItem>
                                                <Left>
                                                    {/*  {
                                                        item.user.headUrl ? (
                                                            <Thumbnail source={{uri:item.user.headUrl}} />
                                                        ) : (
                                                                <Thumbnail source={defaultHeadUrl} />
                                                            )
                                                    } */}
                                                    <Thumbnail source={defaultHeadUrl} />
                                                    <Body>
                                                        <Text>{item.user.name}</Text>
                                                        <Text note><TimeAgo hideAgo={false} interval={60000} time={item.publishTime} /></Text>
                                                    </Body>
                                                </Left>
                                            </CardItem>
                                            <CardItem>
                                                <View>
                                                    <Text>{item.title}</Text>
                                                </View>
                                            </CardItem>
                                            <CardItem>
                                                <Left>
                                                    <Button transparent>
                                                        <Icon active name="eye" />
                                                        <Text>{item.readNumber}</Text>
                                                    </Button>
                                                </Left>
                                                <Body>
                                                    <Button transparent>
                                                        <Icon active name="chatbubbles" />
                                                        <Text>{item.commentNumber}</Text>
                                                    </Button>
                                                </Body>
                                                <Right>
                                                    <Button transparent onPress={() => this.support(item, index)}>
                                                        <Icon active name="thumbs-up" />
                                                        <Text>{item.supportNumber}</Text>
                                                    </Button>
                                                </Right>
                                            </CardItem>
                                        </Card>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </Content>
                </ScrollView>

                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.state.isLogin ? this.props.navigation.navigate('hotAdd') :
                        Alert.alert(
                            '您尚未登录',
                            '是否跳转登录页面',
                            [
                                { text: '是', onPress: () => this.props.navigation.navigate('Login') },
                                { text: '否', onPress: () => { } },
                            ],
                            { cancelable: true }
                        )}>
                    <Icon name="add" />
                </Fab>
            </Container>
        );
    }
}


const mapStateToProps = state => ({
    user: state.userReducer.user,
    isLogin: state.userReducer.isLogin,
    token: state.userReducer.token,
    hotList: state.hotReducer.hotList,
    isFetching: state.hotReducer.isFetching,
})

const mapDispatchToProps = (dispatch) => ({
    getByPage: (data) => dispatch({ type: 'HOT_GETBYPAGE', data }),
    onRefresh: (data) => dispatch({ type: 'HOT_ONREFRESH', data }),
})
export default connect(mapStateToProps, mapDispatchToProps)(HotTab);