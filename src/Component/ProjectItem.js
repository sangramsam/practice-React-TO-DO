import React, {Component} from 'react';

class ProjectItem extends Component {
    deleteProject(id) {
        console.log("delete Test");
        this.props.onDelete(id);
    }

    render() {
        return (
            <li className="Project">
                <strong>{this.props.projects.title}</strong> - <strong>{this.props.projects.category}</strong> <a
                href="#" onClick={this.deleteProject.bind(this, this.props.projects.id)}> X </a>
            </li>
        );
    }
}
ProjectItem.propTypes = {
    project: React.PropTypes.object,
    onDelete: React.PropTypes.func
}
export default ProjectItem;