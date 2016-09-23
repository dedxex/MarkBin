import React,{ Component } from 'react';
class BinsShare extends Component {
    
    render() {
        const onShareClick = () => {
            console.log("shared");
        };
        return (
            <footer className="bins-share">
                <div className="input-group">
                    <input  className="form-control" />
                    <div className="input-group-btn">
                        <button 
                            onClick={onShareClick}
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