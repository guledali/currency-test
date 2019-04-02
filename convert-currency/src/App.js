import React, { Component } from 'react'
import ConvertCurrency from './ConvertCurrency'
import fx from 'money'

class App extends Component {
  state = {
    exchange: '',
    value: ''
  }

  handleChange = e => {
    this.setState({
      exchange: e.currentTarget.value
    })
  }

  handleExchange = () => {
    const request = async () => {
      const response = await fetch(
        `http://data.fixer.io/api/latest?access_key=498435e6974fe82abc93869a3626aa4b&`
      )
      const json = await response.json()
      fx.base = json.base
      fx.rates = json.rates
      this.setState({
        value: fx.convert(this.state.exchange, { from: 'SEK', to: 'USD' })
      })
    }
    request()
  }

  render() {
    return (
      <div className="container mt-5">
        <p className="text-center p-2 lead font-weight-bold">
          Change from Swedish to dollar
        </p>
        <form>
          <div className="form-row">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="SEK"
                onChange={this.handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleExchange}
            >
              Exchange
            </button>
            <ConvertCurrency dollar={this.state.value} />
          </div>
        </form>
      </div>
    )
  }
}

export default App
