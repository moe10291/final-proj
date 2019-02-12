import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Landing from './components/Landing'
import List from './components/List.js'
import Stars from './components/Rate';
import Detail from './components/Detail';

const route=(
    <Switch>
        <Route path='/' component={Landing} exact/>
        <Route path='/list' component={List}/>
        <Route path='/detail/:id' component={Detail}/>
        <Route path='/:id' component={Stars}/>
    </Switch>
)

export default route