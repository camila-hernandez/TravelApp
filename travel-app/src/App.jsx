import './App.css'
import {BrowserRouter,  Routes,  Route,} from "react-router-dom";

// Containers 
import OuterContainer from "./components/OuterContainer";
import HeaderContainer from "./components/innerContainer/HeaderContainer";
import BodyContainer from "./components/innerContainer/BodyContainer";
import FooterContainer from './components/innerContainer/FooterContainer';

// Footer / Header Related Imports 
import HeaderTitle from "./components/innerContainer/HeaderTitle";

// Account 
import AccountOptionsPages from "./pages/account/accountOptionsPage";
import CreateAccount from "./pages/account/createAccount";
import ChangePassword from "./pages/account/changePassword";
import ForgotPassword from "./pages/account/forgotPassword";
import LoginPage from "./pages/account/loginPage";

// // Calendar
import CalendarPage from "./pages/calendar/calendarPage";

// // Description 
import AddCustomEvent from "./pages/description/addCustomEvent";
import AddYYCEvent from "./pages/description/addYYCEvent";
import ModifyDeleteEvent from "./pages/description/modifyDeleteEvent";
import SeeCalendarDetails from "./pages/description/seeCalendarDetails";
import SeeEventDetails from "./pages/description/seeEventDetails";

// // Events
import EventSearch from "./pages/events/eventSearch";
import EventPage from "./pages/events/eventPage";
import EventSort from "./pages/events/eventSort"

// HomeTab 
import HelpPage from "./pages/homeTab/helpPage";
import HomePage from "./pages/homeTab/homePage";

// Room for Additional Imports here







function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <OuterContainer>  {/* The Mobile 9:16 Layout */}

          {/* Top Header */}
          <HeaderContainer>  
            <HeaderTitle header_title={"Where Calgary"}/> 
          </HeaderContainer>

          {/* Body Container */}
          <BodyContainer>
            
            {/* UNCOMMENT THE SECTION YOU WANT TO WORK ON */}
            
            {/* SECTION: Account */}
            <AccountOptionsPages/>
            {/* <CreateAccount/> */}
{/*             <ChangePassword/> */}
{/*             <ForgotPassword/> */}
{/*             <LoginPage/> */}

            {/* SECTION: Calendar */}
            {/* <CalendarPage/> */}

            {/* SECTION: Descriptions */} 
            {/* <AddCustomEvent/>
            <AddYYCEvent/> 
            <ModifyDeleteEvent/> 
            <SeeCalendarDetails/> 
            <SeeEventDetails/>  */}

            {/* SECTION: Events */}
             {/* <EventSearch/> */}
{/*             <EventPage/> */}
            {/* <EventSort/> */}

            {/* SECTION: Home */} 
            {/* <HelpPage/> */}
            {/* <HomePage/> */}
            
          </BodyContainer>
          
          {/* Bottom Footer */}
          <FooterContainer>
            
          </FooterContainer>
        </OuterContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;