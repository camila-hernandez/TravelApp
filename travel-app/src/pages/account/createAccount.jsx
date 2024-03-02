import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";

export default function createAccount() {

    return <div> 
            <div class = "createAccount-container">
                
                {/* WHERE LOGO HERE  */}
    
                <div class="createAccount-field-email">
                    <input type="text" class="createAccount-box-email" placeholder="Email" />
                </div>
                <div class="createAccount-field-password1">
                    <input type="text" class="createAccount-box-password1" placeholder="Password" />
                </div>
                <div class="createAccount-field-password2">
                    <input type="text" class="createAccount-box-password2" placeholder="Password" />
                </div>
                <div class="createAccount-field-robot">
                    I am not a robot
                </div>
                <div class="createAccount-createAccountbutton">
                    <button>
                    CREATE ACCOUNT
                    </button>
                </div>
            </div>
    
        </div>
    }