import './slider.css'
const sliderTest = () => {
    return (
        <div>
            <div className="input" id="p-value">
                <p>ใส่ค่า P</p>
                <label>P = </label>
                <input
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    className="slider"
                />
                <span>P</span>
            </div>

        </div>
    )
}

export default sliderTest