import './App.css'
import Hello from "./components/Hello";
import Login from "./components/Login";
import Message from "./components/Message";
import Counter from "./components/Counter";
import MobileContainer from "./components/MobileContainer";
import InnerContainer from "./components/InnerContainer";
import InnerContainerB from "./components/InnerContainerB";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

function App() {



  
  return (
    <div className="App">
      <BrowserRouter>
      <MobileContainer>
        <InnerContainer>
          <Hello name="Hehe" message="Hi There"/> 

        </InnerContainer>
        <InnerContainerB>


          <Counter/>
        </InnerContainerB>
      </MobileContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
