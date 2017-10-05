import React, { Component } from "react";
import { View, StatusBar, ScrollView, SampleText } from "react-native";
import { NavigationActions, TabNavigator } from "react-navigation";
import { Container, Button, H3, Text, Footer, Image, Thumbnail, FooterTab, Content, Badge, Icon, Header, Tabs, Tab, Title, Body, Left, Right } from "native-base";
import { userLogin } from '../../reducers/user/userAction';
import indexTab from "./index/index";
import activityTab from "./activity/index";
import hotTab from "./hot/index";

import styles from "./styles";

const launchscreenBg = require("../../../img/launchscreen-bg.png");
const launchscreenLogo = require("../../../img/logo-kitchen-sink.png");

const Home = TabNavigator({
	index: {
		screen: indexTab,
	},
	activity: {
		screen: activityTab,
	},
	hot: {
		screen: hotTab,
	},
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


export default Home;
