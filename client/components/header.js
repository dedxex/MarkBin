import React,{ Component } from 'react';
import Accounts from './accounts';
import {Link,browserHistory} from 'react-router';
class Header extends Component {
    onBinClick(event) {
        event.preventDefault();
        Meteor.call('bins.insert',(error,binId) => {
            browserHistory.push(`/bins/${binId}`);
        });
    }
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="navbar-header">
                  <Link to="/" className="navbar-brand">markBin</Link>
                </div>
                <div className="navbar-header">
                    <a className="navbar-brand" onClick={this.onBinClick.bind(this)} href="#">New Bin</a>
                </div>
                <div className="navbar-header pull-right">
                        <div className="navbar-brand">
                            <Accounts></Accounts>
                        </div>
                </div>
            </nav>
        );
    }
}

export default Header;