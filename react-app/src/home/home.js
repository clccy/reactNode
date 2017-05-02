/**
 * Created by apple on 2017/5/1.
 */
import React,{Component} from 'react';
import axios from 'axios';

// require('./home.css');
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get('/api/v1/topology/world-topo')
            .then(res => {
                const posts = res.data.data.children.map(obj => obj.data);
                this.setState({ posts });
            });
    }

    render () {
        return (
            <div>
                <h4>数据节点列表</h4>
                <ul>
                    {this.state.posts.map(post =>
                        <li >{post.code}</li>
                    )}
                </ul>
            </div>
        )
    }
}
export default Home;