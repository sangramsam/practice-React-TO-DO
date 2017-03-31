import React, {Component} from 'react';
import Project from './Component/Project'
import AddProject from  './Component/AddProject'

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        this.setState({
            projects: [
                {
                    title: "Landing page",
                    category: 'Web design'
                },
                {
                    title: "Bussiness  Webpage",
                    category: 'Web-App'
                },
                {
                    title: "Enterprises website",
                    category: 'Business website'
                }
            ]

        })
    }

    handleAddProject(project) {
        console.log(project);
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects});

    }

    render() {
        return (
            <div className="App">
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <Project name="Test Project" projects={this.state.projects}/>
            </div>
        );
    }
}

export default App;
