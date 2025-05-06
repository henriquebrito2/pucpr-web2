import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';
import Principal from '../pages/Principal';

const AppRoutes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/signup" exact component={Cadastro} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Principal} />
            </Switch>
        </Router>
    );
};

export default AppRoutes;