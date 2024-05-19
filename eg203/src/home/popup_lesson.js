import './popup_lesson.css'

const Solution = ({setSolutionOpen,lessonList}) => {
    const styleBox =  {
        backgroundColor:"rgba(228, 233, 239, 0.9)",
    }
    const closePopUp = {
        position: 'absolute',
        right: 0,
        top: 0,
        transform: 'translate(-50%, 50%)',
        margin: '10px',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        fontSize: '2rem'
    }

    const handleClosePopup = () => {
        setSolutionOpen(false)
        console.log("set")
    }

    const handleNav = (path) => {
        console.log(path);
        window.location.href = path;
    }

    return (
        <div className="popup-container" style={styleBox}>  
            <div className="popup-content" id="popup-content">
                <div style={{fontSize: "50px",fontWeight:"bold"}}>เลือกข้อ</div>
                {lessonList.map((item, index) => (
                    <div key={index} className='box-lesson' onClick={() => handleNav(item.page)}>{item.Ex}</div>
                ))}
                <button style={closePopUp} onClick={handleClosePopup}>X</button>
            </div>
        </div>
    )
}

export default Solution