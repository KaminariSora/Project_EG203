import './exercise_template.css';
import { Link } from 'react-router-dom';
import { useState, useEffect ,useContext} from 'react';
import ClosePopUp from './PopUpComponent/Page-PopUp'


const Sect32 = () => {
    //const [theta, setTheta] = useState(5);  // Default input theta
    //const [coef, setCoef] = useState(0.25); // Default coefficient of friction
    const [p_value, setP_value] = useState(0); // Default P value
    //const radians = theta * (Math.PI / 180);
    //const math_N1 = coef*Math.cos(radians)+Math.sin(radians); /// สัมประสิทธิหน้าN2 
    //const N2 = 500/((-1*coef*math_N1)+(Math.cos(radians))-(coef*Math.sin(radians)));
    //const N1 = math_N1*N2;
    //const N3 = N2*Math.cos(radians)-(coef*N2*Math.sin(radians));
    //const P_math = ((coef*N3)+(coef*N2*Math.cos(radians))+N2*Math.sin(radians));
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const ImageStatus = [{
        title: '',
        src: '../Images/Section3/2/Section3-2.1.png'
    },{
        title: '',
        src: '../Images/Section3/2/Section3-2.2.png'
    },{
        title: '',
        src: '../Images/Section3/2/Section3-2.3.png'
    }];

    const slides = [{
        title: 'Slide 1',
        content: 'ลิ่มถูกใช้ในการปรับระดับโครงสร้าง จงหาขนาดแรง P ที่ใช้ลดระดับจุด A ลง',
        formular: ['กำหนดให้ μ<sub>s</sub> = 0.15 และลิ่มมีขนาดเล็กมากและน้ำหนักน้อย'],
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
        const def_P = 3.29;
        if (p_value > def_P) {
            console.log("ลิ่มเกิดการเลื่อน");;
        }
        console.log("CurrentImage : ", currentImage);
    }, [p_value]);

    const handleP_value = (event) => {
        const P = parseFloat(event.target.value);
        setP_value(P);
    };

    return (
        <div className="container">
            <img className="logo" src="./Images/LogoApp.png"></img>
            <div className="title">ส่วนที่ 3 ข้อที่ 2</div>
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
                <div className="input" id="p-value">
                    <p>ใส่ค่า P</p>
                    <label>{p_value}</label>
                    <div className='range-container'>
                        <input type='range' min="0.0" max="10.0" step="0.01" onChange={handleP_value} className='range'></input>
                    </div>
                </div>
            </div>
            <footer>
                <Link to="eg203/src/Components/exercise_1.js" className="back-control">ย้อนกลับ</Link>
                <Link to="#" className='next-control'>ข้อต่อไป</Link>
            </footer>
        </div>
    )
}

export default Sect32