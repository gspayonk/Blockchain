import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

import Wallet from './Wallet'


function App() {
  const [id, setId] = useState('')
  const [user, setUser] = useState()
  const [chain, setChain] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/chain')
      .then(({ data }) => {
        setChain(data.chain)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])

  const handleChanges = e => {
    setUser(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setId(user)
  }

  return (
    <div className='App'>
      <h1>My Wallet</h1>
      <h2>User:{id}</h2>
      <form onSubmit={onSubmit}>
        <input value={user} onChange={handleChanges} placeholder='username' />
      </form>
      <Wallet id={id} chain={chain} />
    </div>
  )
}

export default App;
