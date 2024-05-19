import RedScreenContent from "./RedScreenContent"
import './popup-content.css'
import { useState } from "react"

const Solution = ({setSolutionOpen, Section,textIndex, setYellowOpen}) => {
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

    const MoreDetial = {
        position: 'absolute',
        bottom: '20%',
        margin: '10px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '2rem',
        padding: '5px'
    }

    const handleClosePopup = () => {
        setSolutionOpen(false)
        setYellowOpen(true)
        console.log("set")
    }

    const CloseRedPopUp = () => {
        setSolutionOpen(false)
        console.log("close red popup")
    }

    const content = RedScreenContent[Section][textIndex].content ;
    const header = RedScreenContent[Section][textIndex].header;
    console.log(RedScreenContent)
    return (
        <div className="popup-container" style={styleBox}>  
            <div className="popup-content" id="popup-content">
                <div>{header}</div>
                <div>{content}</div>
                <button style={closePopUp} onClick={CloseRedPopUp}>X</button>
                <button style={MoreDetial} onClick={handleClosePopup} >รายละเอียดเพิ่มเติม</button>
            </div>
        </div>
    )
}

export default Solution