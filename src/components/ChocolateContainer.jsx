import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyChocolate, sellCash } from '../redux'

function ChocolateContainer(props) {
    const [quantity, setQuantity] = useState(1)
    return (
        <div>
            <h2>Number of Chocolate: {props.numOfChocolates}</h2>
            <input type='text' value={quantity} onChange={e => setQuantity(e.target.value)} />
            <button onClick={() => {
                props.buyChocolate(quantity)
                props.sellCash(quantity, props.price, props.totalCash)
            }}>Buy {quantity} Chocolate</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfChocolates: state.chocolate.numOfChocolates,
        price: state.chocolate.price,
        totalCash: state.cash.totalCash
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyChocolate: quantity => dispatch(buyChocolate(quantity)),
        sellCash: (number, price, totalCash) => dispatch(sellCash(number, price, totalCash))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChocolateContainer);