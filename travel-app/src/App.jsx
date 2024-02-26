import './App.css'
import Hello from "./componentsTEST/Hello";
import Counter from "./componentsTEST/Counter";
import OuterContainer from "./components/OuterContainer";
import HeaderContainer from "./components/innerContainer/HeaderContainer";
import BodyContainer from "./components/innerContainer/BodyContainer";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

function App() {



  
  return (
    <div className="App">
      <BrowserRouter>
      <OuterContainer>
        <HeaderContainer>
          <Hello name="Hehe" message="Hi There"/> 

        </HeaderContainer>
        <BodyContainer>


          <Counter/>
        </BodyContainer>
      </OuterContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
