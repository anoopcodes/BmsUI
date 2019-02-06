import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component{
    render(){
        return (
            <div className="login">
                <form action="">
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter Username" />
                        <small id="usernameHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default connect()(Login);