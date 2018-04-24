import React from 'react';
import MsgAPI from './messageAPI';
import {Link} from 'react-router-dom';
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../node_modules/bootstrap/dist/js/bootstrap.min.js';

const Messages = () => {
    return (
        <div >
            <h2>This is Inbox</h2>
            <table className="table">
                <thead>
                    <tr className="row">
                        <th className="col">ID</th>
                        <th className="col">Title</th>
                        <th className="col">From</th>
                    </tr>
                </thead>
                <tbody>                   
                        {MsgAPI.allMessages().map(p => (
                            <tr className="row" key={p.id}>
                            <td className="col">{p.id}</td>
                            <td className="col"><Link to={'/inbox/messages/'+ p.id}>{p.title}</Link></td>
                            <td className="col">{p.from}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Messages;