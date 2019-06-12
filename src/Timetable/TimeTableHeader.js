import React, {Component} from 'react';

class TimeTableHeader extends Component {
    render() {
        return (
            <div className="row h-100">
                <div className=" col-2 text-center">
                    <h1><u>Linie</u></h1>
                </div>
                <div className=" col-7 text-left">
                    <h1 className=""><u>Fahrtziel</u></h1>
                </div>
                <div className=" col-3 text-center">
                    <h1><u>Abfahrt</u></h1>
                </div>
            </div>
        );
    }
}

TimeTableHeader.propTypes = {};

export default TimeTableHeader;