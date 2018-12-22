import React, { Component } from "react";
import Carousel from "../components/carousel";
import Offers from "../components/offers";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import Table from '@material-ui/core/Table';

class Dashboard extends Component {
    render() {
        const { dashboard } = this.props;
        const { savingsSummary, charts } = dashboard;
        return (
            <div className="dashboard">
                <div className="savings-summary">
                    <div className="title-div">
                    <h4>Savings Total</h4>
                    <p className="savings-total">{savingsSummary.total}<span><i className="fas fa-caret-up"></i>{savingsSummary.trend}</span></p>
                    </div>
                    <Carousel />
                </div>
                <Offers />
                <div className="charts-recent">
                {charts[0] && charts[0].data ? <div className="chart">
                        <h4>Money History</h4>
                        <div className="inner-chart">
                            <BarChart width={400} height={400} data={charts[0].data} barSize={3} barCategoryGap={2}>
                                <CartesianGrid strokeDasharray="2 2"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend />
                                <Bar dataKey="spending" fill="#4b7bec" />
                                <Bar dataKey="savings" fill="#82ca9d" />
                            </BarChart> 
                        </div>
                    </div> : null}
                    <div className="recent">
                        <h4>Recent Transcations</h4>
                        // Add Data Table here
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;