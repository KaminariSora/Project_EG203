import { useEffect, useState } from 'react'
import './section5.css'
import ClosePopUp from '../PopUpComponent/Page-PopUp'
import Solution from '../PopUpComponent/Solution-PopUp'
import YellowPopUp from '../PopUpComponent/YellowPopUp'
import { Section5_1 } from '../PopUpComponent/YellowScreenContent';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const Section5 = () => {
    const imageStyle = {
        height: '100%'
    }

    const [mass_value, setmass] = useState(2.0)
    const [isOpen, setIsOpen] = useState(false)
    const [SolutionOpen, setSolutionOpen] = useState(false)
    const [yellowOpen, setYellowOpen] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'slide1',
            image: './Images/Section5/Section5_beforeEx.png',
            content: 'ในการหาแรงเสียดทานบนสายพาน แรง T_{2} ต้องมากกว่าผลรวมแรงเสียดทาน และ T_{1} ',
            formular: ['โดยเราสามารถหาแรงT_{2}ได้จากT_{2}=T_{1}e^{\\mu B}'],
            formular_list: [],
            answer_box: (<div></div>)
        },
        {
            title: 'slide2',
            image: './Images/Section5/Section5_1.png',
            content: 'เส้นเชือกยึดกับแผ่นเหล็ก\\: B\\: มวล\\: 20\\: kg\\: ถูกนำมาร้อยผ่านหมุด\\: ไม่ให้หมุนไปยังโลหะ\\: A ',
            formular: ['จงหามวลน้อยที่สุดของ\\: A\\: ที่ป้องกัน\\; ไม่ให้แผ่น\\: B\\: เลื่อน'],
            formular_list: [],
            answer_box: (<div></div>)
        },
]

    const handleEndSlide = () => {
        setIsOpen(true);
        console.log("end slide");
    };

    const handlemass_value = (event) => {
        const mass = parseFloat(event.target.value);
        setmass(mass);
    };

    useEffect(() => {
        console.log(mass_value)

        if(mass_value > 2.22){
            setSolutionOpen(true);
            console.log("เสาล้ม")
        }
        else{
            setSolutionOpen(false);
        }

    }, [mass_value]);

    useEffect(() => {
        console.log(mass_value)

        if(!SolutionOpen && mass_value < 2.22){
            setmass(mass_value);
        }
        else if(!SolutionOpen){
            setmass(2);
        }
    }, [SolutionOpen]);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const handleBackSlide = () => {
        setCurrentSlide((prevSlide) => prevSlide - 1);
    };

    return (
        <div className="container">
            <img className="logo" src="./Images/LogoApp.png"></img>
            <div className="title">ส่วนที่ 5 ข้อที่ 1</div>
            {isOpen && <ClosePopUp setIsOpen={setIsOpen} x={5}/>}
            {SolutionOpen && <Solution setSolutionOpen={setSolutionOpen} setYellowOpen={setYellowOpen} textIndex={0} Section={"Section5"}/>}
            {yellowOpen && <YellowPopUp setYellowOpen={setYellowOpen} DataList={Section5_1}/>}
            <div className="problem">
                <img src={slides[currentSlide].image} style={imageStyle} id='section2_img'></img>
            </div>
            <div className="explanation">
                <div className='slide-1'>
                    <p style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: katex.renderToString(slides[currentSlide].content) }} className='font'></p>
                    
                    <div className='formular'>
                        {slides[currentSlide].formular.map((item, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: katex.renderToString(item) }} className='font' ></p>
                        ))}
                    </div>
                    <div className='formular formular-list'>
                        {[slides[currentSlide].formular_list].map((item, index) => (
                            <p key={index} className='mini-box font' style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: item }}></p>
                        ))}
                    </div>
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
            <div className={'answer' + (currentSlide !== 1 ? ' hidden' : '')}>
                <div className="input" id="p-value">
                    <p>Input mass(kg)</p>
                    <label>{mass_value} kg</label>
                    <div className='range-container'>
                        <input type='range' min="0" max="4" onChange={handlemass_value} className='range' step="0.1" value={mass_value}></input>
                    </div>
                </div>
                <div className='start-container'>
            </div>
            </div>
            <footer>
                <button className="back-control">ย้อนกลับ</button>
                <button className='next-control' onClick={handleEndSlide}>ข้อต่อไป</button>
            </footer>
        </div>
    )
}

export default Section5;