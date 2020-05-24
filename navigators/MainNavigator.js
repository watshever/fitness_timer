import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import MainScreen from '../components/MainScreen'
import TimerNavigator from './TimerNavigator'

const Root = createSwitchNavigator({
    Main: {screen: MainScreen},
    App: {screen: TimerNavigator}
})

const MainNavigator = createAppContainer(Root)

export default MainNavigator