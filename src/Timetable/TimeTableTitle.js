import React, {Component} from 'react';
import {WHERE_AM_I} from "../Data/tram_info";
import PropTypes from "prop-types";

export default class TimeTableTitle extends Component {
    render() {
        return (
            <div className="row" style={{height: 'calc(100vh / 6)'}}>
                <div className="col-12 col-xl-7 text-center text-xl-right">
                    <span style={{color: '#c7c3c3'}} className="text-responsive">{WHERE_AM_I.name}</span>
                </div>
                <div className="col-12 col-xl-5 text-center">
                    <small className="">Last update: {this.props.lastUpdate}</small>
                </div>
            </div>
        );
    }
}

TimeTableTitle.defaultPropTypes = {
    lastUpdate: ''
};

TimeTableTitle.propTypes = {
    lastUpdate: PropTypes.string
};