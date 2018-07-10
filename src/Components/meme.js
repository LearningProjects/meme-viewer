import React, { Component } from 'react'

class Meme extends Component {
	render() {
		return (
			<div class="row" style={{float: 'left'}}>
			    <div class="col s12 m7">
			      <div style={{width: '250px', height: '250px'}} class="card">
			        <div class="card-image">
			          <img style={{width: '250px', height: '250px'}} src={this.props.meme.url}/>
			          <span class="card-title">{this.props.meme.name}</span>
			        </div>
			      </div>
			    </div>
			  </div>
		)
	}
}

export default Meme