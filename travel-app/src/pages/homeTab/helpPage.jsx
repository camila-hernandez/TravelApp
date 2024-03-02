import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AccountLogo from '../../assets/AccountLogo.png';
import CalendarLogo from '../../assets/CalendarLogo.png';
import CustomerServiceLogo from '../../assets/CustomerServiceLogo.png';
import EventsLogo from '../../assets/EventsLogo.png';
import HomeLogo from '../../assets/HomeLogo.png';
import PrivacyPolicyLogo from '../../assets/PrivacyPolicyLogo.png';
import './homeTab.css';

export default function HelpPage() {
  const spaceBetweenStyle = {
    margin: '15px',
  };

  const containerStyle = {
    height: '560px', // Set a fixed height for the container
    overflowY: 'auto', // Enable vertical scrolling if the content overflows
    display: 'flex',
    flexDirection: 'column', // Arrange items vertically
    backgroundColor: 'white', // Set background color to white
  };

  const row2Style = {
    ...spaceBetweenStyle, // Apply the margin style
  };

  const row3Style = {
    // You can add styles specific to row3 if needed
  };

  return (
    <div className="helpPage-containerA" style={containerStyle}>

      <div className="contain-Description">
         WHERE CALGARY is your complete and up-to-guide on the best things to see and do during your stay in Calgary, all in the palm of your hand 
      </div>

      <div className="contain-Home" style={spaceBetweenStyle}>
        <img src={HomeLogo} alt="HomeLogo" className="HomeLogo" 
            style={{ width: '25px', height: 'auto' }}
            />
        <h2> Home Screen </h2>
        Weather reports
      </div>

      <div className="contain-CalgaryGuide" style={spaceBetweenStyle}>
        <img src={EventsLogo} alt="EventsLogo" className="EventsLogo" 
            style={{ width: '25px', height: 'auto' }}
            />
        <h2> Your Calgary Guide </h2>
        Here you will find everything from the best places to eat to local shopping and activities 
      </div>

      <div className="contain-Calendar" style={spaceBetweenStyle}>
      <img src={CalendarLogo} alt="CalendarLogo" className="CalendarLogo" 
            style={{ width: '25px', height: 'auto' }}
            />
        <h2> Your Calgary Guide </h2>
        Add YYC Events to your own personalized calendar. To view and edit your events, tap the calendar button on the bottom navigation bar
      </div>

      <div className="contain-Account" style={spaceBetweenStyle}>
      <img src={AccountLogo} alt="AccountLogo" className="AccountLogo" 
            style={{ width: '25px', height: 'auto' }}
            />
        <h2> Account </h2>
        Account
      </div>

      <div className="contain-CustomerService" style={spaceBetweenStyle}>
      <img src={CustomerServiceLogo} alt="CustomerServiceLogo" className="CustomerServiceLogo" 
            style={{ width: '25px', height: 'auto' }}
            />
        <h2> Customer Service </h2>
        Blah Blah
      </div>

      <div className="contain-PrivacyPolicy" style={spaceBetweenStyle}>
      <img src={PrivacyPolicyLogo} alt="PrivacyPolicyLogo" className="PrivacyPolicyLogo" 
            style={{ width: '25px', height: 'auto' }}
            />
        <h2> Privacy Policy </h2>
        blah blah
      </div>

      <div className="contain-BuildVersion" style={spaceBetweenStyle}>
      <img src={CalendarLogo} alt="CalendarLogo" className="CalendarLogo" 
            style={{ width: '25px', height: 'auto' }}
            />
        <h2> Version </h2>
        <u style={{ display: 'block' }}>Build Version: 1.0</u>
        <u style={{ display: 'block' }}>App Version: 1.0</u>
        <u style={{ display: 'block' }}>Data Version: 1.0</u>


      </div>
    </div>
  );
}
