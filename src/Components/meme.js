import React, { Component } from 'react'

class Meme extends Component {
	render() {
		return (
			<div style={{float: 'left'}}>
				<p>{this.props.meme.name}</p>
				<img style={{width: '250px', height: '250px'}}src={this.props.meme.url}/>
			</div>
			)
	}
}

export default Meme