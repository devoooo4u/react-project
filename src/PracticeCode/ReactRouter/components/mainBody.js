import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './homePage';
import Inbox from './inbox';
import About from './about';

const MainBody = () =>(
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/inbox' component={Inbox}/>
            <Route path='/about' component={About}/>
        </Switch>
    </main>
);

export default MainBody;