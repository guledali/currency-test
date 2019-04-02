import React, { Component } from 'react'

class Lists extends Component {
  render() {
    console.log(this.props.data)
    return (
      <ul className="list">
        {this.props.data.map(item => (
          <>
          <li className="list-item" 
            key={item.name}>
            Country: {item.name}
          </li>
          <li className="list-item" 
            key={item.name}>
            Capital: {item.capital}
          </li>
          <li className="list-item" 
            key={item.name}>
            Population: {item.population}
          </li>
          <li className="list-item" 
            key={item.name}>
            Currency: {item.currencies.map(sek => {
              return sek.code
            }) }
          </li>
          </>
        ))}
      </ul>
    )
  }
}

export default Lists
