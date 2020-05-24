import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import MainNavigator from './navigators/MainNavigator'
import { store } from './redux/Store'

class App extends React.Component {
  render() {
      return (
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      )
  }
}

export default App