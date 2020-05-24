import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation-stack'
import SelectorScreen from '../components/SelectorScreen'
import TimerScreen from '../components/TimerScreen'

const TimerNavigator = createStackNavigator({
    Selector: {screen: SelectorScreen},
    Timer: {screen: TimerScreen}
})

export default TimerNavigator