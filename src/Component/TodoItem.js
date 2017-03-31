/**
 * Created by Geeks on 3/31/2017.
 */
import React, {Component} from 'react';

class TodoItem extends Component {

    render() {
        return (
            <li className="Project">
                <strong>{this.props.projects.title}</strong>
            </li>
        );
    }
}
export default TodoItem;