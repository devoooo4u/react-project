import React from 'react';
import Messages from './messages';
import { Route, Switch, Link } from 'react-router-dom';
import MessageDetails from './messageDetails';

class Inbox extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMessages = this.toggleMessages.bind(this);
        this.state = {
            ifMessagesShown: false,
            linkDescription: 'Show',
            linkToUrl: '/inbox'
        }
    }

    toggleMessages(e){
        // debugger;
        // e.preventDefault();
        this.setState((prevState) => ({            
            ifMessagesShown: !prevState.ifMessagesShown,
            linkDescription: this.state.ifMessagesShown ? 'Hide' : 'Show',
            linkToUrl: this.state.ifMessagesShown? '/inbox' : '/inbox/messages'      
        }));
    } 

    render() {       
        return (
            <div>
                <Link to={this.state.linkToUrl} className="btn btn-primary" onClick={this.toggleMessages}>{this.state.linkDescription} all messages</Link>
                <Switch>
                    <Route exact path="/inbox/messages" component={Messages} />
                    <Route path="/inbox/messages/:id" component={MessageDetails} />
                </Switch>
            </div>
        );
    };
}

export default Inbox;