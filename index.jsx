import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';

import reducer from './reducer.jsx';

import RpgHelper from './components/rpg-helper.jsx';

let store = createStore(reducer);

class App extends React.Component {
    render() {
        return (
            <RpgHelper />
        );
    }
};

ReactDom.render(<App />, document.getElementById('content'));
