import React from 'react'
import ReactDOM from "react-dom";
import TopTrumps from '../TopTrumps'

it('renders TopTrumps application without errors', () => {
    const div = document.createElement("div");
    ReactDOM.render(<TopTrumps />, div);
    ReactDOM.unmountComponentAtNode(div);
});
