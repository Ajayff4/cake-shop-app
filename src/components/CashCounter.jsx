import React from 'react'
import { connect } from 'react-redux'

const CashCounter = (props) => {
    return (
        <h1>Total Cash: {props.totalCash}</h1>
    )
}

const mapStateToProps = state => {
    return {
        totalCash: state.cash.totalCash
    }
}

export default connect(mapStateToProps)(CashCounter);