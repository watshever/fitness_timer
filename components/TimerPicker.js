import React from 'react'
import { TouchableOpacity, TextInput, StyleSheet, View, Text, TouchableHighlightBase } from 'react-native'
import { connect } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { removeTimer, updateTimer } from '../redux/Actions'
import * as Style from '../StyleVars'

class TimerPicker extends React.Component {

    state = {
        name: this.props.name,
        min: this.props.min,
        sec: this.props.sec,
        id: this.props.id,
    }

    changeTime = (changeMin, increment) => {
        if (changeMin) {
            this.setState(prevState => ({
                min: Number(prevState.min) + increment
            }), this.updateTimer)
        } else {
            this.setState(prevState => ({
                sec: Number(prevState.sec) + increment
            }), this.updateTimer)
        }
    }

    deleteTimer() {
        this.props.deleteFromList(this.state.id)
    }

    updateTimer = () => {
        this.props.updateTimerInList({
            name: this.state.name,
            min: this.state.min, 
            sec: this.state.sec,
            id: this.state.id 
        })
    }

    render() {
        return(
            <View style={styles.pickerView}>
                <View style={styles.pickerTopRow}>
                    <TextInput 
                        style = {styles.pickerTitle}
                        defaultValue = {this.state.name}
                    />
                    <AntDesign name="close" size={25} style={styles.buttonTime} onPress={() => this.deleteTimer()} />
                </View>
                <View style={styles.pickerBottomRow}>
                    <View style={styles.pickerSelector}>
                        <TouchableOpacity style={styles.buttonTime}>
                            <AntDesign 
                                name="minus" 
                                size={24} 
                                onPress={() => this.changeTime(true, -1)}
                            />
                        </TouchableOpacity>
                        <TextInput 
                            style={styles.appTimeInput}
                            keyboardType = 'numeric'
                            value = {this.state.min.toString()}
                            onChangeText={min => {this.updateTimer(); this.setState({min})}}
                            maxLength={2}
                        />
                        <Text style={styles.regularText}>Min</Text>
                        <TouchableOpacity style={styles.buttonTime}>
                            <AntDesign 
                                name="plus" 
                                size={24}
                                onPress={() => this.changeTime(true, 1)}
                            ></AntDesign>
                        </TouchableOpacity>
                    </View>
                    <View style={{width: 20}}/>
                    <View style={styles.pickerSelector}>
                        <TouchableOpacity style={styles.buttonTime}>
                            <AntDesign 
                                name="minus" 
                                size={24}
                                onPress={() => this.changeTime(false, -1)}
                            ></AntDesign>
                        </TouchableOpacity>
                        <TextInput 
                            style={styles.appTimeInput}
                            keyboardType = 'numeric'
                            value = {this.state.sec.toString()}
                            onChangeText={min => {this.updateTimer(); this.setState({sec})}}
                            maxLength={2}
                        />
                        <Text style={styles.regularText}>Sec</Text>
                        <TouchableOpacity style={styles.buttonTime}>
                            <AntDesign 
                                name="plus" 
                                size={24}
                                onPress={() => this.changeTime(false, 1)}
                            ></AntDesign>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    deleteFromList: (id) => {
        dispatch(removeTimer(id))
    },
    updateTimerInList: (update) => {
        dispatch(updateTimer(update))
    }
})

const styles = StyleSheet.create({
    pickerView: {
        backgroundColor: Style.BACKGROUND_COLOR,
        height: 90,
        borderRadius: 15,
    },
    pickerTitle: {
        paddingLeft: 5,
        fontWeight: 'bold',
        fontSize: 25,
        width: 300,
        paddingBottom: 10,
        paddingTop: 5
    },
    pickerTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pickerSelector: {
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: "center",
        textAlignVertical: 'center'
    },
    pickerBottomRow: {
        flexDirection: 'row',
        justifyContent: "center",
        textAlignVertical: 'center'
    },
    appTimeInput: {
        width: '20%',
        textAlign: 'center',
    },
    regularText: {
        textAlignVertical: 'center',
        paddingRight: 5 
    },
    buttonTime: {
        alignSelf: 'center',
        paddingRight: 5
    }
})

export default connect(null, mapDispatchToProps)(TimerPicker)