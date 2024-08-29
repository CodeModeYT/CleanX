import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import { RootStackParamList } from './ts/types';

type BlockAllNavigationProp = StackNavigationProp<RootStackParamList, 'TrackpadBlock'>;
type BlockAllRouteProp = RouteProp<RootStackParamList, 'TrackpadBlock'>;

const BlockAll = () => {
    const navigation = useNavigation<BlockAllNavigationProp>();
    const route = useRoute<BlockAllRouteProp>();

    const [timeLeft, setTimeLeft] = useState<number>(route.params?.time || 30);
    const [shouldNavigate, setShouldNavigate] = useState<boolean>(false);

    useEffect(() => {
        const id = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(id);
                    setShouldNavigate(true);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => {
            clearInterval(id);
        };
    }, []);

    useEffect(() => {
        if (shouldNavigate) {
            navigation.navigate('Home');
        }
    }, [shouldNavigate, navigation]);

    const stopTimer = () => {
        setTimeLeft(0);
        setShouldNavigate(true);
    };

    return (
        <View style={styles.container}>
            <Image 
                source={require('../public/logo_icon.png')}
                style={styles.image}
            />
            <Text style={styles.countdown}>{timeLeft}s</Text>
            <Text style={styles.blockmsg}>Blocking ALL inputs</Text>
            <Text style={styles.infomsg}>The inputs will get enabled again as soon as the countdown above reaches 0.</Text>
            <Text style={styles.copyright}>©2024 Tillmann Menzer. All rights reserved.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(32, 32, 32)'
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    image: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 100,
        left: '50%',
        marginLeft: -50, // half the width of the image
    },
    copyright: {
        fontSize: 12,
        color: 'grey',
        bottom: 20,
        position: 'absolute'
    },
    countdown: {
        fontSize: 100,
        fontWeight: 'bold',
        marginTop: 100,
        marginBottom: 50,
    },
    blockmsg: {
        fontSize: 20,
        marginTop: 0,
        textAlign: 'center',
    },
    infomsg: {
        fontSize: 15,
        color: 'grey',
        marginTop: 0,
        textAlign: 'center',
        marginBottom: 100,
    }
});

export default BlockAll;
