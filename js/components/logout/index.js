import React, { Component } from "react";
import { NavigationActions } from 'react-navigation'
import { onSignOut } from "../../Auth";
import { connect } from 'react-redux'

import styles from "./styles";

class Logout extends Component {
    constructor(props) {
        super(props);
        this.props.logout()
        onSignOut().then(() => {
            this.props.navigation.navigate('Login')
        });
    }

    render() {
        return null;
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch({ type: 'USER_LOGOUT' })
})
export default connect(mapStateToProps, mapDispatchToProps)(Logout);;
