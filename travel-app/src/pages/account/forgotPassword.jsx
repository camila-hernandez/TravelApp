import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";
import whereLogo from '../../assets/WhereLogoGreen.png';

export default function forgotPassword() {

    return <div> 
            <div class = "forgotpassword-container">
                
                {/* WHERE LOGO HERE  */}
    
                <div class="forgot-email-field">
                    <input type="text" class="emailField" placeholder="Email" />
                </div>
                <div class="reset-password-button">
                    <button>
                    RESET PASSWORD
                    </button>
                </div>
            </div>
    
        </div>
    }