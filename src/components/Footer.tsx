import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const Footer = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.copyright}>©2024 Tillmann Menzer. All rights resered.</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(32, 32, 32)',
    },
    copyright: {
        fontSize: 12,
        color: 'grey',
        position: 'absolute',
        bottom: 10, 
    }
})

export default Footer;