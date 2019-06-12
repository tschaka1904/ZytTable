import {calculateDepartureTime} from './TimeTableUtils';

const PLANNED_DEPARTURE_DATE_STRING = '2019-10-27 20:12:00';
const NO_DELAY = '+0';

test('A tram bus leaves in 1 Minute', () => {
    const mockCurrentDate = new Date(Date.parse('2019-10-27 20:11:00'));
    expect(calculateDepartureTime(PLANNED_DEPARTURE_DATE_STRING, NO_DELAY, mockCurrentDate)).toBe(1);
});

test('A tram bus leaves in leas than 1 Minute', () => {
    const mockCurrentDate = new Date(Date.parse('2019-10-27 20:11:25'));
    expect(calculateDepartureTime(PLANNED_DEPARTURE_DATE_STRING, NO_DELAY, mockCurrentDate)).toBe('<1');
});

test('A tram bus leaves in leas than 1 Minute', () => {
    const mockCurrentDate = new Date(Date.parse('2019-10-27 20:11:45'));
    expect(calculateDepartureTime(PLANNED_DEPARTURE_DATE_STRING, NO_DELAY, mockCurrentDate)).toBe('<1');
});

test('A tram bus leaves in leas than 1 Minute', () => {
    const mockCurrentDate = new Date(Date.parse('2019-10-27 20:11:46'));
    expect(calculateDepartureTime(PLANNED_DEPARTURE_DATE_STRING, NO_DELAY, mockCurrentDate)).toBe('jetzt');
});

test('A tram bus leaves in leas than 1 Minute', () => {
    const mockCurrentDate = new Date(Date.parse('2019-10-27 20:12:00'));
    expect(calculateDepartureTime(PLANNED_DEPARTURE_DATE_STRING, NO_DELAY, mockCurrentDate)).toBe('jetzt');
});


test('A tram bus leaves in leas than 1 Minute', () => {
    const mockCurrentDate = new Date(Date.parse('2019-10-27 20:12:01'));
    expect(calculateDepartureTime(PLANNED_DEPARTURE_DATE_STRING, NO_DELAY, mockCurrentDate))
        .toBe('jetzt');
});

test('A tram bus leaves in leas than 1 Minute', () => {
    const mockCurrentDate = new Date(Date.parse('2019-10-27 20:12:15'));
    expect(calculateDepartureTime(PLANNED_DEPARTURE_DATE_STRING, NO_DELAY, mockCurrentDate)).toBe('jetzt');
});

test('A tram bus leaves in leas than 1 Minute', () => {
    const mockCurrentDate = new Date(Date.parse('2019-10-27 20:12:16'));
    expect(calculateDepartureTime(PLANNED_DEPARTURE_DATE_STRING, NO_DELAY, mockCurrentDate)).toBe(null);
});

test('A tram bus leaves in leas than 1 Minute', () => {
    const mockCurrentDate = new Date(Date.parse('2019-10-27 20:12:16'));
    const delay = 'X';
    expect(calculateDepartureTime(PLANNED_DEPARTURE_DATE_STRING, delay, mockCurrentDate)).toBe('Entfällt');
});

// Eira's Test
// test('A tram bus leaves in 1 Minute', () => {
//     const plannedDepart                                         )))))|||||||||||||||||||||||GB±|\1</const>
//     const currentDelaySthj0-5t  m  tbring = '+0';
//     const mockCurrentDateswqxcg2vfawt3 = new Date(Date.parse('2019-10-27 20:11:30'));
//     expect(calculateDepartureTime(plannedDepartureDateString, currentDelayString, mockCurrentDate)).toBe('<1');
// });;