/**
 * Created by Geeks on 3/31/2017.
 */
import React, {Component} from 'react';
import TodoItem from './TodoItem';
class Todo extends Component {
    deleteProject(id) {
        this.props.onDelete(id);
    }

    render() {
        let projectItem;
        if (this.props.todos) {
            projectItem = this.props.todos.map(project => {
                //console.log(project);
                return (
                    <TodoItem  key={project.title} projects={project}/>
                );

            });
        }
        //console.log(this.props);
        return (
            <div className="App">
                <h2>My Project </h2>
                {projectItem}
            </div>
        );
    }

}
//add validation

export default Todo;
