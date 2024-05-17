import React from 'react';
import './home_template.css';

const Home = () => {
    return (
        <div className="container">
            <img className="logo" src="./Images/LogoApp.png" alt="App Logo" />
            <div className="title">Friction <br></br> แรงเสียดทาน</div>
            <div className="title2">Choose a lesson <br></br> เลือกบทเรียน</div>
            <div className="grid-container">
                <div className="btn" id="lesson1">
                    <img src="./Images/Lesson1.png" alt="Lesson 1" />
                </div>
                <div className="btn" id="lesson2">
                    <img src="./Images/Lesson2.png" alt="Lesson 2" />
                </div>
                <div className="btn" id="lesson3">
                    <img src="./Images/Lesson3.png" alt="Lesson 3" />
                </div>
                <div className="btn" id="lesson4">
                    <img src="./Images/Lesson4.png" alt="Lesson 4" />
                </div>
                <div className="btn" id="lesson5">
                    <img src="./Images/Lesson5.png" alt="Lesson 5" />
                </div>
                
            </div>
            <div className='grid-container2'>
                <div className="btn" id="lesson1">ส่วนที่1</div>
                <div className="btn" id="lesson2">ส่วนที่2</div>
                <div className="btn" id="lesson3">ส่วนที่3</div>
                <div className="btn" id="lesson4">ส่วนที่4</div>
                <div className="btn" id="lesson5">ส่วนที่5</div>
            </div>
            
        </div>
    )
}

export default Home;
