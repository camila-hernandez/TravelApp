import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";
import whereLogo from '../../assets/WhereLogoGreen.png';

export default function forgotPassword() {

    return <div> 
            <div className = "forgotPassword-container">

                <div className="forgotPassword-field-text">
                    <h4>Forgot Password? </h4>
                    <h4>Enter email below</h4>
                </div>

                <div className="forgotPassword-field-email">
                    <input type="text" className="forgotPassword-box-email" placeholder="Email" />
                </div>
    
                <div className="forgotPassword-field-button">
                    <button>
                    RESET PASSWORD
                    </button>
                </div>

            </div>
        </div>
    }