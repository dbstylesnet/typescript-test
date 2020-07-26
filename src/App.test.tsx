import React from 'react'
import ReactDOM from "react-dom";
import TopTrumps from './TopTrumps'

it('renders TopTrumps application without errors', () => {
    const div = document.createElement("div");
    ReactDOM.render(<TopTrumps />, div);
    ReactDOM.unmountComponentAtNode(div);
});












// import React from 'react';
// import Game from './pages/Game';
// import { MockedProvider } from '@apollo/client/testing'

// test('renders learn react', () => {
// });

// describe('Tamcos', () => {
//   [{
//     it: 'sdasdasd',
//     var1: 23, var2: 324,
//     expected: 523
//   },{
//     it: 'sdasdasd',
//     var1: 23, var2: 324,
//     expected: 523
//   }
// ]
// })


