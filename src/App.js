import React, { Component } from 'react'
import './App.css'
import Header from './Components/header.js'
import MemeShow from './Components/meme_show.js'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <MemeShow />
      </div>
    )
  }
}

export default App
