import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./accountPage.css";

export default function changePassword() {

    return <div> 
        <div class = "changePassword-container">

            <div class="changePassword-field-description">
                <h3>Please Enter New Password</h3>
            </div>

            <div class="changePassword-field-password1">
                <input type="text" class="changePassword-box-password1" placeholder="New Password" />
            </div>


            <div class="changePassword-box-email">
                <input type="text" class="changePassword-box-password1" placeholder="New Password" />
            </div>

            <div class="changePassword-field-sendLink">
                <button>
                CHANGE PASSWORD
                </button>
            </div>
        </div>
    </div>
    }