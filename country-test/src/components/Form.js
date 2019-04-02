import React, { Component } from 'react'
import styles from './Form.module.css'
import Lists from './Lists'

class Form extends Component {
  state = {
    text: '',
    data: []
  }

  handleChange = e => {
    this.setState({
      text: e.currentTarget.value
    })
  }
  

  handleSubmit = e => {
  e.preventDefault()
  let country = this.state.text
  const request = async () => {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const json = await response.json();
     this.setState({
        data: json
     })
    console.log(this.state)
    }
    request()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.formcontainer}>
            <input
              className="input is-dark"
              type="text"
              placeholder="Write country"
              style={{ width: '50%' }}
              onChange={this.handleChange}
            />
            <button
              className="button is-primary"
              style={{ marginLeft: '2rem' }}
            >
              Submit
            </button>
          </div>
        </form>
         <Lists data={this.state.data} />
      </div>
    )
  }
}

export default Form
