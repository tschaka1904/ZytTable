import * as React from "react";
import {getData} from "../Data/tram_info";
import TimeTableHeader from "./TimeTableHeader";
import TimeTableTitle from "./TimeTableTitle";
import TimeTableColumn from "./TimeTableColumn";
import {MILLISECONDS, timeTableColumnObjectFactory} from "../Utils/TimeTableUtils";


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
        }, MILLISECONDS.TEN_SECONDS);
    }

    setup() {
        getData().then(response => {
            const reducedItemList = response.data.connections.slice(0, 20);
            const freshTimeTableItelms = [];
            const currentDate = new Date();
            reducedItemList.forEach((rawItem) => {
                const timeTableColumnObj = timeTableColumnObjectFactory(rawItem, currentDate);
                if (timeTableColumnObj.planned_arrival_time) {
                    freshTimeTableItelms.push(timeTableColumnObj)
                }
            });
            if (freshTimeTableItelms.length) {
                this.setState({
                    timeTableItems: freshTimeTableItelms,
                    lastUpdate: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getUTCSeconds()
                });
            }
        });
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