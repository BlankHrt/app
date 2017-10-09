const React = require("react-native");

const { StyleSheet, Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },
  scrollview: {
    flex: 1,
  },
};
