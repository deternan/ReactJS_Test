import React, {useState} from "react";
import useFitText from "use-fit-text";


function TextComponent(props) {
    
    const { fontSize, ref } = useFitText();
    const [getName, setName] = useState(false);
    const [email, setEmail] = useState('');

    const textObj = {                
        height: 20, 
        width: 200
      }

    function handleChange(e) {
       //e.target.textObj.value =  '線上程式語言教學練習'       
        e.target.value = '54321';
        //getName = setName
        setEmail('');
    }
    

    return (
        /*
        <div style={{ fontSize, height: 20, width: 200 }}> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>,

        */
       <div>
            <input name='textInput' type='text' style={textObj} value='12345' />
            <input name="email" type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
            <p><button onClick={handleChange}> submit </button> </p>
            <p>You Input : {email}</p>
       </div>
        
      );
}


export default TextComponent;
