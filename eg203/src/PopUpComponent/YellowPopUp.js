const YellowPopUp = ({setYellowOpen}) => {
    const closePopUp = {
        position: 'absolute',
        right: 0,
        top: 0,
        transform: 'translate(-50%, 50%)',
        margin: '10px',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        fontSize: '2rem'
    }
    const handleClosePopup = () => {
        setYellowOpen(false)
    }
    return (
        <div className="popup-container">  
            <div className="popup-content" id="popup-content">
                <h1>Hello</h1>
                <button style={closePopUp} onClick={handleClosePopup}>X</button>
            </div>
        </div>
    )
}

export default YellowPopUp