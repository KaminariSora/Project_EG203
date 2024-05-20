import { useState } from 'react'
import './YellowPopUp.css'
import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

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

    const handleBackSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1)
    }

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % DataList.length)
    }

    return (
        <div className="popup-container" id="popup-container">
            <div id="yellow-container">
                {DataList && DataList.length > 0 ? (
                    <>
                        <div id='content'>
                            <p  dangerouslySetInnerHTML={{ __html: katex.renderToString(DataList[currentSlide].header) }} className="katex"></p>
                        </div>
                        {DataList[currentSlide].src && <img src={DataList[currentSlide].src} alt="Popup Image" className='yellow-img' />}
                        <div id='content'>
                            {DataList[currentSlide].formular.map((item, index) => ( //แก้ข้อความตรงนี้
                                <p key={index} dangerouslySetInnerHTML={{ __html: katex.renderToString(item) }} className="katex"></p>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>No content available</p>
                )}
                <button style={closePopUp} onClick={handleClosePopup}>X</button>
                {currentSlide !== 0 && (
                    <div className="btn" id="back-btn">
                        <button onClick={handleBackSlide}>
                            <img src='./Images/purple_Arrow.png'></img>
                        </button>
                    </div>
                )}
                <div className="btn" id="next-btn">
                    <button onClick={handleNextSlide}>
                        <img src='./Images/purple_Arrow.png'></img>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default YellowPopUp
