import React from 'react'
import { View, Text, StyleSheet, } from 'react-native';
import MenuItem from './menuItem';

function americanTime(str) {
    switch (str[0]) {
        case "0":
            str = str.substring(1, );
            break;
        case "1":
            switch (str[1]) {
                case "0":
                case "1":
                case "2":
                    break;
                default:
                    str = (Number.parseInt(str[1]) - 2).toString() + str.substring(2, );
                    break;
            }
            break;
        case "2":
            str = (Number.parseInt(str.substring(0,2)) - 12).toString() + str.substring(2, );
            break;
    }
    return str;
}

const DaypartView = (props) => {
    return (
        <View>
            <View style={styles.daypartLabel}>
                <Text style={styles.title}>{" " + props.label}</Text>
                <Text style={styles.time}>{americanTime(props.startTime) + " - " + americanTime(props.endTime) + " "}</Text>
            </View>
            {props.stations.map(station => { //for each station do
                return (
                    station.items.map(item => { //for each item at station do
                        if(props.items[item].special) {
                            return(
                            <MenuItem
                                item={props.items[item].label}
                                station={station.label}
                                key={String(props.items[item].label)}
                            />
                            );
                        }
                    })
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    daypartLabel: {
        backgroundColor: "#EDF0F1",
        flexDirection: "row",
        justifyContent:"space-between",

    },
    title: {
        fontSize: 18,
        color: "#757575",
    },
    time: {
        fontSize: 18,
        color: "#757575",
    },
    station: {
        fontSize: 20,
    },
})

export default DaypartView;