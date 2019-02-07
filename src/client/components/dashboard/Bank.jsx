import React, { Component } from "react";
import { connect } from "react-redux";
import { Chart } from "chart.js"
import { Link, NavLink } from 'react-router-dom';
const bank = {
    bankId: "BANK02",
    batId: 2,
    bi: 222,
    bmsId: "BMS02",
    bt: 40,
    bv: 8.11,
    bz: 121,
    date: "2019-02-06",
    siteId: 6060,
    sysDt: "2019-02-06T06:23:30",
    time: "11:53:29",
};
var lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Volatage',
        borderColor: "red",
        backgroundColor: "red",
        fill: false,
        data: [
            8.11,
            9.11,
            8.0,
            7.0,
            11,
            12
        ],
        yAxisID: 'y-axis-1',
    }]
};
var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                bank.bt,
                100 - bank.bt
            ],
            backgroundColor: [
                "green",
                "blue",
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Current Temperature',
            "Max Temperature"
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Temperature'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};
export class Bank extends Component {
    componentDidMount() {
        var ctx = document.getElementById('chart-area').getContext('2d');
        window.myDoughnut = new Chart(ctx, config);
        var canvasCtx = document.getElementById('canvas').getContext('2d');
        window.myLine = Chart.Line(canvasCtx, {
            data: lineChartData,
            options: {
                responsive: true,
                hoverMode: 'index',
                stacked: false,
                title: {
                    display: true,
                    text: 'Voltage'
                },
                scales: {
                    yAxes: [{
                        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                        display: true,
                        position: 'left',
                        id: 'y-axis-1',
                    }],
                }
            }
        });
    }
    render() {
        return (
            <div className="bankChart container-fluid">
            <div>
                <NavLink to="/">Dashboard</NavLink>&nbsp;> &nbsp;
                <NavLink to="/">BANK 02</NavLink>
                
            </div>
                <div id="canvas-holder" className="tempChart">
                    <canvas id="chart-area"></canvas>
                </div>
                <div className="graphChart">
                    <canvas id="canvas"></canvas>
                </div>
            </div>
        );
    }
}

export default connect()(Bank);