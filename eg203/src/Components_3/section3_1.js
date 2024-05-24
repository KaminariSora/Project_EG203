import { Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import './section3.css';
import ClosePopUp from '../PopUpComponent/Page-PopUp'
import Solution from '../PopUpComponent/Solution-PopUp'
import YellowPopUp from '../PopUpComponent/YellowPopUp'

const Section3_1 = () => {
    const [theta_value, setTheta_value] = useState(5);  // Default input theta
    const [coef_value, setCoef_value] = useState(0.25); // Default coefficient of friction
    const [input_P, setInput_P] = useState(10); // Default P value
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [SolutionOpen, setSolutionOpen] = useState(false)
    const [yellowOpen, setYellowOpen] = useState(false)
    const [RedSectionNav, setRedSectionNav] = useState(0)
    const [DataSectionNav, setDataSectionNav] = useState()
    const [isOpen, setIsOpen] = useState(false);

    const ImageStatus = [{
        title: '',
        src: '../Images/Section3/1/Section3-1.png'
    }];

    const handleTheta_value = (event) =>{
        const theta = parseInt(event.target.value)
        setTheta_value(theta)
    }

    const handleCoef_value = (event) =>{
        const coef = parseInt(event.target.value)
        setCoef_value(coef)
    }

    const handleP_value = (event) =>{
        const P = parseInt(event.target.value)
        setInput_P(P)
    }

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handleBackSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1);
    };

    const handleNextQuestion = () => {
        window.location.href = '/Section3_2'
    }

    const calculate = (event) => {
        const theta = theta_value;
        const coef = coef_value;
        const P = input_P
        const radians = theta * (Math.PI / 180);
        const math_N1 = coef*Math.cos(radians)+Math.sin(radians); /// สัมประสิทธิหน้าN2 
        const N2 = 500/((-1*coef*math_N1)+(Math.cos(radians))-(coef*Math.sin(radians)));
        const N1 = math_N1*N2;
        const N3 = N2*Math.cos(radians)-(coef*N2*Math.sin(radians));
        const P_math = ((coef*N3)+(coef*N2*Math.cos(radians))+N2*Math.sin(radians));
        if (P < P_math){
            console.log("ลิ่มเกิดการเลื่อน");
            setRedSectionNav(0);
        } else if (P_math == 0 && P == 0){
            console.log("แรงเสียดทานต้านการเคลื่อนที่ได้ ลิ่มล็อคตัวเอง");
            setRedSectionNav(1);
        } else {
            console.log("ลิ่มยก block ขึ้นได้");
            setRedSectionNav(2);
        }
        setSolutionOpen(true);
        console.log("Click")
    }

    const slides = [{
        title: 'Slide 1',
        content: 'ลิ่ม เป็นเครื่องทุ่นแรงที่ใช้ในการยกหรือปรับตำแหน่งของวัตถุที่มีน้ำหนักมากๆ',
        formular: [],
        note: "",
        answer_box: (
            <div className="answer">
                <div className="input" id="theta-value">
                    <p>ใส่ค่า θ</p>
                    <input type="number" placeholder="θ =" onChange={handleTheta_value} className="number"></input>
                </div>

                <div className="input" id="coef-value">
                    <p>ใส่ค่า μ<sub>s</sub></p>
                    <input type="number" placeholder="μs = " onChange={handleCoef_value} className="number"></input>
                </div>
                
                <div className="input" id="p-value">
                    <p>ใส่ค่า P</p>
                    <input type="number" placeholder="P = " onChange={handleP_value} className="number"></input>
                </div>
            </div>
        ),
        start_button: (
            <div className='start-container'>
                <button id='cal-btn' onClick={calculate}>ดูผลลัพธ์</button>
            </div>
        )
    }];

    return (
        <div className="container">
            <img className="logo" src="./Images/LogoApp.png"></img>
            <div className="title">ส่วนที่ 3 ข้อที่ 1</div>
            {isOpen && <ClosePopUp setIsOpen={setIsOpen} x={1} />}
            {/* //เงื่อนไข array หน้าสีแดง */}
            {SolutionOpen && <Solution setSolutionOpen={setSolutionOpen} setYellowOpen={setYellowOpen} textIndex={RedSectionNav} Section={"Section3"} />} 
            {yellowOpen && <YellowPopUp setYellowOpen={setYellowOpen} DataList={DataSectionNav}/>}
            <div className="problem">
                <p>{ImageStatus[currentImage].title}</p>
                
                <img src={ImageStatus[currentImage].src} alt={ImageStatus[currentImage].title}></img>
                <img className="teacher" src="./Images/teacher.png" alt="Teacher"></img>
            </div>
            <div className="explanation">
                <div className="slide-1">
                    <p>{slides[currentSlide].content}</p>
                    <div className="formular">
                        {slides[currentSlide].formular.map((item, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>
                        ))}
                    </div>
                    <p style={{ color: 'red' }}>{slides[currentSlide].note}</p>
                </div>
                {currentSlide !== 0 && (
                    <div className="btn" id="back-btn">
                        <button onClick={handleBackSlide}>
                            <img src="./Images/Arrowback.png" alt="Back"></img>
                        </button>
                    </div>
                )}
                {currentSlide !== 0 &&(
                    <div className="btn" id="next-btn">
                        <button onClick={handleNextSlide}>
                            <img src="./Images/Arrow.png" alt="Next"></img>
                        </button>
                    </div>
                )}
            </div>
            <footer>
                <Link to="/Home" className="back-control">ย้อนกลับ</Link>
                <button className='next-control' onClick={handleNextQuestion}>ข้อต่อไป</button>
            </footer>
        </div>
    )
}

export default Section3_1