import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";

export default function loginPage() {
    return <div> 
        <div class = "login-container">
            
            {/* WHERE LOGO HERE  */}

            <div class="email-field">
                <input type="text" class="emailField" placeholder="Email" />
            </div>
            <div class="password-field">
                <input type="text" class="passwordField" placeholder="Password" />
            </div>
            <div class="login-field">
                <button class= "login-button">
                LOGIN
                </button>
            </div>
            <div class="forgot-password-button">
                <button>
                Forgot Password
                </button>
            </div>
            <div class="sign-up-field">
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