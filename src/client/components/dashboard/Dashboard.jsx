import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/dashboard";

class Dashboard extends Component {
    async componentWillMount() {
        await this.props.requestDashboard();
    }

    render() {
        return (
            <div className="dashboard">
                <div className="ribbon">
                    <div className="row">
                        <div className="offset-lg-10 col-lg-2">
                            <div>Total Banks:</div>
                            <div> { this.props.dashboard.totalElements }</div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid head">
                    <div className="row text-center">
                        <div className="col-lg-1">Bank ID</div>
                        <div className="col-lg-1">BMS ID</div>
                        <div className="col-lg-1">BAT ID</div>
                        <div className="col-lg-1">Voltage(V)</div>
                        <div className="col-lg-2">Temperature(<sup>o</sup>C)</div>
                        <div className="col-lg-1">Impedance</div>
                        <div className="col-lg-2">TimeStamp</div>
                    </div>

                    <hr />
                </div>
                { renderData(this.props) }
            </div>
        );


        function renderData(props) {
            return (
                <div className="container-fluid content">
                    { props.dashboard.content.map((bank, key) => (
                        <div  key={ key }>
                            <div className="row text-center">
                                <div className="col-lg-1"> <Link to={`/${bank.bankId}`}> { bank.bankId }</Link></div>
                                <div className="col-lg-1">{ bank.bmsId }</div>
                                <div className="col-lg-1">{ bank.batId }</div>
                                <div className="col-lg-1">{ bank.bv }</div>
                                <div className="col-lg-2">{ bank.bt }</div>
                                <div className="col-lg-1">{ bank.bi }</div>
                                <div className="col-lg-2">{ bank.date } { bank.time }</div>
                            </div>

                            <hr />
                        </div>
                    )) }
                </div>
            );
        }
    }
}
export default connect(
    state => ({ dashboard: state.dashboard }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Dashboard);