import React, { Component } from "react";
import { NavigationActions, TabNavigator, StackNavigator } from "react-navigation";
import indexTab from "./index/index";
import findTab from "./find/index";
import profileTab from "./profile/index";
import styles from "./styles";

const HomeTab = TabNavigator({
	index: {
		screen: indexTab,
		navigationOptions: {
			title: '首页',
		},
	},
	find: {
		screen: findTab,
		navigationOptions: {
			title: '发现',
		},
	},
	profile: {
		screen: profileTab,
		navigationOptions: {
			title: '我的',
		},
	}
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
});
export default Home;
