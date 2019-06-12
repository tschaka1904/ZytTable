import React, {Component} from 'react';
import {WHERE_AM_I} from "../Data/tram_info";
import PropTypes from "prop-types";

export default class TimeTableTitle extends Component {
    render() {
        return (
            <div className='row h-100'>
                <div className="col-2 text-center">
                </div>
                <div className="col-8 text-center">
                    <h1 style={{color: '#c7c3c3'}} className="pl-1"> {WHERE_AM_I.name} <span
                        className="badge badge-danger">Live</span></h1>
                </div>
                <div className="col-2 text-center">
                    <span className="float-right">Last update: {this.props.lastUpdate}</span>
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