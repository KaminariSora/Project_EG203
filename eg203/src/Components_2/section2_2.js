import { useEffect, useState } from 'react'
import './section2.css'
import ClosePopUp from '../PopUpComponent/Page-PopUp'
import Solution from '../PopUpComponent/Solution-PopUp'
import YellowPopUp from '../PopUpComponent/YellowPopUp'
import { Section2_2 } from '../PopUpComponent/YellowScreenContent';

const PageSection2_2 = () => {
    const imageStyle = {
        height: '100%'
    }

    const [theta_value, setTheta] = useState(90)
    const [isOpen, setIsOpen] = useState(false)
    const [SolutionOpen, setSolutionOpen] = useState(false)
    const [yellowOpen, setYellowOpen] = useState(false)

    const slides = [{
        title: 'slide1',
        image: './Images/Section2/Section2_1.png',
        content: 'กำหนดให้คานถูกรองรับโดย pin ที่จุด A และ roller ที่มีรัศมี 15 mm ถ้า μ = 0.3 ที่จุด B และ C จงหามุมθ สูงสุดที่ไม้จะเกิดการเลื่อน (กำหนดให้ roller น้ำหนักน้อยมาก)' ,
        formular: [],
        formular_list: [],
        answer_box: (<div></div>)
    }]

    const handleEndSlide = () => {
        setIsOpen(true);
        console.log("end slide");
    };

    const handleTheta_value = (event) => {
        const Theta = parseInt(event.target.value);
        setTheta(Theta);
    };

    useEffect(() => {
        console.log(theta_value)
        var currentTheta = 90;
        if(theta_value != currentTheta){
            setSolutionOpen(true);
            console.log("เสาล้ม")
        }
        else{
            setSolutionOpen(false);
            setTheta(90);
        }

    }, [theta_value]);

    useEffect(() => {
        console.log(theta_value)

        if(!SolutionOpen){
            setTheta(90);
        }

    }, [SolutionOpen]);

    return (
        <div className="container">
            <img className="logo" src="./Images/LogoApp.png"></img>
            <div className="title">ส่วนที่ 2 ข้อที่ 2</div>
            {isOpen && <ClosePopUp setIsOpen={setIsOpen} x={4}/>}
            {SolutionOpen && <Solution setSolutionOpen={setSolutionOpen} setYellowOpen={setYellowOpen} textIndex={0} Section={"Section2"}/>}
            {yellowOpen && <YellowPopUp setYellowOpen={setYellowOpen} DataList={Section2_2}/>}
            <div className="problem">
                <img src={slides[0].image} style={imageStyle} id='section2_img'></img>
            </div>
            <div className="explanation">
                <div className='slide-1'>
                    <p style={{ whiteSpace: 'pre-line' }}>{slides[0].content}</p>
                    <div className='formular'>
                        {slides[0].formular.map((item, index) => (
                            <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>
                        ))}
                    </div>
                    <div className='formular formular-list'>
                        {[slides[0].formular_list].map((item, index) => (
                            <p key={index} className='mini-box' style={{ whiteSpace: 'pre-line' }} dangerouslySetInnerHTML={{ __html: item }}></p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="answer">
                <div className="input" id="p-value">
                    <p>input θ</p>
                    <label>{theta_value}° </label>
                    <div className='range-container'>
                        <input type='range' min="0" max="180" onChange={handleTheta_value} className='range' value={theta_value}></input>
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

export default PageSection2_2;