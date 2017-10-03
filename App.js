import React from "react";
import App from "./js/App";
import { Provider } from 'react-redux';
import configureStore from './js/ReduxConfigure';
const store = configureStore()

export default class App1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}
