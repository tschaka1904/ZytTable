import React, {Component} from 'react';

class TimeTableHeader extends Component {
    render() {
        return (
            <div className="row" style={{height: 'calc(100vh / 7)'}}>
                <div className="col-2 text-center">
                    <h2 className="text-responsive"><u>Linie</u></h2>
                </div>
                <div className="col-7 text-left">
                    <h2 className="text-responsive"><u>Fahrtziel</u></h2>
                </div>
                <div className="col-3 text-center">
                    <h2 className="text-responsive"><u>Abfahrt</u></h2>
                </div>
            </div>
        );
    }
}

TimeTableHeader.defaultPropTypes = {};
TimeTableHeader.propTypes = {};

export default TimeTableHeader;