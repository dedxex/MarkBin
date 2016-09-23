import React,{ Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bin';
import BinsViewer from './bins_viewer';
import BinsShare from './bins_share';
import BinEditor from './bin_editor';
class BinsMain extends Component {
    
    render() {
        // console.log("This is the bindId "+this.props.params.binId);
        // console.log("this is the bin "+this.props.bin);
        if(!this.props.bin) {
            return <div>Loading</div>
        }
        return (
            <div className="">
                <BinEditor bin={this.props.bin} />
                <BinsViewer bin={this.props.bin} />
                <BinsShare bin={this.props.bin} />
            </div>
        );
    }
}
export default createContainer((props) => {
    const { binId } = props.params;
    Meteor.subscribe('binPublication');
    return { bin : Bins.findOne(binId) };
},BinsMain);