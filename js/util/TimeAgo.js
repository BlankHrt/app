var React = require('react')

var ReactNative = require('react-native');
var moment = require('moment');
var TimerMixin = require('react-timer-mixin');
var PropTypes = require('prop-types')
require('moment/locale/zh-cn');
moment.locale('zh-cn')
var { Text } = ReactNative;

class TimeAgo extends React.Component {
    mixins = [TimerMixin]
    static propTypes = {
        time: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.array,
            PropTypes.instanceOf(Date)
        ]).isRequired,
        interval: PropTypes.number,
        hideAgo: PropTypes.bool
    }
    
    static defaultProps = {
        hideAgo: false,
        interval: 60000
    }

    componentDidMount() {
        var { interval } = this.props;
        setInterval(this.update, interval);
    }

    componentWillUnmount() {
        clearInterval(this.update);
    }

    // We're using this method because of a weird bug
    // where autobinding doesn't seem to work w/ straight this.forceUpdate
    update() {
        // todo
        // this.forceUpdate();
    }

    render() {
        return (
            <Text {...this.props}>{moment(this.props.time).fromNow(this.props.hideAgo)}</Text>
        );
    }
};

export default TimeAgo;