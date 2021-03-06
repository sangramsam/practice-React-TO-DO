import React, {Component} from 'react';
import ProjectItem from './ProjectItem';
class Project extends Component {
    deleteProject(id) {
        this.props.onDelete(id);
    }

    render() {
        let projectItem;
        if (this.props.projects) {
            projectItem = this.props.projects.map(project => {
                //console.log(project);
                return (
                    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} projects={project}/>
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
Project.proTypes={
    projects:React.PropTypes.array,
    onDelete:React.PropTypes.func
}

export default Project;
