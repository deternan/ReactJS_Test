import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppClick from './AppTT';
import TextColumn from './TextComponent';
import reportWebVitals from './reportWebVitals';


<div id="root"></div>

/*
const multiButton = () => {
    var output = [];
    for (let i = 0; i < 4; ++i)
        output.push(<button>This is {i} button</button>)
    return output;
}
*/


ReactDOM.render(

    <div>      
        <AppClick name="Click Button" />        
        <TextColumn name='inputColumn' />
    </div>,
    
    /*
    <div>
        <AppTT onClick={() => changeText("newText")}>{buttonText}</AppTT>        
        <button value={true} onClick={getValue}> click </button>,
        {multiButton()},
        
    </div>,
    */
        document.getElementById('root')
    );
    
    reportWebVitals();
