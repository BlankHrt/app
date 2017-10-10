import React, { Component } from "react";
import { View, StatusBar, ScrollView, SampleText } from "react-native";
import { NavigationActions, TabNavigator, StackNavigator } from "react-navigation";
import { Container, Button, H3, Text, Footer, Image, Thumbnail, FooterTab, Content, Badge, Icon, Header, Tabs, Tab, Title, Body, Left, Right } from "native-base";
import indexTab from "./index/index";
import activityTab from "./activity/index";
import activityDetail from "./activity/detail/index";
import activityAdd from "./activity/add/index";
import hotTab from "./hot/index";
import hotAdd from "./hot/add/index";
import hotDetail from "./hot/detail/index";
import styles from "./styles";

const HomeTab = TabNavigator({
	index: {
		screen: indexTab,
		navigationOptions: {
			title: '首页',
		},
	},
	activity: {
		screen: activityTab,
		navigationOptions: {
			title: '活动',
		},
	},
	hot: {
		screen: hotTab,
		navigationOptions: {
			title: '七号驿站'
		},
	},
	// addHot: {
	// 	screen: hotAdd
	// }
}, {
		tabBarPosition: 'bottom',
		animationEnabled: false,
		initialRouteName: 'index',
		tabBarOptions: {
			activeTintColor: '#e91e63',
			showIcon: false,
			labelStyle: {
				fontSize: 18,
			},
			style: {
				// backgroundColor: 'blue',
			},
		},
	});

const Home = StackNavigator({
	Root: {
		screen: HomeTab,
	},
	hotAdd: {
		screen: hotAdd,
	},
	hotDetail: {
		screen: hotDetail,
		navigationOptions: {
			title: '详情',
		},
	},
	activityDetail: {
		screen: activityDetail,
		navigationOptions: {
			title: '活动详情',
		},
	},
	activityAdd: {
		screen: activityAdd,
	}
});
export default Home;
