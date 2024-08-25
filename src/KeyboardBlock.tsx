import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

interface KeyboardBlockState {
    timeLeft: number;
    timerId: NodeJS.Timeout | null;
}

export default class KeyboardBlock extends Component<{}, KeyboardBlockState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            timeLeft: 30,
            timerId: null,
        };
    }

    componentDidMount() {
        const timerId = setInterval(this.countdown, 1000);
        this.setState({ timerId });
    }

    componentWillUnmount() {
        if (this.state.timerId) {
            clearInterval(this.state.timerId);
        }
    }

    countdown = () => {
        if (this.state.timeLeft <= 0) {
            if (this.state.timerId) {
                clearInterval(this.state.timerId);
            }
        } else {
            this.setState((prevState) => ({
                timeLeft: prevState.timeLeft - 1
            }));
        }
    }

    stopTimer = () => {
        if (this.state.timerId) {
            clearInterval(this.state.timerId);
        }
        this.setState({ timeLeft: 0 });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={require('../public/logo_icon.png')}
                    style={styles.image}
                />
                <Text style={styles.countdown}>{this.state.timeLeft}s</Text>
                <Text style={styles.infomsg}>Blocking keyboard input</Text>
                <TouchableOpacity style={styles.button} onPress={this.stopTimer}>
                    <Text style={styles.buttonText}>Stop early</Text>
                </TouchableOpacity>
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
    },
    infomsg: {
        fontSize: 20,
        marginTop: 0,
        textAlign: 'center',
        marginBottom: 100,
    }
});
