import moment from "moment";

export const TIMETABLE_STATUS = {
    CANCELED: 'annulliert',
    ARRIVED: 'jetzt',
    ARRIVES_SHORTLY: '<1'
};

export function calculateDepartureTime(plannedDepartureDateString, currentDelayString, currentDate) {
    let estimatedDeparture = moment(plannedDepartureDateString);

    let delayInMinutes = 0;

    if (currentDelayString === 'X') {
        return TIMETABLE_STATUS.CANCELED
    }

    if (currentDelayString && currentDelayString.split('+')[1] !== '0') {
        delayInMinutes = currentDelayString.split('+')[1];
        estimatedDeparture = estimatedDeparture.add(moment.duration(delayInMinutes, 'm'));
    }

    const check = moment.duration(estimatedDeparture.diff(currentDate));

    if (check.asMilliseconds() < -MILLISECONDS.FIFTEEN_SECONDS) {
        return null;
    }

    if (check.asMilliseconds() < MILLISECONDS.FIFTEEN_SECONDS) {
        return TIMETABLE_STATUS.ARRIVED;
    }

    if (check.asMilliseconds() < MILLISECONDS.ONE_MINUTE) {
        return TIMETABLE_STATUS.ARRIVES_SHORTLY;
    }

    return Math.floor(check.asMinutes());
}

export function timeTableColumnObjectFactory(rawItemObject, currentDate) {
    return {
        vehicleType: rawItemObject.type,
        planned_arrival_time: calculateDepartureTime(rawItemObject.time, rawItemObject.dep_delay, currentDate),
        time: rawItemObject.time,
        destination: rawItemObject.terminal.name,
        line: rawItemObject.line,
        delay: rawItemObject.dep_delay,
    };
}

export const MILLISECONDS = {
    TEN_SECONDS: 10000,
    FIFTEEN_SECONDS: 15000,
    ONE_MINUTE: 60000,
};
