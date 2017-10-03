import React, { Component } from "react";
GLOBAL = require('../../Globals');
import { NavigationActions } from 'react-navigation'
import { onSignOut } from "../../Auth";

import styles from "./styles";

class Logout extends Component {
    constructor(props) {
        super(props);
        onSignOut().then(() => {
            this.props.navigation.navigate('Login')
        });
    }

    render() {
        return null;
    }
}

export default Logout;
