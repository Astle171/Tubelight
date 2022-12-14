import React, { Component } from 'react'

export default class CounterChild extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <button onClick={(e) => this.props.onClick('+')}>+</button>
        <button onClick={(e) => this.props.onClick('-')}>-</button>
      </div>
    )
  }
}
