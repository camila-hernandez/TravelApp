import './App.css'
import Hello from "./components/Hello";
import Login from "./components/Login";
import Message from "./components/Message";
import Counter from "./components/Counter";
import MobileContainer from "./components/MobileContainer";
import InnerContainer from "./components/InnerContainer";
import InnerContainerB from "./components/InnerContainerB";

function App() {



  
  return (
    <div className="App">
      <MobileContainer>
        <InnerContainer>
          <Hello name="Hehe" message="Hi There"/> 
          <Hello name="Jow"/> 
          <Message />
        
          <Counter/>
        </InnerContainer>
        <InnerContainerB>

          <Message />
          <Counter/>
        </InnerContainerB>
      </MobileContainer>
    </div>
  );
}

export default App;
