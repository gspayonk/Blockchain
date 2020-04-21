import React, { useEffect, useState } from 'react'

const Wallet = (props) => {
    const { id } = props
    const { chain } = props
    const received = [0]
    const sent = [0]
    const positive = []
    const negative = []

    for (const block of chain) {
        block.transactions.filter(tp => tp.recipient == id).map(t => (
            received.push(t.amount),
            positive.push(t)
        ))
    }

    for (const block of chain) {
        block.transactions.filter(tp => tp.sender == id).map(t => (
            sent.push(t.amount),
            negative.push(t)
        ))
    }

    const total = (received.reduce((acc, value) => acc + value)) - (sent.reduce((acc, value) => acc + value))

    useEffect(() => {
    }, [props])

    return (
        <div>
            <h2>Balance: {total}</h2>

            <h1>Transactions</h1>
            <div>
                <div>
                    <h3>Coins Received:</h3>
                    {positive.map(add => (
                        <div>
                            <h4>Sender: {add.sender}, Amount: {add.amount}</h4>
                        </div>
                    ))}
                </div>
                <div>
                    <h3>Coins Sent:</h3>
                    {negative.map(add => (
                        <div>
                            <h4>Recipient: {add.recipient}, Amount: {add.amount}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Wallet