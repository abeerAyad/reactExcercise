import { useState } from "react";

const Ex2 = () => {
    const palette = ['red', 'pink', 'purple'];
    const [color, setcColor] = useState('orangered');
    return (
        <div className="paletteColor" style={{ backgroundColor: color }}>
            {palette.map((color, i) => <button key={i} onClick={() => setcColor(oldColor => oldColor = color)}>{color}</button>)}

        </div>
    )
}
export default Ex2;