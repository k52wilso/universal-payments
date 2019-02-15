import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SideBarWithRouter from "./components/sidebar";
import { getWallet } from "./actions/WalletActions";
import { changeNavigation } from "./actions/navigationActions";
import { connect } from 'react-redux'
import MainContainer from "./containers/MainContainer";
import './App.scss';

const sideBar = [{
      id: "010",
      size: "sm",
      name: "Dashboard",
      path: "/dashboard",
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
      path: "/notification-alerts",
      class: "fas fa-bell"
    },{
      id: "013",
      size: "sm",
      name: "Transcations/Receipts",
      path: "/transcations",
      class: "fas fa-bookmark"
    },{
      id: "014",
      size: "sm",
      name: "Settings",
      path: "/settings",
      class: "fas fa-sliders-h"
    }]
const mapStateToProps = (state, props) => {
  return {
      wallet: state.wallet,
      notification: state.notification,
      navigation: state.navigation
  }
};
const mapDispatchToProps = dispatch => ({
  openWallet: () => getWallet()(dispatch),
  changeNavigation: (location) => changeNavigation(location)(dispatch)
});



class AppContainer extends Component {

  buildItems() {
    const { openWallet, wallet, changeNavigation} = this.props;
    return sideBar.map((item) => {
        switch(item.id) {
          case "010": 
            return {...item,callback: changeNavigation.bind(this, "/dashboard")} // when Link is clicked
          case "011": 
            return {...item,callback: openWallet, walletOpen: wallet.walletOpen}

          case "013": 
            return {...item,callback: changeNavigation.bind(this, "/transcations")}
          default: 
            return item;
        }
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <SideBarWithRouter items={this.buildItems()}/>
          <Route
              key={1}
              path={"/"}
              component={MainContainer}
            />
        </div>
      </Router>
    );
  }
}
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
export default App;
