import React, {Component} from 'react';
import {WHERE_AM_I} from "../Data/tram_info";
import PropTypes from "prop-types";
import {TIMETABLE_STATUS} from "../Utils/TimeTableUtils";

class TimeTableColumn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
        this.interval = null;
    }

    componentDidMount() {
        if (this.props.item.planned_arrival_time === TIMETABLE_STATUS.ARRIVED) {
            this.interval = setInterval(() => {
                this.blink()
            }, 1000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    blink() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div className={`row text-height ${this.state.show ? '' : 'invisible'}`} style={{height: 'calc(100vh / 6)'}}>
                <div className="col-4 col-xl-2 text-left">
                    <span className="text-responsive">{this.props.item.line}</span>
                </div>
                <div className="order-xl-2 col-8 col-xl-4 text-right">
                        <span className="text-responsive">{this.props.item.planned_arrival_time}</span>
                </div>
                <div className="order-xl-1 col-12 col-xl-6 text-left">
                    <span className="text-responsive">{this.props.item.destination.includes(WHERE_AM_I.exclude) ?
                        this.props.item.destination.split(',')[1] : this.props.item.destination}</span>
                </div>

            </div>
        );
    }
}

TimeTableColumn.defaultPropTypes = {
    item: null,
};
TimeTableColumn.propTypes = {
    item: PropTypes.object,
};

export default TimeTableColumn;