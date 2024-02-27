import {useState} from "react";

export default function homePage() {
    const [count,setCount] = useState(0); 
    function handleClick(){
       setCount(count+1)
    }

    return( 

        <div> 
            <h1> Meow is: {count} </h1>
            <button onClick = {handleClick}>Increment</button>
        </div>
    );
}