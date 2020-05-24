import React from 'react'
import * as Style from '../StyleVars'
import { View, StyleSheet, Text, TouchableOpacity, Vibration } from 'react-native'

class Timer extends React.Component {
    state = {
        originalTime: this.props.min * 60 + this.props.sec,
        time: this.props.min * 60 + this.props.sec,
        timerId: this.props.timerId,
        isStopped: false, 
        stopText: 'Stop',
        isFinished: false
    }

    componentDidMount() {
        this.interval = setInterval(this.decrement, 1000)
    }

    decrement = () => {
        this.setState(prevState => ({
            time: prevState.time - 1
        }))
    }

    stopTimer = () => {
        // restarts the timer if stopped and changes button text
        this.setState({
            isStopped: !this.state.isStopped,
            stopText: this.state.isStopped ? "Stop" : "Start"
        })
        if (!this.state.isStopped) {
            clearInterval(this.interval)
        } else {
            this.interval = setInterval(this.decrement, 1000)
        }
    }

    resetTimer = () => {
        clearInterval(this.interval)
        this.setState(prevState => ({
            time: this.state.originalTime,
            stopText: 'Stop',
            isStopped: false
        }))
        this.interval = setInterval(this.decrement, 1000)
    }

    render() {
        return(
            <View style={styles.appContainer}>
                <Text style={styles.timerText}>
                    {parseInt(this.state.time / 60)}:{('0' + this.state.time % 60).slice(-2)}
                </Text>
                <View style={styles.timerButtons}>
                    {/* stop button to pause the timer*/}
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={this.stopTimer}
                    >
                        <Text style={styles.buttonText}>{this.state.stopText}</Text>
                    </TouchableOpacity>

                    {/* reset button to reset the timer*/}
                    <TouchableOpacity   
                        style={styles.button}
                        onPress={this.resetTimer}
                    >
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>                
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex:1,
        justifyContent: 'center'
    },
    timerText: {
        textAlign: 'center',
        fontFamily: Style.FONT,
        fontSize: 100,
    }, 
    timerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    button: {
        backgroundColor: Style.SECONDARY_COLOR,
        borderRadius: 15, 
        padding: 10,
        width: 100
    }, 
    buttonText: {
        color: Style.BACKGROUND_COLOR,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Timer