import { useState } from 'react'
import './YellowPopUp.css'

const YellowPopUp = ({ setYellowOpen, DataList }) => {
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

    const [currentSlide, setCurrentSlide] = useState(0)

    const handleClosePopup = () => {
        setYellowOpen(false)
    }

    return (
        <div className="popup-container" id="popup-container">
            <div id="yellow-container">
                {DataList && DataList.length > 0 ? (
                    <>
                        <div id='content'>
                            {DataList[currentSlide].header}
                        </div>
                        <img src={DataList[currentSlide].src} alt="Popup Image" />
                        <div id='content'>
                            {DataList[currentSlide].formular.map((item, index) => ( //แก้ข้อความตรงนี้
                                <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>No content available</p>
                )}
                <button style={closePopUp} onClick={handleClosePopup}>X</button>
            </div>
        </div>
    )
}

export default YellowPopUp
