import './exercise_template.css'

const Template = () => {
    return (
        <div className="container">
            <img className="logo" src="./Images/LogoApp.png" alt="App Logo" />
            <div className="title">ส่วนที่ x ข้อที่ y</div>
            <div className="problem">Image Input</div>
            <div className="explanation">
                Explain
                <div className="btn" id="back-btn">Back</div>
                <div className="btn" id="next-btn">next</div>
            </div>
            <div className="answer">Answer</div>
            <footer>
                <button className="back-control">ย้อนกลับ</button>
                <button className="next-control">ข้อต่อไป</button>
            </footer>
        </div>
    )
}

export default Template