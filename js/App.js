/* @flow */

import React from "react";
import Storage from 'react-native-storage';
import { connect } from 'react-redux'
import { AsyncStorage } from "react-native";
import { Platform } from "react-native";
import { Root } from "native-base";
import { NavigationActions, StackNavigator } from "react-navigation";
import { getUser } from "./Auth";
import { userLogin } from "./reducers/user/action"
import 'rxjs';
import Drawer from "./Drawer";
import Login from "./components/login/index";

const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        Login: { screen: Login },

    },
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);
class App extends React.Component {
    constructor(props) {
        super(props);
        var storage = new Storage({
            // 最大容量，默认值1000条数据循环存储
            size: 1000,
            // 如果不指定则数据只会保存在内存中，重启后即丢失
            storageBackend: AsyncStorage,
            // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
            defaultExpires: 1000 * 3600 * 24 * 30,
            // 读写时在内存中缓存数据。默认启用。
            enableCache: true,
        })
        global.storage = storage;
        console.ignoredYellowBox = ['Remote debugger'];
    }

    componentWillMount() {
        getUser()
            .then(res => {
                this.props.login(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <AppNavigator />
        );
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(userLogin(data))
})
export default App = connect(mapStateToProps, mapDispatchToProps)(App);