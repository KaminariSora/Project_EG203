import Text from "./example_content"
import './popup-content.css'
import { useState } from "react"

const Solution = ({setSolutionOpen, textIndex, setYellowOpen}) => {
    const styleBox =  {
        backgroundColor:"rgba(255, 9 ,9, .66)",
    }
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
        setSolutionOpen(false)
        setYellowOpen(true)
        console.log("set")
    }

    const content = Text[textIndex]?.content;
    const header = Text[textIndex]?.header;
    return (
        <div className="popup-container" style={styleBox}>  
            <div className="popup-content" id="popup-content">
                <div>{header}</div>
                <div>{content}</div>
                <button style={closePopUp} onClick={handleClosePopup}>X</button>
            </div>
        </div>
    )
}

export default Solution