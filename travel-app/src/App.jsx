import './App.css'
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import MobileContainer from "./components/MobileContainer";
import InnerContainer from "./components/InnerContainer";

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
        <InnerContainer>

          <Message />
          <Counter/>
        </InnerContainer>
      </MobileContainer>
    </div>
  );
}

export default App;
