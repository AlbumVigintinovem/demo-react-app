import React, { useState } from 'react';
import { Label, Input, Row, Col } from 'reactstrap';
import { useSiteContext } from '../context/SettingsContext';


const PageBuilder = () => {

    const { fontSizes, fontUnits, inputRange } = useSiteContext();

    const [i_updateColor, setI_updateColor] = useState("white");
    const [i_updateFontSize, setI_updateFontSize] = useState();
    const [fontSize, setFontSize] = useState("16");
    const [fontUnit, setFontUnit] = useState("px");




    if (document.getElementById('dynamic-id')) {
        document.getElementById('dynamic-id').style.color = i_updateColor;
        document.getElementById('dynamic-id').style.fontSize = fontSize + fontUnit;

    }


    return (
        <div>
            <Input type='select' value={i_updateColor}
                onChange={(e) => setI_updateColor(e.target.value)}>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="red">red</option>
                <option value="purple">purple</option>
            </Input>
            <Input type='select' value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
                {fontSizes.map((font, index) =>
                    <option key={index} value={font} > {font} </option>
                )}
            </Input>
            <Input type='select' value={fontUnit} onChange={(e) => setFontUnit(e.target.value)}>
                {fontUnits.map((font, index) =>
                    <option key={index} value={font} > {font} </option>
                )}
            </Input>
        </div>
    )
}

export default PageBuilder;