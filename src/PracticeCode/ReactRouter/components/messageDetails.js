import React from 'react';
import {Link} from 'react-router-dom';
import messageAPI from './messageAPI';

const messageDetail = (props) => {
    const msg = messageAPI.getByID(
        parseInt(props.match.params.id,10)
    )
    if(!msg){
        return(<div>Sorry ! No message found</div>)
    }
    return(
        <div className="card text-left">
        <div className="card-body">
            <h3 className="card-title">{msg.title}</h3>
            <h4 className="card-subtitle mb-2 text-muted">From : {msg.from}</h4>
            <p className="card-text">{msg.body}</p><br/><br/>
            <Link to={'/inbox/messages'} className="card-link btn btn-warning">Back</Link>
            </div>
        </div>
    )
};

export default messageDetail;