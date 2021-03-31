import React from 'react'
import axios from 'axios'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import {Redirect } from 'react-router-dom'
import Googlelogin from './googleLogin'


class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            validated:false,
            redirect:false
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        
        const form = e.currentTarget;
            if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            }
        else{
            e.preventDefault();
            const formData={ 
                email:this.state.email,
                password:this.state.password
            }
            console.log(formData)
            axios.post('http://localhost:5000/users/login',formData)
            .then((response)=>{
                if(response.data.errors){
                    alert(response.data.errors)
                }else{
                    alert(`you are sucessfully logged in  ${this.state.email}` )
                    localStorage.setItem("token", response.data.token)
                    this.setState({
                        email:'',
                        password:'',
                        redirect:true
                    
                    })

                }
                    
                
            })
            .catch((error)=>{
                console.log('reject',error)
            })
            
        }
        this.setState({validated:true});
 
        
     
    }
    render(){
        if(this.state.redirect){
            return <Redirect to="/users/account"/>
        }
        
        return(
            <Container>
                <Row>
                    <Col xs={12} md={3}></Col>
                    <Col xs={12} md={6} className="col-register">
                
                        <h1>Login</h1>
                        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                type="email" 
                                required
                                name="email"
                                vlaue={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Enter email" />
                                <Form.Control.Feedback type="invalid">Enter proper email</Form.Control.Feedback>
                        </Form.Group>
                            <br/>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                required
                                name="password"
                                vlaue={this.state.password}
                                onChange={this.handleChange}
                                placeholder="Enter password" />
                                <Form.Control.Feedback type="invalid">Enter Password</Form.Control.Feedback>
                        </Form.Group>
                            <br/>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <br />
                        </Form>
                        <Googlelogin/>
                    </Col>
                    <Col xs={12} md={3}></Col>
                    
                </Row>
                
            </Container>
        )
    }
}
export default Login