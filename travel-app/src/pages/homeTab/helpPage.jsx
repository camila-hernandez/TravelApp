export default function helpPage() {

    function handleClick(){
        console.log("BUtton Clicked");   
    }

    return <div> 
        <button onClick = {handleClick}>
            Click Here To Get A message
        </button>
    </div>
}