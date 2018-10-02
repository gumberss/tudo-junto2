import React from 'react'
import MessageBroker from './MessageBroker';
import MessageSender from './MessageSender';
import PropTypes from 'prop-types'

export default class Device extends React.Component {
	
  	static propTypes = {
  		onSendMessage: PropTypes.func.isRequired,
  	}

  	render(){
      
      var { messages, username, onSendMessage } = this.props;
      
      return (
        <div className="container">
        	<div className="chat-window">
            	<h2>Super Awesome Chat</h2>
            	<div className="name sender">{username}</div>
           		<MessageBroker messages={messages} username={username}/>
        		<MessageSender onSendMessage={onSendMessage} username={username}/>
      		</div>
		</div>
      )
    }
}