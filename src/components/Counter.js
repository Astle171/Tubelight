import React, { Component } from 'react'
import CounterChild from './CounterChild'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
    this.updateCounter = this.updateCounter.bind(this)
  }
  updateCounter(type) {
    var count = this.state.counter
    type == '+' ? count++ : count--
    this.setState({ counter: count })
  }
  render() {
    return (
      <div>
        {this.state.counter}
        <CounterChild onClick={this.updateCounter} />
      </div>
    )
  }
}
