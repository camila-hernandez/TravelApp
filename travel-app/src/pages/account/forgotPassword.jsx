import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";
import whereLogo from '../../assets/WhereLogoGreen.png';

export default function forgotPassword() {

    return <div> 
            <div class = "forgotPassword-container">

                <div class="forgotPassword-field-text">
                    <h4>Forgot Password? </h4>
                    <h4>Enter email below</h4>
                </div>

                <div class="forgotPassword-field-email">
                    <input type="text" class="forgotPassword-box-email" placeholder="Email" />
                </div>
    
                <div class="forgotPassword-field-button">
                    <button>
                    RESET PASSWORD
                    </button>
                </div>

            </div>
        </div>
    }