import * as React from "react";
import {getData} from "../Data/tram_info";
import TimeTableHeader from "./TimeTableHeader";
import TimeTableTitle from "./TimeTableTitle";
import TimeTableColumn from "./TimeTableColumn";
import {calculateDepartureTime} from "../Utils/TimeTableUtils";


export default class TimeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeTableItems: [],
            lastUpdate: null
        };
    }

    componentDidMount() {
        this.setup();
        setInterval(async () => {
            this.setup();
        }, 10000);
    }

    setup() {
        getData().then(response => {
            const firstFiveItems = response.data.connections.slice(0, 20);
            // console.log(response.data.connections);
            const newTable = [];
            const currentDate = new Date();
            firstFiveItems.forEach((rawItem) => {
                const timeTableObj = this.createTimeTableObj(rawItem, currentDate);
                if (timeTableObj.planned_arrival_time !== null) {
                    newTable.push(timeTableObj)
                }
            });
            if (newTable.length) {
                this.setState({
                    timeTableItems: newTable,
                    lastUpdate: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getUTCSeconds()
                });
            }
        });
    }

    createTimeTableObj(obj, currentData) {
        const arvTime = calculateDepartureTime(obj.time, obj.dep_delay, currentData);
        return {
            vehicleType: obj.type,
            planned_arrival_time: arvTime,
            time: obj.time,
            destination: obj.terminal.name,
            line: obj.line,
            delay: obj.dep_delay,
        };
    }

    render() {
        if (!this.state.timeTableItems.length) {
            return null;
        }
        return (
            <div className="h-100">
                <TimeTableTitle lastUpdate={this.state.lastUpdate}/>
                <TimeTableHeader/>
                <div className="container-fluid">
                    {this.state.timeTableItems.splice(0, 10).map((item) =>
                        <TimeTableColumn key={item.vehicleType + '-' + item.line + Math.random()} item={item}/>
                    )}
                </div>
            </div>
        );
    }
}