import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";

export default function createAccount() {

    return <div> 
            <div class = "createAccount-container">
                
                {/* WHERE LOGO HERE  */}
    
                <div class="enter-new-email-field">
                    <input type="text" class="newAccountEmailField" placeholder="Email" />
                </div>
                <div class="enter-new-password-field">
                    <input type="text" class="newAccountPassword1" placeholder="Password" />
                </div>
                <div class="confirm-new-password-field">
                    <input type="text" class="newAccountPassword2" placeholder="Password" />
                </div>
                <div class="captcha-field">
                    I am not a robot
                </div>
                <div class="create-account-field">
                    <button>
                    CREATE ACCOUNT
                    </button>
                </div>
            </div>
    
        </div>
    }