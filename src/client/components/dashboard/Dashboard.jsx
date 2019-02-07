import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { actionCreators } from "../../store/dashboard";
import Pagination from "react-js-pagination";

class Dashboard extends Component {
    constructor(){
        super();
    }
    async componentWillMount() {
        await this.props.requestDashboard();
    }
    async updateDashboard(pageNumber){
        await this.props.requestDashboard(pageNumber);
    }
    async handlePageChange(pageNumber) {
        console.log(arguments);
    }
    render() {
        return (
            <div className="dashboard">
                <div className="container-fluid head">
                    <div className="row text-center">
                        <div className="col-lg-1">Bank ID</div>
                        <div className="col-lg-1">BMS ID</div>
                        <div className="col-lg-1">BAT ID</div>
                        <div className="col-lg-1">Voltage(V)</div>
                        <div className="col-lg-1">Current(A)</div>
                        <div className="col-lg-2">Temperature(<sup>o</sup>C)</div>
                        <div className="col-lg-1">Impedance</div>
                        <div className="col-lg-2">TimeStamp</div>
                    </div>

                    <hr />
                </div>
                { renderData(this.props) }
                <div className="offset-lg-7">
                    <Pagination
                        activePage={ this.props.dashboard.number}
                        itemsCountPerPage={ this.props.dashboard.size }
                        totalItemsCount={ this.props.dashboard.totalElements }
                        pageRangeDisplayed={ 5 }
                        onChange={async (number)=> await this.props.requestDashboard(number)}
                    />
                </div>
            </div>
        );


        function renderData(props) {
            return (
                <div className="container-fluid content">
                    { props.dashboard.content.map((bank, key) => (
                        <div key={ key }>
                            <div className="row text-center">
                                <div className="col-lg-1"> <Link to={ `/${bank.bankId}` }> { bank.bankId }</Link></div>
                                <div className="col-lg-1">{ bank.bmsId }</div>
                                <div className="col-lg-1">{ bank.batId }</div>
                                <div className="col-lg-1">{ bank.bv }</div>
                                <div className="col-lg-1">{ bank.bi }</div>
                                <div className="col-lg-2">{ bank.bt }</div>
                                <div className="col-lg-1">{ bank.bz }</div>
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