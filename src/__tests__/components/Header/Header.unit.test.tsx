import React from 'react'
import ReactDOM from "react-dom";
import Header from '../../../componenets/Header'

it('should render a Header component correctly', () => {
    const HeaderProps = {
        scoreI: 0, 
        scoreII: 0, 
        scores: ["I", "II" , "D"],
    }
    const div = document.createElement("div");
    ReactDOM.render(<Header {...HeaderProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
});


