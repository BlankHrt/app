/* @flow */

import React from "react";
import Storage from 'react-native-storage';
import { connect } from 'react-redux'
import { AsyncStorage, Platform } from "react-native";
import { NavigationActions, StackNavigator } from "react-navigation";
import { getUser } from "./Auth";
import 'rxjs';
import Home from "./components/index";

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
                if (res.isLogin) {
                    this.props.loginSuccess(res)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <Home />
        );
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({
    login: (payload) => dispatch({ type: 'USER_LOGIN', payload }),
    loginSuccess: (payload) => dispatch({ type: 'USER_LOGIN_SUCCESS', payload }),
})
export default App = connect(mapStateToProps, mapDispatchToProps)(App);