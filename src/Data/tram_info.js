import React from 'react';
import axios from 'axios';

const BASE_URL = '//timetable.search.ch/api/';

const TOWN_NAMES = {
    BASEL: 'Basel'
};

const STATIONS = {
    BASEL: {
        DREIROSENBRUECKE: {
            name: 'Dreirosenbrücke',
            exclude: TOWN_NAMES.BASEL,
            id: 8588768
        },
        RIEHENRING: {
            name: 'Riehenring',
            exclude: TOWN_NAMES.BASEL,
            id: 8589352
        },
        SBB: {
            name: 'Basel SBB',
            exclude: TOWN_NAMES.BASEL,
            id: 8500010
        },
        BARFUESSERPLATZ: {
            name: 'Barfüsserplatz',
            exclude: TOWN_NAMES.BASEL,
            id: 8500897
        }
    }
};



export const WHERE_AM_I = STATIONS.BASEL.RIEHENRING;

export const getData = () => axios.get(BASE_URL + 'stationboard.json?stop=' + WHERE_AM_I.id + '&show_delays=1')
    .then(response => response);