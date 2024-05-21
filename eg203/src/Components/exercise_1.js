import './exercise_template.css';
import { Link } from 'react-router-dom';
import { useState, useEffect ,useContext} from 'react';
import ClosePopUp from './PopUpComponent/Page-PopUp'

const Sect31 = () => {
    const [theta, setTheta] = useState(5);  // Default input theta
    const [coef, setCoef] = useState(0.25); // Default coefficient of friction
    const [input_P, setInput_P] = useState(10); // Default P value
    const radians = theta * (Math.PI / 180);
    const math_N1 = coef*Math.cos(radians)+Math.sin(radians); /// สัมประสิทธิหน้าN2 
    const N2 = 500/((-1*coef*math_N1)+(Math.cos(radians))-(coef*Math.sin(radians)));
    const N1 = math_N1*N2;
    const N3 = N2*Math.cos(radians)-(coef*N2*Math.sin(radians));
    const P_math = ((coef*N3)+(coef*N2*Math.cos(radians))+N2*Math.sin(radians));
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const ImageStatus = [{
        title: '',
        src: '../Images/Section3/1/Section3-1.png'
    }];

    const slides = [{
        title: 'Slide 1',
        content: 'ลิ่ม เป็นเครื่องทุ่นแรงที่ใช้ในการยกหรือปรับตำแหน่งของวัตถุที่มีน้ำหนักมากๆ',
        formular: [],
        note: '',
    }];

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handleBackSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1);
    };

    const handleEndSlide = () => {
        setIsOpen(true);
        console.log("end slide");
    };

    useEffect(() => {

        if(input_P<P_math){
            console.log("ลิ่มเกิดการเลื่อน");
        }else if(P_math == 0 && input_P == 0){
            console.log("แรงเสียดทานต้านการเคลื่อนที่ได้ลิ่มล็อคตัวเอง");
        }else{
            console.log("ลิ่มยก block ขึ้นได้")
        }

    }, []);


    return (
        <div className="container">
            <img className="logo" src="./Images/LogoApp.png"></img>
            <div className="title">ส่วนที่ 3 ข้อที่ 1</div>
            {isOpen && <ClosePopUp setIsOpen={setIsOpen} x={1} />}
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
            <div className="answer">
                <div className="input" id="theta-value">
                    <p>ใส่ค่า θ</p>
                    <input type="number" placeholder="θ =" onChange={(e) => setTheta(Number(e.target.value))} className="number"></input>
                </div>

                <div className="input" id="mus-value">
                    <p>ใส่ค่า μ<sub>s</sub></p>
                    <input type="number" placeholder="μs = " onChange={(e) => setCoef(Number(e.target.value))} className="number"></input>
                </div>
                
                <div className="input" id="p-value">
                    <p>ใส่ค่า P</p>
                    <input type="number" placeholder="P = " onChange={(e) => setInput_P(Number(e.target.value))} className="number"></input>
                </div>
            </div>
            <footer>
                <Link to="#" className="back-control">ย้อนกลับ</Link>
                <Link to="eg203/src/Components/exercise_2.js" className='next-control'>ข้อต่อไป</Link>
            </footer>
        </div>
    )
}

export default Sect31