import React from 'react';
import { MomentContext } from './momentContext';
import moment from 'moment';
import 'moment/locale/ru';
import { LANG } from '../../constants/Lang';

const localizedMoment = (...args) => {
    return moment(...args).locale(LANG.RU);
};

export const Moment = ({ children }) => {
    return (
        <MomentContext.Provider
            value={{
                moment: localizedMoment
            }}
        >
            {children}
        </MomentContext.Provider>
    );
};
