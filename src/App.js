import React, {Component} from 'react';
import Project from './Component/Project';
import uuid from 'uuid';
import $ from 'jquery';
import AddProject from  './Component/AddProject';
import Todo from './Component/Todo'

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    getTodos() {
        $.ajax({
            url:'https://jsonplaceholder.typicode.com/todos',
            dataType:'json',
            cache:false,
            success:function (data) {
                this.setState({todos:data},function () {
                    console.log(this.state);
                })

            }.bind(this),
            error:function (xhr,status,arr) {

            }
        });

    }
    getProjects(){
        this.setState({
            projects: [
                {
                    id: uuid.v4(),
                    title: "Landing page",
                    category: 'Web design'
                },
                {
                    id: uuid.v4(),
                    title: "Bussiness  Webpage",
                    category: 'Web-App'
                },
                {
                    id: uuid.v4(),
                    title: "Enterprises website",
                    category: 'Business website'
                }
            ]

        })
    }

    componentWillMount() {
        this.getProjects();
        this.getTodos();
    }

    componentDidMount() {
        this.getTodos();
    }

    handleAddProject(project) {
        console.log(project);
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects});

    }

    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects: projects});
    }

    render() {
        return (
            <div className="App">
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <Project name="Test Project" projects={this.state.projects}
                         onDelete={this.handleDeleteProject.bind(this)}/>
                <Todo todos={this.state.todos}/>
            </div>
        );
    }

}

export default App;
