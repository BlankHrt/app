import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Button, H3, Text, Footer, Thumbnail, FooterTab, Content, Badge, Icon, Header, Tabs, Tab, Title, Body, Left, Right } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../img/logo-kitchen-sink.png");
const menu = [{ name: '首页' }, { name: '活动' }, { name: '驿站' }]

class Home extends Component {
	// eslint-disable-line
	constructor(props) {
		super(props);
		this.state = {
			menuName: menu[0].name,
			active: [true, false, false]
		}
	}

	onButtonPress(num) {
		this.setState(() => {
			let active = [false, false, false];
			active[num] = true;
			return { menuName: menu[num].name, active: active };
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
						<Title>{this.state.menuName}</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					<Text>{this.state.menuName}</Text>
				</Content>
				<Footer>
					<FooterTab>
						<Button active={this.state.active[0]} badge vertical onPress={() => this.onButtonPress(0)}>
							<Badge><Text>2</Text></Badge>
							<Icon name="apps" />
							<Text>首页</Text>
						</Button>
						<Button active={this.state.active[1]} vertical onPress={() => this.onButtonPress(1)}>
							<Icon name="camera" />
							<Text>活动</Text>
						</Button>
						<Button active={this.state.active[2]} badge onPress={() => this.onButtonPress(2)}>
							<Badge ><Text>51</Text></Badge>
							<Icon name="navigate" />
							<Text>驿站</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container >
		);
	}
}

export default Home;
