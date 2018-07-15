import React, { Component } from 'react'

class Meme extends Component {
  render () {
    return (
      <div className='row' style={{float: 'left'}}>
        <div className='col s12 m7'>
          <div style={{width: '250px', height: '350px'}} className='card'>
            <div className='card-image'>
              <img style={{width: '250px', height: '250px'}} src={this.props.meme.url} />
              <a className='btn-floating halfway-fab waves-effect waves-light red' href={this.props.meme.url} download>
                <i className='material-icons'>file_download</i>
              </a>
            </div>
            <div className='card-content'>
              <span className='card-title truncate'>{this.props.meme.name}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Meme
