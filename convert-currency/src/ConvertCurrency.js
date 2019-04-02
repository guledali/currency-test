import React, { Component } from 'react'

class ConvertCurrency extends Component {
  render() {
    return (
      <div className="col">
        <input
          type="number"
          className="form-control"
          placeholder="DOLLAR"
          defaultValue={this.props.dollar}
        />
      </div>
    )
  }
}

export default ConvertCurrency
