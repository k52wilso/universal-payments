import React, { Component } from 'react';
import SideBar from "./components/sidebar";
import { getWallet } from "./actions/WalletActions";
import { getDashboard } from "./actions/dashboardActions";
import { connect } from 'react-redux'
import MainContainer from "./containers/MainContainer";
import './App.scss';

const sideBar = [{
      id: "010",
      size: "sm",
      name: "Dashboard",
      class: "fas fa-signal"
    },{
      id: "011",
      size: "sm",
      name: "Wallet",
      class: "fas fa-wallet",
    },{
      id: "012",
      size: "sm",
      name: "Notifications/Alerts",
      class: "fas fa-bell"
    },{
      id: "013",
      size: "sm",
      name: "Transcations/Receipts",
      class: "fas fa-bookmark"
    },{
      id: "014",
      size: "sm",
      name: "Settings",
      class: "fas fa-sliders-h"
    }]
const mapStateToProps = (state, props) => {
  return {
      wallet: state.wallet,
      notification: state.notification,
      dashboard: state.dashboard
  }
};
const mapDispatchToProps = dispatch => ({
  openWallet: () => getWallet()(dispatch),
  getDashboard: () => getWallet()(dispatch)
});



class AppContainer extends Component {

  buildItems() {
    const { openWallet, wallet, dashboard, getDashboard} = this.props;
    return sideBar.map((item) => {
        switch(item.id) {
          case "010": 
            return {...item,callback: (!dashboard.charts && !dashboard.savingsSummary) ? getDashboard: null};
          case "011": 
            return {...item,callback: openWallet, walletOpen: wallet.wallet.walletOpen}
          default: 
            return item;
        }
    });
  }
  render() {
    return (
      <div className="App">
        <SideBar items={this.buildItems()}/>
        <MainContainer />
      </div>
    );
  }
}
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
export default App;
