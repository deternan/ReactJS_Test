import React, {useState} from 'react';

function AppClick(props) {
    
    const colors = {
        Sea: '#a2ccb6',
        Sand: '#fceeb5',
        Peach: '#ee786e',
      }

    const [count, setCount] = useState(0);
    const [getName, setName] = useState(false);
    

    function changeTextColor_Over(e) {
        e.target.style.color = colors.Sand;        
    }
    
    function changeTextColor_Leave(e) {
        e.target.style.color = 'black';
    }

    function changeBackground(e) {
        e.target.style.background = 'red';
    }

    return (                
        //<Button onClick={() => setButtonText("newText")}>{buttonText}</Button>        
        //<button> {props.name} </button>
        //<button onClick={() => {setCount(count+1); setName(props.name)}}> {getName? 'Active' : props.name} </button>
        
        //<h1 onMouseOver={changeTextColor_Over}>Hello, world!</h1>            
        <div>
            <p>You clicked {count} times</p>
            <p><button onClick={() => {setCount(count+1); setName(props.name)}}> {getName? count : props.name} </button> </p>
            <h1 onMouseEnter={changeTextColor_Over} onMouseLeave={changeTextColor_Leave}>Hello, world!</h1>
            <button onMouseOver={changeBackground}>Hover over me!</button>
        </div>

    );
}


export default AppClick;
