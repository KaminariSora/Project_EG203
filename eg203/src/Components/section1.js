import './section1.css'
import { useState, useEffect } from 'react'

const Section1 = () => {
    const [p_value, setP_value] = useState(0)
    const [w_value, setW_value] = useState(0)
    const [m_value, setM_value] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(0)
    const slides = [{
        title: 'Slide 1',
        content:
            'ข้อนี้เป็น Lab ที่ให้ Input ค่า P,w,M(บอกว่าMแทนค่าอะไร),เมื่อสังเกตการเคลื่อนที่แล้วอธิบาย ในสภาะวะสมดุลวัตถุจะอยู่กับที่โดยถ้า x=a/2 หรือ N กระทำที่ มุมขวา วัตถุจะอยู่ในสภาวะกำลังล้มไปข้างหน้า และ x หาได้จาก',
        formular: ['W = Ph', 'X = Ph/W', 'P = F'],
        note:
            'ในการคิดถ้าวัตถุอยู่ในสมดุล และมีแรงเสียดทานระบบต้องสอดคล้องกับ สมการสมดุล และแรงเสียดทานด้วย'
    },
    {
        title: 'Slide 2',
        content:
            'ถ้าเพิ่ม P ขึ้นเรื่อยๆ จนค่า F มากสุด(F ) วัตถุจะกำลังเคลื่อนที่ โดย F  = MN(ถ้าเพิ่ม P ถึง F  จะเกิด R  ) และเมื่ออยู่ใน สภาวะ กำลังเคลื่อนที่ แรง N และ F  จะทำให้เกิด R  โดยหามุมของ R  ได้จาก',
        formular: ['θ = tan<sup>-1</sup>M'],
        note:
            ''
    }]

    useEffect(() => {
        console.log("P_value : ", p_value);
        console.log("W_value : ", w_value);
        console.log("M_value : ", m_value);
    }, [p_value, w_value, m_value]);

    const handleP_value = (event) => {
        setP_value(event.target.value)
    }
    const handleW_value = (event) => {
        setW_value(event.target.value)
    }
    const handleM_value = (event) => {
        setM_value(event.target.value)
    }

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }
    const handleBackSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1)
    }

    return (
        <div className="container">
            <img className="logo" src="./Images/LogoApp.png"></img>
            <div className="title">ส่วนที่ 1 ข้อที่ 1</div>
            <div className="problem">
                <p>รูปแบบวัตถุอยู่ในสมดุล</p>
                <img src="./Images/Section1_1.png"></img>
            </div>
            <div className="explanation">
                <div className='slide-1'>
                    <p>{slides[currentSlide].content}</p>
                    <div className='formular'>
                        {slides[currentSlide].formular.map((item, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>
                        ))}
                    </div>
                    <p style={{ color: 'red' }}>{slides[currentSlide].note}</p>
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
            <div className="answer">
                <div className="input" id="p-value">
                    <p>ใส่ค่า P</p>
                    <label>P = </label>
                    <input type='number' placeholder="####" onChange={handleP_value}></input>
                </div>

                <div className="input" id="w-value">
                    <p>ใส่ค่า W</p>
                    <label>W = </label>
                    <input type='number' placeholder="####" onChange={handleW_value}></input>
                </div>

                <div className="input" id="m-value">
                    <p>ใส่ค่า M</p>
                    <label>M = </label>
                    <input type='number' placeholder="####" onChange={handleM_value}></input>
                </div>
            </div>
            <footer>
                <button className="back-control">ย้อนกลับ</button>
                <button className="next-control">ข้อต่อไป</button>
            </footer>
        </div>
    )
}

export default Section1