import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';
import { RootStackParamList } from './ts/types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const navigateKeyboardBlock = () => {
        navigation.navigate('KeyboardBlock');
    };

    const navigateTrackpadBlock = () => {
        navigation.navigate('TrackpadBlock');
    };

    const navigateTouchBlock = () => {
        navigation.navigate('TouchBlock');
    };

    const navigateBlockAll = () => {
        navigation.navigate('BlockAll');
    }

    // State variables for each input
    const [keyboardBlockTime, setKeyboardBlockTime] = useState('30');
    const [trackpadBlockTime, setTrackpadBlockTime] = useState('30');
    const [touchBlockTime, setTouchBlockTime] = useState('30');
    const [blockAllTime, setBlockAllTime] = useState('30');

    // Handlers for each input
    const handleChangeKeyboardBlockTime = (time: string) => {
        const numericTime = time.replace(/[^0-9]/g, '');
        setKeyboardBlockTime(numericTime);
    };

    const handleChangeTrackpadBlockTime = (time: string) => {
        const numericTime = time.replace(/[^0-9]/g, '');
        setTrackpadBlockTime(numericTime);
    };

    const handleChangeTouchBlockTime = (time: string) => {
        const numericTime = time.replace(/[^0-9]/g, '');
        setTouchBlockTime(numericTime);
    };

    const handleChangeBlockAllTime = (time: string) => {
        const numericTime = time.replace(/[^0-9]/g, '');
        setBlockAllTime(numericTime);
    };

    return (
        <View style={styles.container}>
            <Image 
                source={require('../public/logo_full_glow.png')}
                style={styles.image}
            />
            <View style={styles.inlineContainer}>
                <Text style={styles.inlineText}>Block keyboard input for</Text>
                <TextInput
                    style={styles.input}
                    placeholder="time"
                    value={keyboardBlockTime}
                    onChangeText={handleChangeKeyboardBlockTime}
                    keyboardType="numeric"
                    maxLength={3}
                />
                <Text style={styles.inlineText}>s</Text>
                <TouchableOpacity style={styles.button} onPress={navigateKeyboardBlock}>
                    <Text style={styles.buttonText}>Start!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inlineContainer}>
                <Text style={styles.inlineText}>Block trackpad input for</Text>
                <TextInput
                    style={styles.input}
                    placeholder="time"
                    value={trackpadBlockTime}
                    onChangeText={handleChangeTrackpadBlockTime}
                    keyboardType="numeric"
                    maxLength={3}
                />
                <Text style={styles.inlineText}>s</Text>
                <TouchableOpacity style={styles.button} onPress={navigateTrackpadBlock}>
                    <Text style={styles.buttonText}>Start!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inlineContainer}>
                <Text style={styles.inlineText}>Block touch input for</Text>
                <TextInput
                    style={styles.input}
                    placeholder="time"
                    value={touchBlockTime}
                    onChangeText={handleChangeTouchBlockTime}
                    keyboardType="numeric"
                    maxLength={3}
                />
                <Text style={styles.inlineText}>s</Text>
                <TouchableOpacity style={styles.button} onPress={navigateTouchBlock}>
                    <Text style={styles.buttonText}>Start!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inlineContainer}>
                <Text style={styles.inlineHighlightText}>Block ALL inputs for</Text>
                <TextInput
                    style={styles.input}
                    placeholder="time"
                    value={blockAllTime}
                    onChangeText={handleChangeBlockAllTime}
                    keyboardType="numeric"
                    maxLength={3}
                />
                <Text style={styles.inlineText}>s</Text>
                <TouchableOpacity style={styles.highlightButton} onPress={navigateBlockAll}>
                    <Text style={styles.buttonText}>Start!</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.copyright}>©2024 Tillmann Menzer. All rights reserved.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(32, 32, 32)',
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
    image: {
        width: 320,
        height: 130,
        marginBottom: 30,
    },
    input: {
        backgroundColor: 'transparent',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: 70,
        marginRight: 5,
    },
    copyright: {
        fontSize: 12,
        color: 'grey',
        position: 'absolute',
        bottom: 10, 
    }
});

export default Home;
