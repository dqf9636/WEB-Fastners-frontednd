import React, { Component } from 'react';
//import styled, { css } from 'styled-components'
import './login.css'
import axios from 'axios'

const loginServer = (id, password, localStorage) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:8888/api/auth/login',
        {username : id, password : password}).then((res) => {
            resolve(res)
        }).catch((err) => {
            alert("로그인 실패 !")
            console.error(err)
        })
    })
}

class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            password : ''
        };
    }
    componentDidMount(){
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    login = () => {
        loginServer(this.state.id, this.state.password, this.localStorage).then((res) => {
            localStorage.setItem("token", res.data.token)
            this.props.history.push('/main')
        })
    }

    render(){
        return (
            <form className="login">
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="name" name="id" onChange={this.handleChange} className="form-control" placeholder="Enter name" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.handleChange} className="form-control" placeholder="Enter password" />
                </div>

                <p className="btn btn-primary btn-block" onClick={this.login}>Submit</p>
                <p className="forgot-password text-right">
                   <a href="/register">register</a>
                </p>
            </form>
        )
    }
}

export default LoginPage