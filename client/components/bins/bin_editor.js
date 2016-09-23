import React,{ Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';
class BinEditor extends Component{
    onEditorChange(content) {
        // console.log("change");
        Meteor.call('bins.update',this.props.bin,content);
    }
    render() {
        return (
                <div className="col-xs-8">
                    <h5>Input</h5>
                    <CodeMirror options={{ mode : 'markdown',lineNumbers : true }}
                    value = {this.props.bin.content}
                    onChange={this.onEditorChange.bind(this)} />
                    
                </div>
           
        );
    }
}
export default BinEditor;