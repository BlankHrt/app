import React, { Component } from "react";
import { Image } from "react-native";
import { connect } from 'react-redux'

import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

import styles from "./styles";

const drawerCover = require("../../../img/drawer-cover.png");

const drawerImage = require("../../../img/logo-kitchen-sink.png");

const datas = [
	{
		name: "我的聊天",
		route: "chat",
		icon: "chatboxes",
		bg: "#C5F442",
		loginStatus: true
	},
	{
		name: "我的消息",
		route: "message",
		icon: "notifications",
		bg: "#C5F442",
		loginStatus: true
	},
	{
		name: "我的活动",
		route: "activity",
		icon: "phone-portrait",
		bg: "#477EEA",
		types: "8",
		loginStatus: true
	},
	{
		name: "我的驿站",
		route: "article",
		icon: "phone-portrait",
		bg: "#DA4437",
		types: "4",
		loginStatus: true
	},
	{
		name: "退出登录",
		route: "logout",
		icon: "notifications",
		bg: "#4DCAE0",
		loginStatus: true
	},
	{
		name: "登录",
		route: "logout",
		icon: "radio-button-off",
		bg: "#1EBC7C",
		types: "9",
		loginStatus: false
	},
	{
		name: "注册",
		route: "NHCard",
		icon: "keypad",
		bg: "#B89EF5",
		types: "5",
		loginStatus: false
	},
	{
		name: "Check Box",
		route: "NHCheckbox",
		icon: "checkmark-circle",
		bg: "#EB6B23",
		loginStatus: true
	},
	{
		name: "Deck Swiper",
		route: "NHDeckSwiper",
		icon: "swap",
		bg: "#3591FA",
		types: "2",
		loginStatus: true
	},
	{
		name: "Fab",
		route: "NHFab",
		icon: "help-buoy",
		bg: "#EF6092",
		types: "2",
		loginStatus: true
	},
	{
		name: "Form & Inputs",
		route: "NHForm",
		icon: "call",
		bg: "#EFB406",
		types: "12",
		loginStatus: true
	},
	{
		name: "Icon",
		route: "NHIcon",
		icon: "information-circle",
		bg: "#EF6092",
		loginStatus: true
	},
	{
		name: "Layout",
		route: "NHLayout",
		icon: "grid",
		bg: "#9F897C",
		types: "5",
		loginStatus: true
	},
	{
		name: "List",
		route: "NHList",
		icon: "lock",
		bg: "#5DCEE2",
		types: "7",
		loginStatus: true
	},
	{
		name: "ListSwipe",
		route: "ListSwipe",
		icon: "swap",
		bg: "#C5F442",
		types: "2",
		loginStatus: true
	},
	{
		name: "Picker",
		route: "NHPicker",
		icon: "arrow-dropdown",
		bg: "#F50C75",
		loginStatus: true
	},
	{
		name: "Radio",
		route: "NHRadio",
		icon: "radio-button-on",
		bg: "#6FEA90",
		loginStatus: true
	},
	{
		name: "SearchBar",
		route: "NHSearchbar",
		icon: "search",
		bg: "#29783B",
		loginStatus: true
	},
	{
		name: "Segment",
		route: "Segment",
		icon: "menu",
		bg: "#0A2C6B",
		types: "2",
		loginStatus: true
	},
	{
		name: "Spinner",
		route: "NHSpinner",
		icon: "navigate",
		bg: "#BE6F50",
		loginStatus: true
	},
	{
		name: "Tabs",
		route: "NHTab",
		icon: "home",
		bg: "#AB6AED",
		types: "3",
		loginStatus: true
	},
	{
		name: "Thumbnail",
		route: "NHThumbnail",
		icon: "image",
		bg: "#cc0000",
		types: "2",
		loginStatus: true
	},
	{
		name: "Toast",
		route: "Toast",
		icon: "albums",
		bg: "#C5F442",
		loginStatus: true
	},
	{
		name: "Typography",
		route: "NHTypography",
		icon: "paper",
		bg: "#48525D",
		loginStatus: true
	},
];


class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}


	render() {
		const { user, isLogin, token } = this.props.user;
		console.log(isLogin);
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<Image source={drawerCover} style={styles.drawerCover}>
						{/* <Image square style={styles.drawerImage} source={drawerImage} /> */}
					</Image>

					<List
						dataArray={datas.filter(d => d.loginStatus === isLogin)}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge
											style={{
												borderRadius: 3,
												height: 25,
												width: 72,
												backgroundColor: data.bg,
											}}
										>
											<Text style={styles.badgeText}>{`${data.types} Types`}</Text>
										</Badge>
									</Right>}
							</ListItem>
						}
					/>
				</Content>
			</Container>
		);
	}
}
const mapStateToProps = state => ({
	user: state.userReducer
})
export default SideBar = connect(mapStateToProps)(SideBar);
