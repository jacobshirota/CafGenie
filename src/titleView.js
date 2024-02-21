import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';

const TitleView = (props) => {
    return (
        <Header
            //ViewComponent={LinearGradient}
            /*linearGradientProps={{
                colors: ['#FEC833', '#EDF0F1'],
                start: { x:0, y:0.5 },
                end: { x:0, y: 1},
            }}*/
            centerComponent={{text: "Today", style: styles.title}}
            backgroundColor="#FEC833"
        />
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "#1D243C",
    }
});

export default TitleView;