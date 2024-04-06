import { Link } from 'react-router-dom'
import './section1.css'

const section1_2 = () => {
    return (
        <div className="container">
            <img className="logo" src="./Images/LogoApp.png"></img>
            <div className="title">ส่วนที่ 1 ข้อที่ 2</div>
            <div className="problem">Image Input</div>
            <div className="explanation">
                Explain
                <div className="btn" id="back-btn">Back</div>
                <div className="btn" id="next-btn">next</div>
            </div>
            <div className="answer">Answer</div>
            <footer>
                <Link to="/section1_1" className="back-control">ย้อนกลับ</Link>
                <button className="next-control">ข้อต่อไป</button>
            </footer>
        </div>
    )
}

export default section1_2