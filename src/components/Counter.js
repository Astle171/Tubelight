import React, { Component } from 'react'
import CounterChild from './CounterChild'
import '../App.css'
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
        <div className='counter'>
          <div class='count'>
            <h3>Count:</h3>
            <h1>{this.state.counter}</h1>
          </div>
        </div>
        <CounterChild onClick={this.updateCounter} />
      </div>
    )
  }
}
