import './exercise_template.css'

const Sect32 = () => {
    return (
        <div className="container">
            <img className="logo" src="./Images/LogoApp.png"></img>
            <div className="title">ส่วนที่ 3 ข้อที่ 2</div>
            <div className="problem">
                <img src={require('./img/2/Section3-2.1.png')} />
                <img src={require('./img/2/Section3-2.2.png')} />
                <img src={require('./img/2/Section3-2.3.png')} />
            </div>
            <div className="explanation">
                Explain
                <div className="btn" id="back-btn">Back</div>
                <div className="btn" id="next-btn">Next</div>
            </div>
            <div className="answer">Answer</div>
            <footer>
                <button className="back-control">ย้อนกลับ</button>
                <button className="next-control">ข้อต่อไป</button>
            </footer>
        </div>
    )
}

export default Sect32