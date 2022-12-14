import React, { Component } from 'react'
import '../App.css'
export default class CounterChild extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='counterChild'>
        <div>
          <div class='buttons'>
            <button onClick={(e) => this.props.onClick('+')}>+</button>
            <button onClick={(e) => this.props.onClick('-')}>-</button>
          </div>
        </div>
      </div>
    )
  }
}
