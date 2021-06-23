import React from "react";
import { Switch, Route } from 'react-router-dom';
import Success from '../pages/success';

import Test from "../pages/Test";
import Dashboard from "../pages/dashboard";

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component = {Test}/>
        <Route path="/Success" exact component = {Success}/>
        <Route path="/dashboard" exact component = {Dashboard}/>
    </Switch>
)
export default Routes;