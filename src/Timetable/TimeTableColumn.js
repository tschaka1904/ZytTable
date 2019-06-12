import React, {Component} from 'react';
import {WHERE_AM_I} from "../Data/tram_info";
import PropTypes from "prop-types";

class TimeTableColumn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
        this.interval = null;
    }

    componentDidMount() {
        if (this.props.item.planned_arrival_time === 'jetzt') {
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
            <div className={`row h-100 ${this.state.show ? '' : 'invisible'}`}>
                <div className="col-2 text-center">
                    <h1>{this.props.item.line}</h1>
                </div>
                <div className="col-7 text-left">
                    <h1>{this.props.item.destination.includes(WHERE_AM_I.exclude) ?
                        this.props.item.destination.split(',')[1] : this.props.item.destination}</h1>
                </div>
                <div className="col-3 row">
                    <div
                        className={`${this.props.item.planned_arrival_time === 'jetzt' || this.props.item.planned_arrival_time === 'Entfällt' ?
                            'col-12 text-center' : 'col-6 text-right'}`}>
                        <h1>{this.props.item.planned_arrival_time}</h1>
                    </div>
                    {this.props.item.planned_arrival_time !== 'jetzt' && this.props.item.planned_arrival_time !== 'Entfällt' ?
                        <div className={'col-6 text-left'}>
                            <h1>min</h1>
                        </div> : null}
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