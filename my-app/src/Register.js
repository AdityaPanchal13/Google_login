import React from 'react'
import axios from 'axios'
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import {Redirect } from 'react-router-dom'


class Register extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            email:'',
            password:'',
            confirmPassword:'',
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
        const pass=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
        const form = e.currentTarget;
            if (form.checkValidity() === false) {
            e.preventDefault();

            e.stopPropagation();
            }
            else if(!pass.test(this.state.password)){
                alert("Password should contain one  uppercase, lowercase, number and symbol")
            }
            else{
                e.preventDefault();
                const formData={ 
                    name:this.state.name,
                    email:this.state.email,
                    password:this.state.password,
                    
                }
                console.log(formData)
                axios.post('http://localhost:5000/users/register',formData)
                .then((response)=>{
                  console.log(response.status)
                        this.setState({
                            name:'',
                            email:'',
                            password:'',
                            confirmPassword:'',
                            redirect:true
                        
                        })
                    
                })
                .catch((error)=>{
                    console.log('reject',error)
                })
             

            }
            
        this.setState({validated:true});
        if(this.state.password!==this.state.confirmPassword){
            alert("password does not match")
        
        }else{
               
        }
 
        
     
    }
    render(){
        if(this.state.redirect){
            return <Redirect to="/users/login"/>
        }
        return(
            <Container>
                <Row>
                    <Col xs={12} md={3}></Col>
                    <Col xs={12} md={6} className="col-register">
                
                        <h1>Registration Here</h1>
                        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    required
                                    placeholder="Enter name" 
                                    name="name"
                                    vlaue={this.state.name}
                                    onChange={this.handleChange}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <br/>
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
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label> Confirm Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                required
                                name="confirmPassword"
                                vlaue={this.state.confirmPassword}
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
                    </Col>
                    <Col xs={12} md={3}></Col>
                </Row>
                
            </Container>
        )
    }
}
export default Register