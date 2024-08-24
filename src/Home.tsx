import React, { Component } from 'react'
import RNPickerSelect from 'react-native-picker-select';
import {
    Platform,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'

export default class Home extends Component {
    render() {
    return (
            <View style={styles.container}>
                <Image 
                    source={require('../public/logo_full_glow.png')}
                    style={styles.image}
                />
                <View style={styles.inlineContainer}>
                    <Text style={styles.inlineText}>Block keyboard input</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Start!</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inlineContainer}>
                    <Text style={styles.inlineText}>Block trackpad input</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Start!</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inlineContainer}>
                    <Text style={styles.inlineText}>Block touch input</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Start!</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inlineContainer}>
                    <Text style={styles.inlineHighlightText}>Block ALL inputs</Text>
                    <TouchableOpacity style={styles.highlightButton}>
                        <Text style={styles.buttonText}>Start!</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.copyright}>©2024 Tillmann Menzer. All rights reserved.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    inlineText: {
        fontSize: 18,
        marginRight: 10,
    },
    inlineHighlightText: {
        fontSize: 18,
        marginRight: 10,
        color: 'rgba(11, 148, 86, 1)',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    highlightButton: {
        backgroundColor: 'rgba(11, 148, 86, 1)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    btn: {
        width: '30%',
        borderWidth: 1,
        borderRadius: 4,
        height: 20,
    },
    infoText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    btnText: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 30,
    },
    image: {
        width: 320,
        height: 130,
        position: 'absolute',
        top: 100,
        left: '50%',
        marginLeft: -150, // half the width of the image
    },
    copyright: {
        fontSize: 12,
        color: 'grey',
        bottom: 20,
        position: 'absolute'
    }
    }
)