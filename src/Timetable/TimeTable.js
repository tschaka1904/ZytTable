import React, {Component} from "react";
import {getData} from "../Data/tram_info";
import TimeTableHeader from "./TimeTableHeader";
import TimeTableTitle from "./TimeTableTitle";
import TimeTableColumn from "./TimeTableColumn";
import {MILLISECONDS, timeTableColumnObjectFactory} from "../Utils/TimeTableUtils";
import moment from "moment";
import Loading from "../Loading";


export default class TimeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeTableItems: [],
            lastUpdate: null,
            showLoader: true
        };
    }

    componentDidMount() {
        this.setup();
        setTimeout(() => {
            this.setState({
                showLoader: false,
            })
        }, 3000);
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
        if (!this.state.timeTableItems.length || this.state.showLoader) {
            return <Loading/>;
        }
        return (
            <div className="container" >
                {this.state.timeTableItems.splice(0, 5).map((item) =>
                    <TimeTableColumn key={item.vehicleType + '-' + item.line + Math.random()} item={item}/>
                )}
            </div>
        );
    }
}