import React, { Component } from 'react'
import Meme from './meme.js'
import axios from 'axios';

class MemeShow extends Component {
  state = {
    memesList: []
  }
  
  componentDidMount () {
    axios.get(`https://api.imgflip.com/get_memes`)
      .then(res => {
        this.setState({memesList: res.data.data.memes})
      })
  }

  render () {
    return (
      <div className='container'>
        <div className='section'>
          <div className='row' >
            {this.state.memesList.map(data => <Meme meme={data}></Meme>)}
          </div>
        </div>
      </div>
    )
  }
}

export default MemeShow
