import { useState } from 'react'
import './section4.css'
import ClosePopUp from '../PopUpComponent/Page-PopUp'
import Solution from '../PopUpComponent/Solution-PopUp'
import YellowPopUp from '../PopUpComponent/YellowPopUp'
import katex from 'katex';
import { Section4_first, Section4_second, Section4_thrid, Section4_forth, YellowScreenContent } from '../PopUpComponent/YellowScreenContent';

const PageSection4_1 = () => {
    const imageStyle = {
        height: '100%'
    }

    const [w_value, setW_value] = useState(0) //Mu
    const [m_value, setM_value] = useState(0) //Moment
    const [a_value, setA_value] = useState(0) //Theta
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [SolutionOpen, setSolutionOpen] = useState(false)
    const [yellowOpen, setYellowOpen] = useState(false)
    const [RedSectionNav, setRedSectionNav] = useState(0)
    const [DataSectionNav, setDataSectionNav] = useState("")

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
    const calculate = (event) => {
        const moment = m_value;
        const μs = w_value;
        const theta = a_value;
        let alpha;
        alpha = Math.atan(μs); 
        const d = 1;
        const axialFriction = moment / (d * μs);
        if (theta <= alpha) {
            console.log("สกรูอยู่ในสถานะ Self-locking");
            console.log(DataSectionNav)
            setRedSectionNav(3)
            setDataSectionNav('Section4_forth')
            //case3
        } else if (theta > alpha && theta < 90) {
            console.log("สกรูอยู่ในสถานะ Upward Screw");
            setRedSectionNav(0)
            setDataSectionNav('Section4_first')
            //case_1
        } else if (theta > alpha && theta > 90) {
            console.log("สกรูอยู่ในสถานะ Downward Screw");
            setRedSectionNav(1)
            setDataSectionNav('Section4_second')
            //case_2
        } else if (theta < alpha) {
            console.log("สกรูอยู่ในสถานะ Downward Screw"); 
            setRedSectionNav(3)
            setDataSectionNav('Section4_forth')
            //case_4
        } else {
            console.log("สกรูอยู่ในสถานะ Impending motion");
            setRedSectionNav(4)
        }
        setSolutionOpen(true);
        console.log("Click")
    }

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
        ),
        start_button: (
            <div className='start-container'>
                <button id='cal-btn' onClick={calculate}>Click me</button>
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

    return (
        <div className="container">
            <img className="logo" src="./Images/LogoApp.png"></img>
            <div className="title">ส่วนที่ 4 ข้อที่ 1</div>
            {isOpen && <ClosePopUp setIsOpen={setIsOpen} x={4}/>}
            {/* //เงื่อนไข array หน้าสีแดง */}
            {SolutionOpen && <Solution setSolutionOpen={setSolutionOpen} setYellowOpen={setYellowOpen} textIndex={RedSectionNav} Section={"Section4"} />} 
            {/* //เงื่อนไขหน้าสีเหลือง */}
            {yellowOpen && <YellowPopUp setYellowOpen={setYellowOpen} DataList={DataSectionNav}/>}
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
            <div className={'answer-box' + (currentSlide !== 3 ? 'hidden' : '')}>
                {slides[currentSlide].answer_box}
                {slides[currentSlide].start_button}
            </div>
            <footer>
                <button className="back-control">ย้อนกลับ</button>
                <button className='next-control' onClick={handleEndSlide}>ข้อต่อไป</button>
            </footer>
        </div>
    )
}

export default PageSection4_1