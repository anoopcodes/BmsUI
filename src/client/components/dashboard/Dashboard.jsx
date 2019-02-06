import React, { Component } from "react";
import { connect } from 'react-redux';

class Dashboard extends Component{
    render(){
        return (
            <div className="dashboard">
                <div className="ribbon">
                </div>
                <div className="container-fluid">
                    <div className="row head">
                        <div className="offset-lg-2 col-lg-2">Id</div>
                        <div className="col-lg-2">Name</div>
                        <div className="col-lg-2">Description</div>
                        <div className="col-lg-2">Actions</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(Dashboard);