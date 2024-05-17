import { Link } from 'react-router-dom';
import './section1.css';
import { useState, useEffect } from 'react';
import ClosePopUp from '../PopUpComponent/popUp-container';

const Section1_1 = () => {
    const [p_value, setP_value] = useState(0);
    const [w_value, setW_value] = useState(0);
    const [m_value, setM_value] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const ImageStatus = [
        { title: 'รูปแบบวัตถุอยุ่ในสมดุล', src: './Images/Section1/Static.png' },
        { title: 'กำลังมีการเคลื่อนที่', src: './Images/Section1/Moving.png' },
        { title: 'มีการเคลื่อนที่', src: './Images/Section1/Static_Moving.png' }
    ];

    const slides = [
        {
            title: 'Slide 1',
            content: 'ข้อนี้เป็น Lab ที่ให้ Input ค่า P,W,μ(บอกว่าμแทนค่าอะไร),เมื่อสังเกตการเคลื่อนที่แล้วอธิบาย ในสภาะวะสมดุลวัตถุจะอยู่กับที่โดยถ้า x=a/2 หรือ N กระทำที่ มุมขวา วัตถุจะอยู่ในสภาวะกำลังล้มไปข้างหน้า และ x หาได้จาก',
            formular: ['W = Ph', 'X = Ph/W', 'P = F'],
            note: 'ในการคิดถ้าวัตถุอยู่ในสมดุล และมีแรงเสียดทานระบบต้องสอดคล้องกับ สมการสมดุล และแรงเสียดทานด้วย'
        },
        {
            title: 'Slide 2',
            content: 'ถ้าเพิ่ม P ขึ้นเรื่อยๆ จนค่า F มากสุด(F ) วัตถุจะกำลังเคลื่อนที่ โดย F  = μN(ถ้าเพิ่ม P ถึง F  จะเกิด R  ) และเมื่ออยู่ใน สภาวะ กำลังเคลื่อนที่ แรง N และ F  จะทำให้เกิด R  โดยหามุมของ R  ได้จาก',
            formular: ['θ<sub>s</sub> = tan<sup>-1</sup>M<sub>s</sub>'],
            note: ''
        },
        {
            title: 'Slide 3',
            content: 'เมื่อวัตถุเริ่มเคลื่ยนที่ F  จะกลายเป็น F  โดยหาได้จาก F  = μN และแรงลัพธ์ R  มีมุม',
            formular: ['θ<sub>s</sub> = tan<sup>-1</sup>M<sub>s</sub>'],
            note: ''
        }
    ];

    useEffect(() => {
        const WM = m_value * w_value;
        if (p_value > WM) {
            console.log("เคลื่อนที่");
            setCurrentImage(2);
        } else if (p_value === WM) {
            console.log("กำลังเคลื่อนที่");
            setCurrentImage(1);
        } else if (p_value < WM) {
            console.log("หยุดนิ่ง");
            setCurrentImage(0);
        }
        console.log("CurrentImage : ", currentImage);
    }, [p_value, w_value, m_value]);

    const handleP_value = (event) => {
        const P = parseInt(event.target.value);
        setP_value(P);
    };

    const handleW_value = (event) => {
        const W = parseInt(event.target.value);
        setW_value(W);
    };

    const handleM_value = (event) => {
        const M = parseInt(event.target.value);
        setM_value(M);
    };

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
            <img className="logo" src="./Images/LogoApp.png" alt="Logo"></img>
            <div className="title">ส่วนที่ 1 ข้อที่ 1</div>
            {isOpen && <ClosePopUp setIsOpen={setIsOpen} />}
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
                            <img src="./Images/Arrow.png" alt="Back"></img>
                        </button>
                    </div>
                )}
                <div className="btn" id="next-btn">
                    <button onClick={handleNextSlide}>
                        <img src="./Images/Arrow.png" alt="Next"></img>
                    </button>
                </div>
            </div>
            <div className="answer">
                <div className="input" id="p-value">
                    <p>ใส่ค่า P</p>
                    <label>{p_value}</label>
                    <input type="range" min="0" max="100" onChange={handleP_value} className="range"></input>
                </div>

                <div className="input" id="w-value">
                    <p>ใส่ค่า W</p>
                    <input type="number" placeholder="W = " onChange={handleW_value} className="number"></input>
                </div>

                <div className="input" id="m-value">
                    <p>ใส่ค่า μ</p>
                    <input type="number" placeholder="μ = " onChange={handleM_value} className="number"></input>
                </div>
            </div>
            <footer>
                <Link to="#" className="back-control">ย้อนกลับ</Link>
                <button className="next-control" onClick={handleEndSlide}>ข้อต่อไป</button>
            </footer>
        </div>
    );
};

export default Section1_1;
