import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './section3.css';
import ClosePopUp from '../PopUpComponent/Page-PopUp'
import Solution from '../PopUpComponent/Solution-PopUp'
import YellowPopUp from '../PopUpComponent/YellowPopUp'
import { Section3_2 } from '../PopUpComponent/YellowScreenContent';

const PageSection3_2 = () => {
    //const [theta, setTheta] = useState(5);  // Default input theta
    //const [coef, setCoef] = useState(0.25); // Default coefficient of friction
    const [p_value, setP_value] = useState(0); // Default P value
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [SolutionOpen, setSolutionOpen] = useState(false)
    const [yellowOpen, setYellowOpen] = useState(false)
    const [RedSectionNav, setRedSectionNav] = useState(0)
    const [DataSectionNav, setDataSectionNav] = useState()
    const [isOpen, setIsOpen] = useState(false);
    const ImageStatus = [{
        title: '',
        src: '../Images/Section3/2/Section3-2.1.png'
    }];

    const handleP_value = (event) => {
        const P = parseFloat(event.target.value);
        setP_value(P);
    };

    const slides = [{
        title: 'Slide 1',
        content: 'ลิ่มถูกใช้ในการปรับระดับโครงสร้าง จงหาขนาดแรง P ที่ใช้ลดระดับจุด A ลง',
        formular: ['กำหนดให้ μ<sub>s</sub> = 0.15 และลิ่มมีขนาดเล็กมากและน้ำหนักน้อย'],
        note: '',
    }];

    useEffect(() => {
        console.log(p_value)

        if(p_value > 3.29){
            setSolutionOpen(true);
            setDataSectionNav(Section3_2)
            console.log("ลิ่มเกิดการเลื่อน")
        }
        else{
            setSolutionOpen(false);
            setP_value(3.29);
        }

    }, [p_value]);

    useEffect(() => {
        console.log(p_value)

        if(!SolutionOpen){
            setP_value(3.29);
        }

    }, [SolutionOpen]);

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

    

    return (
        <div className="container">
            <img className="logo" src="./Images/LogoApp.png"></img>
            <div className="title">ส่วนที่ 3 ข้อที่ 2</div>
            {isOpen && <ClosePopUp setIsOpen={setIsOpen} x={3} />}
            {SolutionOpen && <Solution setSolutionOpen={setSolutionOpen} setYellowOpen={setYellowOpen} textIndex={RedSectionNav} Section={"Section3_2"} />} 
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
            <div className="answer">
                <div className="input" id="p-value">
                    <p>ใส่ค่า P</p>
                    <label>{p_value}</label>
                    <div className='range-container'>
                        <input type='range' min="0.0" max="10.0" step="0.01" onChange={handleP_value} className='range'></input>
                    </div>
                </div>
                <div className="start-container">

                </div>
            </div>
            <footer>
                <Link to="/Section3_1" className="back-control">ย้อนกลับ</Link>
                <button className='next-control' onClick={handleEndSlide}>ข้อต่อไป</button>
            </footer>
        </div>
    )
}

export default PageSection3_2