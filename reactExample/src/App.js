import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router'
// import './App.css'

// class Home extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             posts: []
//         };
//     }
//
//     componentDidMount() {
//         axios.get('/api/v1/topology/world-topo')
//             .then(res => {
//                 const posts = res.data.data.children.map(obj => obj.data);
//                 this.setState({ posts });
//             });
//     }
//
//     render () {
//         return (
//             <div>
//               <h3>数据节点列表</h3>
//               <ul>
//                   {this.state.posts.map(post =>
//                       <li >{post.code}</li>
//                   )}
//               </ul>
//             </div>
//         )
//     }
// }


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