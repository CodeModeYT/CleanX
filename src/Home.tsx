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
import Footer from './components/Footer';
import { Dimensions } from 'react-native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const navigateKeyboardBlock = () => {
        navigation.navigate('KeyboardBlock', { time: parseInt(keyboardBlockTime, 10) });
    };

    const navigateTrackpadBlock = () => {
        navigation.navigate('TrackpadBlock', { time: parseInt(trackpadBlockTime, 10) });
    };

    const navigateTouchBlock = () => {
        navigation.navigate('TouchBlock', { time: parseInt(touchBlockTime, 10) });
    };

    const navigateBlockAll = () => {
        navigation.navigate('BlockAll', { time: parseInt(blockAllTime, 10) });
    }

    // State variables for each input
    const [keyboardBlockTime, setKeyboardBlockTime] = useState<string>('30');
    const [trackpadBlockTime, setTrackpadBlockTime] = useState<string>('30');
    const [touchBlockTime, setTouchBlockTime] = useState<string>('30');
    const [blockAllTime, setBlockAllTime] = useState<string>('30');


    // Handlers for each input
    const handleChangeKeyboardBlockTime = (time: string) => {
        setKeyboardBlockTime(time.replace(/[^0-9]/g, ''));
    };

    const handleChangeTrackpadBlockTime = (time: string) => {
        setTrackpadBlockTime(time.replace(/[^0-9]/g, ''));
    };

    const handleChangeTouchBlockTime = (time: string) => {
        setTouchBlockTime(time.replace(/[^0-9]/g, ''));
    };

    const handleChangeBlockAllTime = (time: string) => {
        setBlockAllTime(time.replace(/[^0-9]/g, ''));
    };

    return (
        <View style={styles.container}>
            <Image 
                source={require('../public/logo_full_glow.png')}
                style={styles.image}
            />
            {/* Keyboard */}
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
            {/* Trackpad / Mouse */}
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
            {/* Touch */}
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
            {/* All */}
            <View style={styles.inlineContainerHighlighted}>
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
            <Footer />
        </View>
    );
};


// Style variables:
const { height: screenHeight } = Dimensions.get('window');
const marginTopPercentage = 0.25;
const marginTop = screenHeight * marginTopPercentage;

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
    inlineContainerHighlighted: {
        marginTop: 20,
        borderTopWidth: 1,
        paddingTop: 20,
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
        marginTop: marginTop,
    },
    input: {
        backgroundColor: 'transparent',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: 70,
        marginRight: 5,
    },
});

export default Home;
