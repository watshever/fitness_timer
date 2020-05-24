import React from 'react'
import { FlatList, View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Item } from 'react-native'
import * as Style from '../StyleVars'
import { AntDesign } from '@expo/vector-icons'
import { connect } from 'react-redux'
import TimerPicker from './TimerPicker'
import { addTimer } from '../redux/Actions'

class SelectorScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return ({
            title: 'Intervals',
            headerTitleAlign: 'center',
            headerStyle: styles.header,
            headerTitleStyle: styles.headerTitle,
            headerLeftStyle: styles.headerL,
            headerRightStyle: styles.headerR,
            headerLeft: () => (
                <TouchableOpacity
                    style={styles.headerBackButton}
                    onPress={() => (navigation.navigate('Main'))}
                >
                    <AntDesign name="leftcircleo" size={32}></AntDesign>
                </TouchableOpacity>),
            headerRight: () => (
                <TouchableOpacity
                    style={styles.headerAddButton}
                    onPress={navigation.getParam('addTimer')}
                >
                    <AntDesign name="pluscircleo" size={32}></AntDesign>
                </TouchableOpacity>),
        })
    }
    
    _handleAddTimer = () => {
        this.props.addTimerToList({name: 'timer ' + this.id, min: 0, sec: 0, id: this.id})
        this.id += 1
    }

    componentDidMount() {
        this.id = 1
        this.props.navigation.setParams({
            addTimer: this._handleAddTimer
        })
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.appContainer}>
                <FlatList
                    style={styles.timerList}
                    data={this.props.timers}
                    extraData={this.props.timers}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={this.renderItem}
                />
                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Timer')}
                    >
                        <Text>TESTING</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }

    renderItem = ({item: item, index}) => {
        return (<TimerPicker name={item.name} min={item.min} sec={item.sec} id={item.id}/>)
    }

}

const mapDispatchToProps = dispatch => ({
    addTimerToList: (prop) => {
        dispatch(addTimer(prop))
    }
})

const mapStateToProps = state => ({
    timers: state.timers
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectorScreen)


const styles = StyleSheet.create({
    appContainer: {
        justifyContent: 'center'
    },
    timerList: {

    },
    header: {
        backgroundColor: Style.BACKGROUND_COLOR,
    },
    headerTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: Style.FONT,
        color: Style.TEXT_COLOR
    },
    headerBackButton: {
        paddingLeft: 5,
    },
    headerAddButton: {
        alignContent: 'flex-end',
        paddingRight: 5,
    }, 
    footer: {
        backgroundColor: Style.SECONDARY_COLOR
    }
})

