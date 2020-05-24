import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Constants from 'expo-constants'
import { SimpleLineIcons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import * as Style from '../StyleVars'

export default class MainScreen extends React.Component {

    render() {
        return(
            <View style={styles.mainContainer}>
                <SimpleLineIcons style={styles.clockIcon} name="clock" size={100} color={Style.SECONDARY_COLOR
                }/>
                <Text style={styles.titleText}>Fitness Timer</Text>
                <TouchableOpacity 
                    style={styles.mainButton}
                    onPress={() => (this.props.navigation.navigate('App'))}
                >
                    <Text style={styles.buttonText}>
                        Enter
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        backgroundColor: Style.BACKGROUND_COLOR,
    },
    mainImage: {
        backgroundColor: Style.BACKGROUND_COLOR
    },
    titleText: {
        backgroundColor: 'transparent',
        alignSelf: "center",
        fontFamily: Style.FONT,
        fontSize: 75,
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        top: 65,
    },
    mainButton: {
        backgroundColor: Style.SECONDARY_COLOR,
        alignSelf: 'center',
        width: '80%',
        height: '10%',
        borderRadius: 15,
        justifyContent: "center",
    },
    buttonText:{
        alignSelf: 'center',
        fontFamily: Style.FONT,
        fontWeight: 'bold',
        fontSize: 35,
    },
    clockIcon: {
        position: 'absolute',
        alignSelf: 'center',
        top: 85
    }
})