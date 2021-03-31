import React from 'react';
import {Redirect} from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';



class googleLogin extends React.Component{
    constructor(){
        super()
        this.state={
            redirect:false

        }
    }
  responseGoogle = (response) => {

      if(response.tokenId){
            localStorage.setItem("google-response", JSON.stringify(response)) //storing user data in localstorage and converted from object to string
            this.setState({redirect:true})
        }
      }
    
render(){
    if(this.state.redirect){
        return <Redirect to="/users/account"/> //Redirecting to account after successfully login
    }
    return( 
        
        <div>
            <GoogleLogin
                clientId="1059664908445-5jvcukujdrv1tj8qc6gamdajh25v32sk.apps.googleusercontent.com"//This is client ID of your system
                buttonText="Login"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

        </div>
    )

}
}
export default googleLogin




