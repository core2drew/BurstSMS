import React, {Component} from 'react'

class Input extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    if(this.props.onChange) {
      this.props.onChange(this.props.name, e.target.value)
    }
  }

  render(){
    return (
        <input 
          type="text" 
          name={this.props.name} 
          placeholder={this.props.placeholder} 
          onChange={this.handleChange}
          value={this.props.value}
        />
    )
  }
}

export default Input