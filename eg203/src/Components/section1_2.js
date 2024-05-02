import { Link } from 'react-router-dom';
import './section1.css';
import { useState } from 'react';

const Section1_2 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const slides = [{
        title: 'slide1',
        content: 'ให้เสามีน้ำหนัก w ที่ถูกหย่อนช้าๆ จากแนวดิ่ง θ = 90  โดยให้ cable AB ถ้า M  ที่จุด C มีค่า 0.3 ให้ทดลองปรับค่า θ หา θ ที่จะสั่น '
    }]

    const handleBackSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1)
    }
    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }

    const handleEndSlide = () => {
        setIsOpen(true);
        console.log("end slide");
    };
    const handleClosePopup = () => {
        setIsOpen(false);
    };

    return (
        <div className="container">
            <img className="logo" src="./Images/LogoApp.png" alt="Logo" />
            <div className="title">ส่วนที่ 1 ข้อที่ 2</div>
            {isOpen && (
                <div className="popup-container">
                    <div className="popup-content">
                        <p>เรียนส่วนที่ 1 จบแล้ว</p>
                        <span id='first-span'>
                            <img onClick={handleClosePopup} src='./Images/Section1/Home.png' id='close'></img>
                            <p>Home</p>
                        </span>
                        <span id='second-span'>
                            <img src='./Images/Section1/Next.png' id='next-section'></img>
                            <p>Next section</p>
                        </span>
                    </div>
                </div>
            )}
            <div className="problem">
                Image Input
                <img className='teacher' src="./Images/teacher.png"></img>
            </div>
            <div className="explanation">
                <p>{slides[currentSlide].content}</p>
                {currentSlide !== 0 && (
                    <div className="btn" id="back-btn">
                        <button onClick={handleBackSlide}>
                            <img src='./Images/Arrow.png'></img>
                        </button>
                    </div>
                )}
                <div className="btn" id="next-btn">
                    <button onClick={handleNextSlide}>
                        <img src='./Images/Arrow.png'></img>
                    </button>
                </div>
            </div>
            <div className="answer">
                <div className="input" id="p-value">
                    <p>ใส่ค่า θ</p>
                    <label>θ = </label>
                    <div className='range-container'>
                        <input type='range' min="0" max="100" className='range'></input>
                    </div>
                </div>
            </div>
            <footer>
                <Link to="/section1_1" className="back-control">ย้อนกลับ</Link>
                <button className='next-control' onClick={handleEndSlide}>ข้อต่อไป</button>
            </footer>
        </div>
    );
};

export default Section1_2;
