import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Home'

import Register from './Register'
import Login from './Login'
import Dashboard from './Route'
import {Navbar,Nav} from 'react-bootstrap'
import './index.css'



function App (){
    return(
        <BrowserRouter>
            <div>
                <Navbar bg="dark" expand="lg" className="nav">
                <Navbar.Brand href="/" className="navB">Demo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className="nav" href="/">Home</Nav.Link>
                        {
                            localStorage.getItem('token') ? <Nav.Link href="/" onClick={()=>{
                                localStorage.clear()

                            }}>Log Out </Nav.Link>:<>
                                <Nav.Link className="nav" href="/users/register">Register here </Nav.Link>
                                <Nav.Link className="nav" href="/users/login">Login</Nav.Link>

                            </>
                        }
                       
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/users/register" component={Register} exact={true}/>

                <Route path="/users/login" component={Login}/>
                <Route path="/users/account" component={Dashboard}/>
                
            </div>
        </BrowserRouter>
    )
}
export default App