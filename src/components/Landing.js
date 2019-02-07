import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../Nav'
import './Landing.css'
import image from '../student-icon-transparent-8.png'

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    async login() {
        let { email, password } = this.state;
        let res = await axios.post('/auth/login', { email, password });

        this.setState({ email: '', password: '' })
        console.log(res.data)
        if (res.data.loggedIn) {
            this.props.history.push('/list');
        }
        else {
            alert('Please Enter Correct Email/Password')
        }
    }

    handleEmail(text) {
        this.setState({ email: text })
    }

    handlePassword(value) {
        this.setState({ password: value })
    }
    render() {
        console.log(this.state.email)
        console.log(this.state.password)
        return (
            <div>
                <div className='picture'>
                    <img src={image} alt='cover'/>
                </div>
                <input className='login' onChange={(e) => this.handleEmail(e.target.value)} placeholder='Email' />
                <br></br>
                               
                <input className='login' onChange={(e)=>this.handlePassword(e.target.value)} 
                placeholder='Password'
                type='password'
                value={this.state.password}
                />

                <br></br>
                <br></br>
                <button className='login-button' onClick={()=> this.login()}>Login</button>
                <Nav/>
            </div>
        )
    }
}

export default Landing;