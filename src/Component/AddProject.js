import  React, {Component} from 'react';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        category: ['web design', 'web development', 'mobile development']
    }

    handleSubmit(e) {
        console.log(this.refs.title.value);

        if (this.refs.title.value === '') {
            alert("Field not blank !")
        } else {
            this.setState({
                newProject: {
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, function () {
                console.log(this.state);
                this.props.addProject(this.state.newProject)

            });
        }
        e.preventDefault();
    }

    render() {
        let categoryOption = this.props.category.map(category => {
            return <option key={category} value={category}>{category}</option>
        });
        return (

            <div>
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Title</label>
                        <input type="text" ref="title"/>
                    </div>
                    <div>
                        <label>Category</label>
                        <select ref="category">
                            {categoryOption}
                        </select>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export  default AddProject;