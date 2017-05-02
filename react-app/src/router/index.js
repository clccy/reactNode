/**
 * Created by apple on 2017/5/1.
 */
import React,{Component} from 'react';
import {Route,Router,hashHistory,IndexRedirect} from 'react-router';

import App from '../App';
import Home from '../home/home';
import Page from '../page/index';

class Textrouter extends Component {
    render () {
        return (
            <Router history={hashHistory}>
               <Route path="/" component={App}>
                   <IndexRedirect to="/home"></IndexRedirect>
                   <Route path="/home" component={Home}></Route>
                   <Route path="/page" component={Page}></Route>
               </Route>
            </Router>
        )
    }
}

export default Textrouter













