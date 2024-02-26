const name ="Rob";

function displayMessage(){
    return "WOW";
}

function Hello( {name, message }){

    // const {name, message} = props; 

    return <div>
        <h1> Hello {name} </h1> 
        <h1> Wow! {message} </h1>
    </div>
}

export default Hello;