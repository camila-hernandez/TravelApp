import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";

export default function changePassword() {

    return <div> 
            <div class = "forgotpassword-container">
                
                {/* WHERE LOGO HERE  */}
    
                <div class="forgot-email-field">
                    <input type="text" class="emailField" placeholder="Email" />
                </div>
                <div class = "not-robot-field">
                    IM NOT A ROBOT
                </div>
                <div class="reset-password-button">
                    <button>
                    CREATE ACCOUONT
                    </button>
                </div>
            </div>
    
        </div>
    }