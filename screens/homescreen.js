import React, {useState} from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, ImageBackground, StyleSheet } from 'react-native'

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Home screen page</Text>
        </View>
    );
}


export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }
})


