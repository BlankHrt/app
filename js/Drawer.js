/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home/";
import SideBar from "./components/sidebar";
import Logout from "./components/logout";
// import Header from "./components/header/";

const DrawerExample = DrawerNavigator(
  {
    Home: { screen: Home },
    logout: { screen: Logout },
    // Header: { screen: Header }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default DrawerExample;
