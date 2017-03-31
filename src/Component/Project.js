import React, {Component} from 'react';
import ProjectItem from './ProjectItem';
class Project extends Component {
    render() {
        let projectItem;
        if (this.props.projects) {
            projectItem = this.props.projects.map(project => {
                console.log(project);
                return (
                    <ProjectItem key={project.title} projects={project}/>
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

export default Project;
