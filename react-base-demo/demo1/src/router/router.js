import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Counter from '../components/counter/counter';
import Game from '../components/game/game';
import Todos from '../components/todos/todos'

const BasicRouter = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/count' component={Counter} />
            <Route exact path='/' component={Game} />
            <Route exact path='/todo' component={Todos} />
        </Switch>
    </HashRouter>
);
export default BasicRouter;