import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";
import whereLogo from '../../assets/WhereLogoGreen.png';


export default function loginPage() {
    return <div> 
        <div class = "login-container">
            
        <div class="login-field-logo">
            <img src={whereLogo} alt="whereLogo" className="whereLogo" 
            style={{ width: '100px', height: 'auto' }}
            />
        </div>
        
        <div class="login-field-email">
            <input type="text" class="emailField" placeholder="Email" />
        </div>

        <div class="login-field-password">
            <input type="text" class="passwordField" placeholder="Password" />
        </div>

        <div class="login-field-loginbutton">
            <button class= "login-button">
            LOGIN
            </button>
        </div>

        <div class="login-field-forgotPassword">
            <button>
            Forgot Password
            </button>
        </div>

        <div class="login-field-signUp">
            <div class = "sign-up-text">
                Dont have an account?   
            </div>
            <div class = "sign-up-button">
                <button>
                Sign Up
                </button>
            </div>
        </div>

    </div>

</div>
}