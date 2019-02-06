import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/Login';
import Bank from './components/dashboard/Bank';

export default () => (
  <Layout>
    <Route exact path='/' component={Dashboard} />
    <Route path='/:id' component={Bank}/>
    <Route path="/login" component={Login} />
  </Layout>
);