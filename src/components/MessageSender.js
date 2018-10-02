import React from 'react'
import PropTypes from 'prop-types'

export default class MessageSender extends React.Component {
  
  	static propTypes = {
  		onSendMessage: PropTypes.func.isRequired,
      	username: PropTypes.string.isRequired,
  	}
  
  	state = {
    	messageText: ''
    }
  
	onSendMessage = event => {
      	
      	event.preventDefault();
      
      	this.props.onSendMessage({
          username: this.props.username,
          text: this.state.messageText
        });
      	
      	this.changeText('');
    }

	changeMessageText = event => {
      	var value = event.target.value;
     	this.changeText(value);
    }

	changeText = newText => {
     	this.setState(() => ({
          	messageText: newText
        }));
    }
  
	isDisabled = () => {
    	return !this.state.messageText;
    }

  	render() {
      var { messageText } = this.state;
      
      	return (
          	<form className="input-group" onSubmit={this.onSendMessage}>
          		<input type="text" className="form-control" placeholder="Enter your message..." value={messageText} onChange = {this.changeMessageText} />
           		<div className="input-group-append">
                  	<button className="btn submit-button" disabled={this.isDisabled()}>
                   	 SEND
                  	</button>
               	</div>
         	</form>
        )
    }
}