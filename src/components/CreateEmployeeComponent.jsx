import React, { Component } from 'react';
import "./AddEmployee.css";

class CreateEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            jobTitle: '',
            phone: '',
            imageUrl: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeJobHandler = this.changeJobHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) =>{
        e.preventDefault();
        let employee = {name: this.state.name, email: this.state.email, jobTitle: this.state.jobTitle, phone: this.state.phone, imageUrl: this.state.imageUrl};
        console.log('employee =' + JSON.stringify(employee));
    }

    changeNameHandler = (event) =>{
        this.setState({name: event.target.value})
    }

    changeEmailHandler = (event) =>{
        this.setState({email: event.target.value})
    }

    changeJobHandler = (event) =>{
        this.setState({jobTitle: event.target.value})
    }

    changePhoneHandler = (event) =>{
        this.setState({phone: event.target.value})
    }

    changeImageHandler = (event) =>{
        this.setState({imageUrl: event.target.value})
    }

    render() {
        return (
             <div className="contact-content">
            <div className="contact">
                <div className="left-side">
                    <h1 className="title-register">Contact Us</h1>
                </div>
                <div className="right-side">
                    <form>
                        <h1>Name</h1>
                        <input type="text" required placeholder="name" value={this.state.name} onChange={this.changeNameHandler} />
                        <h1>Email</h1>
                        <input type="text" required placeholder="email" value={this.state.email} onChange={this.changeEmailHandler} />
                        <h1>Job Title</h1>
                        <input type="text" required placeholder="job title" value={this.state.jobTitle} onChange={this.changeJobHandler} />
                        <h1>Phone</h1>
                        <input type="text" required placeholder="phone number" value={this.state.phone} onChange={this.changePhoneHandler} />
                        <h1>Image Url</h1>
                        <input type="text" required placeholder="image url" value={this.state.imageUrl} onChange={this.changeImageHandler} />
                        <button onClick={this.saveEmployee} className="send">Send</button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default CreateEmployeeComponent;