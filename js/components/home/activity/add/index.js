import React, { Component } from "react";
import { View, TextInput } from "react-native";
import { connect } from 'react-redux'
import { NavigationActions, TabNavigator } from "react-navigation";
import { Container, Button, Label, Item, Input, Text, Image, Content, Icon, Header, Title, Body, Left, Right } from "native-base";

class ActivityAdd extends React.Component {
    static navigationOptions = ({ navigation }) => {
        console.log(navigation)
        const { state } = navigation;
        return {
            headerRight: state.params && state.params.renderHeaderRight
        }
    };

    componentWillMount() {
        this.props.navigation.setParams({
            renderHeaderRight: <Button transparent onPress={() => this.add()} ><Icon name='send' /></Button>
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '你好，朋友',
            disableButton: true,
            user: this.props.user.user,
            isLogin: this.props.user.isLogin,
            token: this.props.user.token
        }
    }

    add() {
        console.log(this.state.user);
        let body = 'title=' + this.state.title + '&content=' + this.state.content + '&activityType=5' + '&schoolId=1' + this.state.user.schoolId + '&userID=' + this.state.user.id;
        fetch(GLOBAL.BASE_URL + '/activity/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Accept': 'application/json, text/plain, */*'
            },
            body: body
        })
            .then(this.handleRes)
            .then((data) => {
                this.props.navigation.goBack();
            })
            .catch((error) => {
                console.error(error);
            })
    }
    changeTitle(title) {
        this.setState({ title: title });
    }
    changeContent(content) {
        this.setState({ content: content });
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
                    <Item inlineLabel >
                        <Label>标题:</Label>
                        <Input
                            maxLength={30}
                            onChangeText={(title) => this.changeTitle(title)}
                            value={this.state.title} />
                        <Icon name='checkmark-circle' />
                        <Icon name='close-circle' />
                    </Item>
                    <Item>
                        <TextInput
                            multiline={true}
                            style={{ height: 100 }}
                            onChangeText={(content) => this.changeContent(content)}
                            editable={true} value={this.state.content}
                        />
                        <TextInput editable={true} value={this.state.content} multiline={true} numberOfLines={4} />
                    </Item>
                </Content>
            </Container>
        );
    }
}


const mapStateToProps = state => ({
    user: state.userReducer
})
export default connect(mapStateToProps)(ActivityAdd);;