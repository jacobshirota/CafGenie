import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ListItem } from '@rneui/base';

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

const MenuItem = (props) => {
    return (
        <ListItem bottomDivider={true}>
            <ListItem.Content>
                <ListItem.Title><Text style={styles.item}>{toTitleCase(props.item)}</Text></ListItem.Title>
                <ListItem.Subtitle><Text style={styles.station}>{toTitleCase(props.station)}</Text></ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};

const styles = StyleSheet.create({
    item: {
        fontSize: 20,
        color: "#0D142C",
        fontFamily: "Barlow-Medium",
    },
    station: {
        fontSize: 12,
        color: "#0D142C",
        fontFamily: "Barlow-Medium",
    }
})

export default MenuItem;