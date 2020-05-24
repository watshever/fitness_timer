import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Timer from './Timer'
import { connect } from 'react-redux'
import * as Style from '../StyleVars'

class TimerScreen extends React.Component {    
    render() {
        console.log(this.props.queue)
        return (
            <Timer min={this.props.queue[1].min} sec={this.props.queue[1].sec} timeId={1}/>
        )
    }
}

const mapStateToProps = state => ({
    queue: state.timers
})

export default connect(mapStateToProps)(TimerScreen)