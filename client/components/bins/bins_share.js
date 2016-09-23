import React,{ Component } from 'react';
class BinsShare extends Component {
    onShareClick() {
        const email = this.refs.email.value;
    }
    render() {
        return (
            <footer className="bins-share">
                <div className="input-group">
                    <input refs="email" className="form-control" />
                    <div className="input-group-btn">
                        <button 
                            onClick={onShareClick.bind(this)}
                            className="btn btn-default">
                            ShareBin
                        </button>
                    </div>
                </div>
            </footer>
        );
    }
}
export default BinsShare;