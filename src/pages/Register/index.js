import React, { Component } from 'react';
//import styled, { css } from 'styled-components'
import './register.css'
import axios from 'axios'

const registerID = (id, password) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:8888/api/auth/register',
        {username : id, password : password}).then((res) => {
            alert("회원가입 성공 !")
            window.location.href = "/login"
        }).catch((err) => {
            alert("아이디가 중복 !")
            console.error(err)
        })
    })
}

class RegisterPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            password : ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    register = () => {
        registerID(this.state.id, this.state.password)
    }

    render(){
        return (
            <form className="register">
            <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="id" onChange={this.handleChange} className="form-control" placeholder="Enter Name" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Enter password" />
                </div>
                <p className="btn btn-primary btn-block" onClick={this.register}>Sign Up</p>
                <p className="forgot-password text-right">
                    Already registered <a href="/login">sign in?</a>
                </p>
           </form>
        )
    }
}

export default RegisterPage