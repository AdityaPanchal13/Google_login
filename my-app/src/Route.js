import React from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component{
    constructor(){
        super()
        this.state={
            users:{},
            redirect:false
        }
    }
    componentDidMount(){
        if(localStorage.getItem('token') === null && localStorage.getItem('google-response') === null){ // Getting user details from localstorage
            this.setState({ redirect: true })
        }
        if(!!(localStorage.getItem('google-response'))) {
            const response = JSON.parse(localStorage.getItem('google-response')); //converted from string to object
            const user_obj = {
                name: response.profileObj.givenName,
                email: response.profileObj.email
            }
            this.setState({ users: user_obj })
        }
        if(localStorage.getItem('token')){
            axios.get('http://localhost:5000/users/account',{
                headers:{'Authorization':localStorage.getItem('token')}
            })
            .then((response)=>{
                console.log(response.data)
                const users=response.data
                this.setState({users})
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }

    render(){
        const user=this.state.users
        console.log(this.state.redirect, user, "dashboard")
        if(this.state.redirect){
            return <Redirect to="/users/login"/>
        }

        
        return(
            
            <div>
                <h1> Name--{user.name}</h1>
                <h3>Email--{user.email}</h3>
                <Button onClick={() => {
                    localStorage.clear("token")
                    this.setState({redirect: true})
                }}>Logout</Button>
            </div>
        )
    }
}
export default Dashboard