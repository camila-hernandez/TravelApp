import './App.css'
import Hello from "./componentsTEST/Hello";
import Counter from "./componentsTEST/Counter";
import MobileContainer from "./components/MobileContainer";
import HeaderContainer from "./components/HeaderContainer";
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
        <HeaderContainer>
          <Hello name="Hehe" message="Hi There"/> 

        </HeaderContainer>
        <InnerContainerB>


          <Counter/>
        </InnerContainerB>
      </MobileContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
