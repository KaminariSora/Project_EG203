import React from 'react';
import './home_template.css';
import { useState } from 'react';
import Solution from './popup_lesson';
import { lesson1, lesson2, lesson3, lesson4, lesson5 } from './lesson-content';

const Home = () => {
    const [SolutionOpen, setSolutionOpen] = useState(false)
    const [lessonlist, setLessonlist] = useState([])

    const handleClick = (id) => {
        setLessonlist(id)
        setSolutionOpen(true);
      };

    return (
        <div className="container-home">
            {SolutionOpen && <Solution setSolutionOpen={setSolutionOpen} lessonList={lessonlist}/>}
            <img className="logo" src="./Images/LogoApp.png" alt="App Logo" />
            <div className="title-home">Friction <br></br> แรงเสียดทาน</div>
            <div className="title2-home">Choose a lesson <br></br> เลือกบทเรียน</div>
            <div className="grid-container-home">
                <div className="btn-home" id="lesson1" onClick={() => handleClick(lesson1)}>
                    <img src="./Images/Lesson1.png" alt="Lesson 1" />
                </div>
                <div className="btn-home" id="lesson2" onClick={() => handleClick(lesson2)}>
                    <img src="./Images/Lesson2.png" alt="Lesson 2" />
                </div>
                <div className="btn-home" id="lesson3" onClick={() => handleClick(lesson3)}>
                    <img src="./Images/Lesson3.png" alt="Lesson 3" />
                </div>
                <div className="btn-home" id="lesson4" onClick={() => handleClick(lesson4)}>
                    <img src="./Images/Lesson4.png" alt="Lesson 4" />
                </div>
                <div className="btn-home" id="lesson5" onClick={() => handleClick(lesson5)}>
                    <img src="./Images/Lesson5.png" alt="Lesson 5" />
                </div>
                
            </div>
            <div className='grid-container2-home'>
                <div className="btn-home" id="lesson1" onClick={() => handleClick(lesson1)}>ส่วนที่1</div>
                <div className="btn-home" id="lesson2" onClick={() => handleClick(lesson2)}>ส่วนที่2</div>
                <div className="btn-home" id="lesson3" onClick={() => handleClick(lesson3)}>ส่วนที่3</div>
                <div className="btn-home" id="lesson4" onClick={() => handleClick(lesson4)}>ส่วนที่4</div>
                <div className="btn-home" id="lesson5" onClick={() => handleClick(lesson5)}>ส่วนที่5</div>
            </div>
            
        </div>
    )
}

export default Home;
