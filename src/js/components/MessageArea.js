import React, { Component } from 'react'

class MessageArea extends Component {
  
  constructor(){
    super()
    this.state = {
      text: '',
      SMS: 0,
    }
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  handleOnChange(e){
   let targetVal = e.target.value.substring(0, this.props.maxLength)
   let SMSCounter = Math.floor(targetVal.length / this.props.maxCharPerSMS)
   this.setState({
    SMS: SMSCounter > 1 ? SMSCounter : 1,
    text: targetVal
   })
   this.props.onChange(this.props.name, targetVal)
  }

  render(){
    return(
      <div className={this.props.className}>
        <label>{this.state.text.length} Chars / {this.state.SMS} SMS</label>
        <div>
          <textarea 
            rows={6} 
            name={this.props.name} 
            onChange={this.handleOnChange} 
            onPaste={this.handleOnChange} 
            value={this.state.text}
            placeholder={this.props.placeholder}
          ></textarea>
        </div>
      </div>
    )
  }
}

export default MessageArea