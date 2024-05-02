import { useState } from 'react'
import './section4.css'

const Section4_1 = () => {
    const imageStyle = {
        height: '100%'
    }

    const handleW_value = (event) => {
        const W = parseInt(event.target.value)
        setW_value(W)
    }
    const handleM_value = (event) => {
        const M = parseInt(event.target.value)
        setM_value(M)
    }
    const handleAngle = (event) => {
        const A = parseInt(event.target.value)
        setA_value(A)
    }

    const [w_value, setW_value] = useState(0)
    const [m_value, setM_value] = useState(0)
    const [a_value, setA_value] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const slides = [{
        title: 'slide1',
        image: './Images/Section4/1.jpg',
        content: 'เกลียว คือระนาบที่มีความลาดเอียงหรือลิ่มที่ พันรอบแท่งกระบอก โดยถ้า r คือรัศมีเฉรี่ยของเกลียวI คือระยะแนวแกนของแท่งกระบอก เราจะหามุมของเกลียว ได้จาก',
        formular: ['θ = tan<sup>-1</sup>M<sub>s</sub>&frac12;&pi;r'],
        formular_list: [],
        answer_box: (<div></div>)
    },
    {
        title: 'slide2',
        image: './Images/Section4/2.jpg',
        content: 'เมื่อเราคลายสลักเกลียว และจะมีรูปร่างเป็นBlock ที่วางบนระนาบเอียง โดยBlock จะถูกกระทำโดยแรง\n1.แรง W ; เป็นแรงในแนวดิ่ง\n2.แรง S ;  ที่เกิดจาก Moment โดยที่ M = Sr\n3.แรงลัพธ์ R ; เพื่อให้เกิดสมดุลโดยประกอบมาจากแรง N และแรง F',
        formular: [''],
        formular_list: [],
        answer_box: (<div></div>)
    },
    {
        title: 'slide3',
        image: './Images/Section4/3.jpg',
        content: 'การวิเคราห์แรงเสียดทาน บนเกลียว แบ่งออกได้ 4 กรณี ลองทำให้เกิดการเคลื่ยนที่ให้ครบดูสิ',
        formular: [''],
        formular_list: '<p>เกลียวเคลื่อนที่ขึ้น</p> <p>เกลียวเคลื่อนที่ลง \nθ > ϕ</p> <p>เกลียวเคลื่อนที่ลง\nθ < ϕ</p> <p>ล็อคตัวเองได้</p>',
        answer_box: (
            <div className="answer">
                <div className="input" id="p-value">
                    <p>ใส่ค่า M</p>
                    <label>{m_value}</label>
                    <div className='range-container'>
                        <input type='range' min="0" max="10" onChange={handleM_value} className='range'></input>
                    </div>
                </div>
    
                <div className="input" id="w-value">
                    <p>ใส่ค่า μ</p>
                    {/* <label>W = </label> */}
                    <input type='number' placeholder="μ = " onChange={handleW_value} className='number'></input>
                </div>
    
                <div className="input" id="m-value">
                    <p>ใส่ค่า θ</p>
                    {/* <label>μ = </label> */}
                    <input type='number' placeholder="θ = " onChange={handleAngle} className='number'></input>
                </div>
            </div>
        )
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
            <img className="logo" src="./Images/LogoApp.png"></img>
            <div className="title">ส่วนที่ 4 ข้อที่ 1</div>
            {isOpen && (
                <div className="popup-container">
                    <div className="popup-content">
                        <p>เรียนส่วนที่ 4 จบแล้ว</p>
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
                <img src={slides[currentSlide].image} style={imageStyle} id='section4_img'></img>
            </div>
            <div className="explanation">
                <div className='slide-1'>
                    <p style={{ whiteSpace: 'pre-line' }}>{slides[currentSlide].content}</p>
                    <div className='formular'>
                        {slides[currentSlide].formular.map((item, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>
                        ))}
                    </div>
                    <div className='formular formular-list'>
                        {[slides[currentSlide].formular_list].map((item, index) => (
                            <p key={index} className='mini-box' style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: item }}></p>
                        ))}
                    </div>
                </div>
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
            <div className={'answer-box' + (currentSlide !== 3 ? ' hidden' : '')}>
                {slides[currentSlide].answer_box}
            </div>
            <footer>
                <button className="back-control">ย้อนกลับ</button>
                <button className='next-control' onClick={handleEndSlide}>ข้อต่อไป</button>
            </footer>
        </div>
    )
}

export default Section4_1