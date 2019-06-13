import React, {Component} from "react";
import {getData} from "../Data/tram_info";
import TimeTableHeader from "./TimeTableHeader";
import TimeTableTitle from "./TimeTableTitle";
import TimeTableColumn from "./TimeTableColumn";
import {MILLISECONDS, timeTableColumnObjectFactory} from "../Utils/TimeTableUtils";
import moment from "moment";


export default class TimeTable extends Component {
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
            const freshTimeTableItems = [];
            const currentDate = moment();
            reducedItemList.forEach((rawItem) => {
                const timeTableColumnObj = timeTableColumnObjectFactory(rawItem, currentDate);
                if (timeTableColumnObj.planned_arrival_time) {
                    freshTimeTableItems.push(timeTableColumnObj)
                }
            });
            if (freshTimeTableItems.length) {
                this.setState({
                    timeTableItems: freshTimeTableItems,
                    lastUpdate: moment().format('HH:mm:ss a')
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