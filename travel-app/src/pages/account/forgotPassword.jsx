import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";

export default function forgotPassword() {

    return <div> 
            <div class = "login-container">
                
                {/* WHERE LOGO HERE  */}
    
                <div class="email-field">
                    <input type="text" class="emailField" placeholder="Email" />
                </div>
                <div class="forgot-password-button">
                    <button>
                    RESET PASSWORD
                    </button>
                </div>
            </div>
    
        </div>
    }