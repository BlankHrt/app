const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
    button: {
        margin: 15,
        marginTop: 50
    },
    forgetPass: {
        flex: 1,
        alignItems: 'flex-start'
    },
    register: {
        flex: 1,
        alignItems: 'flex-end'
    },
    grid: {
        margin: 15,
        marginTop: 0
    },
    error: {
        color: 'red'
    }
};
