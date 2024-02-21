import React from "react";
import { StyleSheet, View, Text } from "react-native";

const LoadingView = (props) => {
    return (
        <View style={styles.background}>
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#0D142C",
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#FEC833",
        fontSize: 40,
        fontFamily: "Barlow-Light",
    }
})
export default LoadingView;