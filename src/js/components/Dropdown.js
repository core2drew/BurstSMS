import React, { Component } from 'react'

class Dropdown extends Component {

  constructor(){
    super()
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e){
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <select onChange={this.handleOnChange}>
        {
          this.props.items.map((item, i) => (
            <option value={item.dial_code} key={i}>{item.name}</option>
          ))
        }
      </select>
    )
  }
}

export default Dropdown