import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from '../Auth/Auth';
import Post from '../Post/Post';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/post' component={Post} />      
            <Route exact path='/auth' component={Auth} />           
        </Switch>
    </main>
)

export default Main;