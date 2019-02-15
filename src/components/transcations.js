import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Transcations extends Component {
    render () {
        const { transcations } = this.props;
        return transcations.data.length > 0 ? (
            <div className="transcations">
                <h2>Transcations</h2>
                <p>Current Period: Nov 30 - Dec 29</p>
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
                            {transcations.data.map(row => {
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
        ) : null;
    }
}

export default Transcations;