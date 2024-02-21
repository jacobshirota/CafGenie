import React from 'react';
import { ScrollView } from 'react-native';
import TitleView from './titleView';
import DaypartView from './daypartView';

const LoadedView = (props) => {
    return (
        <ScrollView>
            <TitleView/>
            {
                props.days[0].cafes[17].dayparts[0].map(dp => { //for each Daypart do
                    return(
                    <DaypartView
                        label={dp.label}
                        stations={dp.stations}
                        items={props.items}
                        startTime={dp.starttime}
                        endTime={dp.endtime}
                        key={String(dp.label)}
                    />
                    )
                })
            }
      </ScrollView>
    )
}
export default LoadedView;