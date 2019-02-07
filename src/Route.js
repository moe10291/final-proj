import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Landing from './components/Landing'
import List from './components/List.js'
import Stars from './components/Rate';

const route=(
    <Switch>
        <Route path='/' component={Landing} exact/>
        <Route path='/list' component={List} exact/>
        <Route path='/:id' component={Stars} exact/>
    </Switch>
)

export default route