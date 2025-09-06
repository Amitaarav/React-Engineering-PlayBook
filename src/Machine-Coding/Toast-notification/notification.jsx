

function Notification(){
    return(
        <div>
            <button></button>
            <div>
                <div className="toast-info">
                    <img />
                    <div className="toast-content">
                        <span className="toast-title">Title</span>
                        <span className="toast-description">Description</span>
                    </div>
                    <div className="toast-cta"></div>
                </div>
            </div>
            <div className="progress-bar"></div>
        </div>
    )
}

export default Notification