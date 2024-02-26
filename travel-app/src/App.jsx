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
import FooterContainer from './components/innerContainer/FooterContainer';

function App() {



  
  return (
    <div className="App">
      <BrowserRouter>
      <OuterContainer>
        <HeaderContainer>
          <Hello name="Hehe"/> 

        </HeaderContainer>
        <BodyContainer>


          <Counter/>
        </BodyContainer>
        <FooterContainer>
          <Hello name = "Meow"/>
        </FooterContainer>
      </OuterContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
