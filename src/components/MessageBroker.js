import React from 'react'
import PropTypes from 'prop-types'

export default class MessageBroker extends React.Component {
 	static propTypes = {
      	messages: PropTypes.array.isRequired,
      	username: PropTypes.string.isRequired
    }

  	render() {
      
      var { messages, username } = this.props;
      
      	return (
             <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className = {
                    message.username === username ? 'message sender' : 'message recipient'
                  }>
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
     	)
  	}
}