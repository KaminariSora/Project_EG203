import './popup-content.css'

const ClosePopUp = ({ setIsOpen ,x}) => {
    const SectionList = [
        '/Section1' ,'/Section2_1' ,'/Section3_2', '/Section4_1', '/Section5_1'
    ]
    const handleClosePopup = () => {
        window.location.href = '/Home';
    };

    const handleNextSection = () => {
        const array_num = x
        if (array_num >= 0 && array_num < SectionList.length) {
            window.location.href = SectionList[array_num];
        } else {
            console.error("Invalid section number");
            window.location.href = '/Home'
        }
    }

    return (
        <div className="popup-container">
            <div className="popup-content">
                <p>เรียนส่วนที่ {x} จบแล้ว</p>
                <span id="first-span">
                    <img onClick={handleClosePopup} src="./Images/Section1/Home.png" id="close" alt="Close"></img>
                    <p>Home</p>
                </span>
                <span id="second-span">
                    <img onClick={handleNextSection} src="./Images/Section1/Next.png" id="next-section" alt="Next Section"></img>
                    <p>Next section</p>
                </span>
            </div>
        </div>
    );
};

export default ClosePopUp;
