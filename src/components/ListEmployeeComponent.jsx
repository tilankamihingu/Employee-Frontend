import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import './EmpList.css';

export default class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees: []
        }
    }


    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employees : res.data});
        });
    }

    render() {
        return (
            <div className="employee-full">
            <div className="employee-container">
            <div className="employee-row">
                {
                    this.state.employees.map(employee =>(
                        <div className="employee-card">
                            <img src={employee.imageUrl} alt="" />
                            <div className="card-details">
                                <h2>{employee.name}</h2>
                                <p>Email: {employee.email}</p>
                                <p>Job Title: {employee.jobTitle}</p>
                                <h3>Phone Number: {employee.phone}</h3>
                        </div>
                        </div>
                    ))
                }
            </div>
            </div>
            </div>
        )
    }
}
