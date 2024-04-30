import { useState } from 'react'
import './section4.css'

const Section4_1 = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slides = [{
        title: 'slide1',
        content: 'เกลียว คือระนาบที่มีความลาดเอียงหรือลิ่มที่ พันรอบแท่งกระบอก โดยถ้า r คือรัศมีเฉรี่ยของเกลียวI คือระยะแนวแกนของแท่งกระบอก เราจะหามุมของเกลียว ได้จาก',
        formular: ['θ = tan<sup>-1</sup>M<sub>s</sub>&frac12;&pi;r'],
        formular_list: []
    },
    {
        title: 'slide2',
        content: 'เมื่อเราคลายสลักเกลียว และจะมีรูปร่างเป็นBlock ที่วางบนระนาบเอียง โดยBlock จะถูกกระทำโดยแรง\n1.แรง W ; เป็นแรงในแนวดิ่ง\n2.แรง S ;  ที่เกิดจาก Moment โดยที่ M = Sr\n3.แรงลัพธ์ R ; เพื่อให้เกิดสมดุลโดยประกอบมาจากแรง N และแรง F',
        formular: [''],
        formular_list: []
    },
    {
        title: 'slide3',
        content: 'การวิเคราห์แรงเสียดทาน บนเกลียว แบ่งออกได้ 4 กรณี ลองทำให้เกิดการเคลื่ยนที่ให้ครบดูสิ',
        formular: [''],
        formular_list: '<p>เกลียวเคลื่อนที่ขึ้น</p> <p>เกลียวเคลื่อนที่ลง \nθ > ϕ</p> <p>เกลียวเคลื่อนที่ลง\nθ < ϕ</p> <p>ล็อคตัวเองได้</p>'
    }]

    const handleBackSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1)
    }
    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }

    return (
        <div className="container">
            <img className="logo" src="./Images/LogoApp.png"></img>
            <div className="title">ส่วนที่ 4 ข้อที่ 1</div>
            <div className="problem">ภาพรอใบตาล</div>
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
            <div className="answer">Answer</div>
            <footer>
                <button className="back-control">ย้อนกลับ</button>
                <button className="next-control">ข้อต่อไป</button>
            </footer>
        </div>
    )
}

export default Section4_1