import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router'


class App extends Component {
    render () {
        return (
            <div>
              <nav className="navbar navbar-default">
                <div className="container">
                  <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                      <li><IndexLink to="" >App</IndexLink></li>
                      <li><Link to="home" >HOME</Link></li>
                      <li><Link to="page" >PAGE</Link></li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="container-pro">
                  {this.props.children}
              </div>
            </div>
        )
    }
}

export default App;