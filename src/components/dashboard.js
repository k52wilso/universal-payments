import React, { Component } from "react";
import Carousel from "../components/carousel";
import Offers from "../components/offers";
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


let id = 0;
function createData(name, amount, date) {
  id += 1;
  return { id, name, amount, date};
}

const rows = [
  createData("Walmart", 198.99, Date.now()),
  createData("Costco", 300, Date.now()),
  createData("Moxies", 29.00, Date.now())
];

const carouselItems = [{
    id: "010",
    topic: "Income", 
    value: "CAN 32,500.00",
    trend: "bad"
},{
    id: "011",
    topic: "Spending", 
    value: "CAN 10,120.00",
    trend: "bad"
}];

const offers = [{
    header: "50%",
    title: "Savings from Costco",
    link: "Read More...",
    linkCallback: () => console.log("Clicking offer..."),
    imageURL: "/assets/images/costco.png",
    background: "#0984e3"
}, {
    header: "23%",
    title: "Savings from Walmart",
    link: "Read More...",
    linkCallback: () => console.log("Clicking offer..."),
    imageURL: "/assets/images/walmart.png",
    background: "#00b894"
}];

class Dashboard extends Component {
    render() {
        const { dashboard } = this.props;
        const { savingsSummary, charts } = dashboard;
        return (charts.length > 0 && savingsSummary) && (
            <div className="dashboard">
                <div className="savings-summary">
                    <div className="title-div">
                    <h4>Savings Total</h4>
                    <p className="savings-total">{savingsSummary.total}<span><i className="fas fa-caret-up"></i>{savingsSummary.trend}</span></p>
                    </div>
                    <Carousel items={carouselItems} />
                </div>
                <Offers offers={offers} />
                <div className="charts-recent">
                    <div className="recent">
                        <h4>Recent Transcations</h4>
                        <Table>
                            <TableHead className="table-head">
                            <TableRow>
                                <TableCell>Transcation</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Receipt</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map(row => {
                                return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                    {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.amount}</TableCell>
                                    <TableCell align="right">{new Date(row.date).toLocaleString()}</TableCell>
                                    <TableCell align="right">
                                    <Link to={{ pathname: "/transcations/receipt", search: `?id=${row.id}` }}>
                                        <p className="view">View Receipt</p>
                                    </Link>
                                    </TableCell>
                                </TableRow>
                                );
                            })}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;