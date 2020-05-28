import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyIcecream, sellCash } from '../redux'

function IcecreamContainer(props) {
    const [quantity, setQuantity] = useState(1)
    return (
        <div>
            <h2>Number of Icecreams: {props.numOfIcecreams}</h2>
            <input type='text' onChange={e => setQuantity(e.target.value)} value={quantity} />
            <button onClick={() => {
                props.buyIcecream(quantity);
                props.sellCash(quantity, props.price, props.totalCash)
            }}>Buy {quantity} Icecream</button>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        numOfIcecreams: state.icecream.numOfIcecreams,
        price: state.icecream.price,
        totalCash: state.cash.totalCash
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: quantity => dispatch(buyIcecream(quantity)),
        sellCash: (number, price, totalCash) => dispatch(sellCash(number, price, totalCash))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IcecreamContainer);