import React from 'react';
import Header from './header';
import BinsList from './bins/bins_list';
//import Accounts from './accounts';
const App = (props) => {
    return (
        <div className="">
            <Header />
            {props.children}
        </div>
    );
}
export default App;