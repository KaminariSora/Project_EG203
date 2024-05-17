const ClosePopUp = ({ setIsOpen }) => {
    const handleClosePopup = () => {
        setIsOpen(false);
    };

    return (
        <div className="popup-container">
            <div className="popup-content">
                <p>เรียนส่วนที่ 1 จบแล้ว</p>
                <span id="first-span">
                    <img onClick={handleClosePopup} src="./Images/Section1/Home.png" id="close" alt="Close"></img>
                    <p>Home</p>
                </span>
                <span id="second-span">
                    <img src="./Images/Section1/Next.png" id="next-section" alt="Next Section"></img>
                    <p>Next section</p>
                </span>
            </div>
        </div>
    );
};

export default ClosePopUp;
